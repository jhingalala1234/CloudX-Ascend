import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Cloud,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full bg-transparent">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Cloud className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold text-primary">
              CloudX
            </span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="container flex h-screen min-h-[700px] items-center justify-center text-center">
          <div className="relative mx-auto max-w-5xl">
             <div className="absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            <h1 className="font-headline text-5xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              The Future of Cloud,
              <br />
              <span className="text-primary/90">Today.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Join our exclusive, full-day workshop on AWS & DevOps. A hands-on experience led by industry experts to elevate your cloud skills.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="font-bold text-lg h-14 px-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105">
                <Link href="https://razorpay.me/pl/M2FFrP5P7l9KxN/view" target="_blank" rel="noopener noreferrer">
                  Pay Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
             <p className="mt-20 text-sm text-muted-foreground">
              © {new Date().getFullYear()} CloudX. All rights reserved.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
