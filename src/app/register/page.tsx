
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
import { saveRegistration } from '@/services/firestore';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  registrationNumber: z.string().min(1, 'Registration number is required.'),
  email: z
    .string()
    .email('Invalid email address.')
    .refine(
      (email) => email.endsWith('@srmist.edu.in'),
      'Only @srmist.edu.in emails are allowed.'
    ),
  phoneNumber: z.string().min(10, 'Please enter a valid phone number.'),
  paymentScreenshot: z.any().refine((files) => files?.length == 1, 'Payment screenshot is required.'),
});

type FormData = z.infer<typeof formSchema>;

export default function RegisterPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    const file = values.paymentScreenshot[0];
    if (!file) {
      toast({
        title: 'Error',
        description: 'Please upload a payment screenshot.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64data = reader.result as string;
        await saveRegistration({ ...values, paymentScreenshot: base64data });
      };
    } catch (error) {
      console.error('Error processing form:', error);
      toast({
        title: 'Error',
        description:
          'Failed to process registration. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      // This will be reached before the file reader is done
      // The redirect will happen in the server action
    }
  }

  return (
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
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary">Register for Cloud Ascend</h1>
                    <p className="text-muted-foreground mt-2">Secure your spot for a full day of hands-on cloud learning.</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                            <Input placeholder="jd1234@srmist.edu.in" {...field} />
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
                            <Input type="tel" placeholder="+91 1234567890" {...field} />
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
                                Please pay ₹99 to <a href="https://razorpay.me/pl/M2FFrP5P7l9KxN/view" target="_blank" rel="noopener noreferrer" className="text-primary underline">this link</a> and upload the screenshot.
                            </FormDescription>
                            <FormControl>
                            <Input type="file" accept="image/*" {...fileRef} />
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
                            Register & Proceed
                            <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </Button>
                    </form>
                </Form>
            </div>
        </main>
    </div>
  );
}
