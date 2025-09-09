
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function SuccessPage() {
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
            </div>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-card text-card-foreground rounded-lg shadow-lg">
                <div className="flex justify-center">
                    <CheckCircle className="h-20 w-20 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold text-primary">Registration Successful!</h1>
                <p className="text-muted-foreground">
                    Thank you for registering. Your spot is secured pending payment verification. You will receive a confirmation email shortly.
                </p>
                <Button asChild>
                    <Link href="/">Return to Homepage</Link>
                </Button>
            </div>
        </main>
    </div>
  );
}
