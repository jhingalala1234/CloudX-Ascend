
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Label } from '@/components/ui/label';
import { saveRegistration } from '@/services/registration';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  registrationNumber: z.string().min(1, 'Registration number is required.'),
  email: z.string().min(2, 'SRMIST ID is required.'),
  phoneNumber: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number.'),
  paymentScreenshot: z
    .any()
    .refine((files) => files?.length == 1, 'Payment screenshot is required.')
    .refine((files) => files?.[0]?.size <= 5_000_000, `Max file size is 5MB.`)
});

type FormData = z.infer<typeof formSchema>;

const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });


export default function RegisterPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [upiId, setUpiId] = useState('');

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      registrationNumber: '',
      email: '',
      phoneNumber: '',
    },
  });

  const fileRef = form.register("paymentScreenshot");

  function handleProceed(values: FormData) {
    setFormData(values);
    setIsDialogOpen(true);
  }

  async function handleFinalSubmit() {
    if (!formData || !upiId) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsDialogOpen(false);
    setIsSubmitting(true);
    
    const screenshotFile = formData.paymentScreenshot[0];
    const screenshotBase64 = await fileToBase64(screenshotFile);

    try {
      await saveRegistration({
        name: formData.name,
        registrationNumber: formData.registrationNumber,
        email: `${formData.email}@srmist.edu.in`,
        phoneNumber: `+91${formData.phoneNumber}`,
        upiId: upiId,
        paymentScreenshot: {
            fileName: screenshotFile.name,
            contentType: screenshotFile.type,
            base64: screenshotBase64,
        },
      });

      router.push('/success');

    } catch (error) {
      console.error('Registration failed:', error);
      toast({
        title: 'Registration Failed',
        description:
          'There was a problem submitting your registration. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
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
              <div className="w-full max-w-2xl p-8 space-y-6 bg-card text-card-foreground rounded-lg shadow-lg">
                  <div className="text-center">
                      <h1 className="text-3xl font-bold text-primary">Register for Cloud Ascend</h1>
                      <p className="text-muted-foreground mt-2">Secure your spot for a full day of hands-on cloud learning.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                      <div className="space-y-4 rounded-lg bg-muted/30 p-6">
                          <h3 className="text-lg font-semibold">Payment Details</h3>
                          <p className="text-muted-foreground text-sm">
                              Pay here, gees rs 99 only
                          </p>
                          <div className="flex flex-col items-center gap-4">
                              <Image src="/payments/qr-code.jpg" alt="UPI QR Code" width={200} height={200} className="rounded-md" data-ai-hint="qr code"/>
                              <p className="text-sm text-center">Scan the QR code with any UPI app.</p>
                              <span className="text-xs text-muted-foreground">OR</span>
                              <a href="upi://pay?pa=sarthak.lal@ptaxis&am=99&pn=CloudX%20Workshop" className="w-full">
                                  <Button variant="outline" className="w-full">Pay with UPI</Button>
                              </a>
                          </div>
                          <p className="text-xs text-muted-foreground pt-4">After payment, please upload the screenshot and enter the UPI Reference ID in the form.</p>
                      </div>

                      <Form {...form}>
                          <form onSubmit={form.handleSubmit(handleProceed)} className="space-y-4">
                          <FormField
                              control={form.control}
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
                              control={form.control}
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
                            control={form.control}
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
                            control={form.control}
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
                          <FormField
                              control={form.control}
                              name="paymentScreenshot"
                              render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Payment Screenshot</FormLabel>
                                  <FormDescription>
                                      Upload the screenshot of your ₹99 payment.
                                  </FormDescription>
                                  <FormControl>
                                  <Input type="file" {...fileRef} />
                                  </FormControl>
                                  <FormMessage />
                              </FormItem>
                              )}
                          />
                          
                          <Button type="submit" className="w-full" disabled={isSubmitting}>
                              {isSubmitting ? (
                                  <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Processing...
                                  </>
                              ) : (
                                  <>
                                  Proceed to Verify
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                  </>
                              )}
                          </Button>
                          </form>
                      </Form>
                  </div>
              </div>
          </main>
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Verify Payment</AlertDialogTitle>
            <AlertDialogDescription>
              Please enter the UPI Transaction ID (or Reference ID) from your payment app to help us verify your registration.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-2">
            <Label htmlFor="upiId">UPI Transaction ID</Label>
            <Input
              id="upiId"
              placeholder="e.g., 4238A1B2C3D4"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              autoComplete="off"
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleFinalSubmit} disabled={!upiId}>
              Submit Registration
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
