import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Cloud,
  Code,
  Zap,
  Star,
  Clock,
  BookOpen,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="CloudX Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link
              href="#overview"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Overview
            </Link>
            <Link
              href="#learn"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              What you'll learn
            </Link>
            <Link
              href="#speakers"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Speakers
            </Link>
            <Link
              href="#schedule"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Schedule
            </Link>
            <Link
              href="#faq"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4">
        <section
          id="home"
          className="flex min-h-screen flex-col items-center justify-center text-center"
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            <h1 className="font-headline text-5xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              The Future of Cloud,
              <br />
              <span className="text-primary/90">Today.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Join our exclusive, full-day workshop on AWS & DevOps. A hands-on
              experience led by industry experts to elevate your cloud skills.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full bg-primary px-12 text-lg font-bold text-primary-foreground transition-transform hover:scale-105 hover:bg-primary/90"
              >
                <Link
                  href="https://razorpay.me/pl/M2FFrP5P7l9KxN/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pay Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="overview" className="py-20 sm:py-32">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
                Workshop Overview
              </h2>
              <p className="text-lg text-muted-foreground">
                This immersive full-day workshop is designed for developers,
                DevOps engineers, and tech enthusiasts looking to master the
                essentials of Amazon Web Services (AWS) and modern DevOps
                practices.
              </p>
              <p className="text-lg text-muted-foreground">
                Hosted by AWS Community Builders, this event offers a unique
                opportunity to learn from experts, engage in hands-on labs, and
                network with peers.
              </p>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/400"
                width={600}
                height={400}
                alt="Workshop in session"
                data-ai-hint="workshop team"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section id="learn" className="bg-secondary/50 py-20 sm:py-32 -mx-4 px-4">
          <div className="container mx-auto text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              What You'll Learn
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              Our curriculum is packed with practical knowledge and hands-on
              exercises to ensure you leave with valuable, real-world skills.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="text-left">
                <CardContent className="pt-6">
                  <Cloud className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">AWS Fundamentals</h3>
                  <p className="mt-2 text-muted-foreground">
                    Deep dive into core AWS services like EC2, S3, IAM, and
                    VPC.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardContent className="pt-6">
                  <Code className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">Infrastructure as Code</h3>
                  <p className="mt-2 text-muted-foreground">
                    Learn to automate your infrastructure with Terraform and
                    AWS CDK.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardContent className="pt-6">
                  <Zap className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">CI/CD Pipelines</h3>
                  <p className="mt-2 text-muted-foreground">
                    Build and deploy applications automatically with GitHub
                    Actions and AWS CodePipeline.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="speakers" className="py-20 sm:py-32">
          <div className="text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              Meet the Speakers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Learn from the best. Our speakers are recognized AWS Community
              Builders and industry veterans.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="https://picsum.photos/200" alt="Jane Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Jane Doe</h3>
                  <p className="text-primary">AWS Community Builder</p>
                  <p className="mt-2 text-muted-foreground">
                    Jane is a DevOps enthusiast with over 10 years of experience
                    in building scalable cloud infrastructures.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="https://picsum.photos/201" alt="John Smith" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-2xl font-bold">John Smith</h3>
                  <p className="text-primary">Senior Cloud Architect</p>
                  <p className="mt-2 text-muted-foreground">
                    John specializes in serverless architectures and has helped
                    numerous startups scale their applications on AWS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="bg-secondary/50 py-20 sm:py-32 -mx-4 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              Workshop Schedule
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A full day of learning and networking, from morning coffee to
              evening wrap-up.
            </p>
            <ul className="mt-12 space-y-8 text-left">
              <li className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">09:00 AM - Registration</h4>
                  <p className="text-muted-foreground">
                    Coffee, networking, and setup.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">10:00 AM - AWS Deep Dive</h4>
                  <p className="text-muted-foreground">
                    Hands-on lab with core services.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">01:30 PM - DevOps & CI/CD</h4>
                  <p className="text-muted-foreground">
                    Automating your workflows.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">05:00 PM - Q&A and Wrap-up</h4>
                  <p className="text-muted-foreground">
                    Final questions and closing remarks.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section id="faq" className="py-20 sm:py-32">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="mt-12 w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  Who is this workshop for?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  This workshop is ideal for developers, junior DevOps engineers,
                  students, and anyone interested in learning about cloud
                  computing with AWS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">
                  Are there any prerequisites?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  A basic understanding of command-line interfaces and general
                  programming concepts is helpful, but not strictly required.
                  You will need to bring your own laptop.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">
                  What does the ticket price include?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Your ticket includes full access to all sessions, hands-on
                  labs, lunch, coffee, and networking opportunities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 bg-secondary/50">
        <div className="container py-12 text-center text-muted-foreground">
          <div className="mb-4">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-primary px-12 text-lg font-bold text-primary-foreground transition-transform hover:scale-105 hover:bg-primary/90"
            >
              <Link
                href="https://razorpay.me/pl/M2FFrP5P7l9KxN/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Secure Your Spot Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="mt-8 text-sm">
            © {new Date().getFullYear()} CloudX. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
