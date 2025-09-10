
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ArrowRight, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { saveRegistration } from '@/services/registration';
import { storage } from '@/lib/firebase';
import { Progress } from '@/components/ui/progress';

// Schema for Step 1
const userDetailsSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  registrationNumber: z.string().min(1, 'Registration number is required.'),
  email: z.string().min(2, 'SRMIST ID is required.'),
  phoneNumber: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number.'),
});

// Schema for Step 3
const paymentDetailsSchema = z.object({
  upiId: z.string().min(1, 'UPI Transaction ID is required.'),
  paymentScreenshot: z
    .any()
    .refine((files) => files?.length == 1, 'Payment screenshot is required.')
    .refine((files) => files?.[0]?.size <= 5_000_000, `Max file size is 5MB.`),
});

type UserDetailsData = z.infer<typeof userDetailsSchema>;
type PaymentDetailsData = z.infer<typeof paymentDetailsSchema>;

export default function RegisterPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetailsData | null>(null);

  const userDetailsForm = useForm<UserDetailsData>({
    resolver: zodResolver(userDetailsSchema),
    defaultValues: { name: '', registrationNumber: '', email: '', phoneNumber: '' },
  });

  const paymentDetailsForm = useForm<PaymentDetailsData>({
    resolver: zodResolver(paymentDetailsSchema),
    defaultValues: { upiId: '' },
  });
  const fileRef = paymentDetailsForm.register("paymentScreenshot");


  function handleProceed(values: UserDetailsData) {
    setUserDetails(values);
    setStep(2);
  }

  async function handleFinalSubmit(values: PaymentDetailsData) {
    if (!userDetails) {
      toast({
        title: 'Error',
        description: 'User details are missing. Please go back to the first step.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    setUploadProgress(0);

    const screenshotFile = values.paymentScreenshot[0] as File;

    try {
      const storageRef = ref(storage, `screenshots/${Date.now()}-${userDetails.registrationNumber}-${screenshotFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, screenshotFile);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Upload failed:", error);
          toast({
            title: 'Upload Failed',
            description: 'Could not upload your screenshot. Please try again.',
            variant: 'destructive',
          });
          setIsSubmitting(false);
          setUploadProgress(null);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUploadProgress(100);

          await saveRegistration({
            name: userDetails.name,
            registrationNumber: userDetails.registrationNumber,
            email: `${userDetails.email}@srmist.edu.in`,
            phoneNumber: `+91${userDetails.phoneNumber}`,
            upiId: values.upiId,
            screenshotUrl: downloadURL,
          });

          router.push('/success');
        }
      );
    } catch (error) {
      console.error('Registration failed:', error);
      toast({
        title: 'Registration Failed',
        description: 'There was a problem submitting your registration. Please try again.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      setUploadProgress(null);
    }
  }

  return (
    <>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <header className="fixed top-0 z-50 w-full bg-background/95 shadow-md">
          <div className="container mx-auto flex h-20 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Cloud Ascend Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <Button asChild variant="outline">
              <Link href="/">Home</Link>
            </Button>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center pt-20">
          <div className="w-full max-w-lg p-8 space-y-6 bg-card text-card-foreground rounded-lg shadow-lg">

            {/* Step 1: User Details Form */}
            {step === 1 && (
              <>
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-primary">Register for Cloud Ascend</h1>
                  <p className="text-muted-foreground mt-2">Step 1 of 3: Enter your details</p>
                </div>
                <Form {...userDetailsForm}>
                  <form onSubmit={userDetailsForm.handleSubmit(handleProceed)} className="space-y-4">
                    <FormField
                        control={userDetailsForm.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                            <Input placeholder="Jane Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={userDetailsForm.control}
                        name="registrationNumber"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Registration Number</FormLabel>
                            <FormControl>
                            <Input placeholder="RA2111003010XXX" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                      control={userDetailsForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>SRMIST Email</FormLabel>
                          <FormControl>
                            <div className="flex items-center">
                              <Input
                                placeholder="ab1234"
                                className="rounded-r-none"
                                {...field}
                              />
                              <span className="inline-flex h-10 items-center rounded-r-md border border-l-0 border-input bg-muted px-3 text-muted-foreground">
                                @srmist.edu.in
                              </span>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={userDetailsForm.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <div className="flex items-center">
                              <span className="inline-flex h-10 items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-muted-foreground">
                                +91
                              </span>
                              <Input
                                type="tel"
                                placeholder="9876543210"
                                className="rounded-l-none"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      Proceed to Payment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </>
            )}

            {/* Step 2: Payment Details */}
            {step === 2 && (
              <div className="space-y-6 text-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary">Payment</h1>
                    <p className="text-muted-foreground mt-2">Step 2 of 3: Complete your payment</p>
                </div>
                 <div className="space-y-4 rounded-lg bg-muted/30 p-6">
                    <h3 className="text-lg font-semibold">Pay ₹99 to secure your spot</h3>
                    <div className="flex flex-col items-center gap-4">
                        <Image src="/payments/qr-code.jpg" alt="UPI QR Code" width={250} height={250} className="rounded-md" data-ai-hint="qr code"/>
                        <p className="text-sm">Scan the QR code with any UPI app.</p>
                        <span className="text-xs text-muted-foreground">OR</span>
                         <a href="upi://pay?pa=sarthak.lal@ptaxis&am=99&pn=CloudX%20Workshop" className="w-full">
                            <Button variant="outline" className="w-full">Pay with UPI</Button>
                         </a>
                    </div>
                </div>
                 <p className="text-sm text-muted-foreground">
                    After payment, return here to complete the final step.
                </p>
                <div className="flex justify-center gap-4">
                     <Button variant="outline" onClick={() => setStep(1)}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                    </Button>
                    <Button onClick={() => setStep(3)}>
                        I Have Paid
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
              </div>
            )}

            {/* Step 3: Screenshot Upload */}
            {step === 3 && (
               <>
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-primary">Final Step</h1>
                  <p className="text-muted-foreground mt-2">Step 3 of 3: Verify your payment</p>
                </div>
                <Form {...paymentDetailsForm}>
                    <form onSubmit={paymentDetailsForm.handleSubmit(handleFinalSubmit)} className="space-y-4">
                        <FormField
                            control={paymentDetailsForm.control}
                            name="upiId"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>UPI Transaction ID</FormLabel>
                                <FormDescription>
                                    Enter the Reference or Transaction ID from your payment app.
                                </FormDescription>
                                <FormControl>
                                <Input placeholder="e.g., 4238A1B2C3D4" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={paymentDetailsForm.control}
                            name="paymentScreenshot"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Payment Screenshot</FormLabel>
                                <FormDescription>
                                    Upload the screenshot of your ₹99 payment.
                                </FormDescription>
                                <FormControl>
                                <Input type="file" {...fileRef} accept="image/png, image/jpeg, image/jpg" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        {isSubmitting && uploadProgress !== null && (
                        <div className="space-y-1">
                            <Label>Uploading...</Label>
                            <Progress value={uploadProgress} className="w-full" />
                        </div>
                        )}
                        <div className="flex gap-4">
                            <Button variant="outline" onClick={() => setStep(2)} className="w-1/3" disabled={isSubmitting}>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back
                            </Button>
                            <Button type="submit" className="w-2/3" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Processing...
                                    </>
                                ) : (
                                    <>
                                    Submit Registration
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </Form>
               </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
