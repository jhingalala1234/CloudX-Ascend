
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PartyPopper, Instagram, Home } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registrations Closed - AWS Ascend',
  description: 'Registrations for AWS Ascend are now closed as all seats are full. Follow us on Instagram for updates on future events.',
};

export default function RegistrationsClosedPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
        <header className="fixed top-0 z-50 w-full bg-background/95 shadow-md animate-fade-in">
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
            <div className="w-full max-w-md p-8 space-y-6 bg-card text-card-foreground rounded-lg shadow-lg animate-slide-up-fade">
                <div className="flex justify-center">
                    <PartyPopper className="h-20 w-20 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-primary">Registrations Closed!</h1>
                <p className="text-muted-foreground">
                    We're sorry, but all seats for AWS Ascend are now full. Thank you for your incredible interest!
                </p>

                <div className="border-t border-border/50 pt-6 space-y-4">
                    <p className="font-semibold text-foreground">
                        Don't miss out on the next one!
                    </p>
                    <p className="text-muted-foreground">
                        Follow our Instagram to be the first to know about future workshops, events, and all things cloud.
                    </p>
                    <Button asChild className="w-full bg-[#E4405F] hover:bg-[#E4405F]/90 text-white">
                        <Link href="https://www.instagram.com/cloudx.srmist/" target="_blank" rel="noopener noreferrer">
                            <Instagram className="mr-2 h-5 w-5" />
                            Follow on Instagram
                        </Link>
                    </Button>
                </div>
                
                <Button asChild variant="outline" className="w-full">
                    <Link href="/">
                        <Home className="mr-2 h-4 w-4" />
                        Return to Homepage
                    </Link>
                </Button>
            </div>
        </main>
    </div>
  );
}

    