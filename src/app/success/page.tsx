
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Linkedin, Github, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
        <header className="fixed top-0 z-50 w-full bg-background/95 shadow-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/logo.png"
                    alt="AWS Ascend Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                />
                </Link>
            </div>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-card text-card-foreground rounded-lg shadow-lg">
                <div className="flex justify-center">
                    <CheckCircle className="h-20 w-20 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold text-primary">Registration Submitted!</h1>
                <p className="text-muted-foreground">
                    Thank you! Your ticket will be sent to your registered email address by the end of the day after we verify your payment.
                </p>
                <div className="text-sm text-muted-foreground pt-4">
                    <p>In case of any issues or questions, feel free to reach out to us on our socials.</p>
                     <div className="flex justify-center gap-6 mt-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-6 w-6" /></Link>
                        <Link href="mailto:example@example.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-6 w-6" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></Link>
                    </div>
                </div>
                <Button asChild>
                    <Link href="/">Return to Homepage</Link>
                </Button>
            </div>
        </main>
    </div>
  );
}
