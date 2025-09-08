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
  MapPin,
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
import { RegistrationForm } from '@/components/registration-form';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { ScrollToTop } from '@/components/scroll-to-top';

export default function Home() {
  return (
    <Dialog>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto flex h-20 items-center justify-between px-4">
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
                href="#location"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Location
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

        <main className="flex-1">
          <div className="container mx-auto px-4">
            <section
              id="home"
              className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center"
            >
              <div className="absolute inset-0 -z-10">
                <div className="absolute h-full w-full bg-transparent bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
              </div>
              <div className="relative mx-auto max-w-5xl">
                <h1 className="font-headline text-5xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                  The Future of Cloud,
                  <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Today.
                  </span>
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                  Join our exclusive, full-day workshop on AWS & DevOps. A
                  hands-on experience led by industry experts to elevate your
                  cloud skills.
                </p>
                <div className="mt-10">
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="h-14 rounded-full bg-primary px-12 text-lg font-bold text-primary-foreground transition-transform hover:scale-105 hover:bg-primary/90"
                    >
                      Register Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                </div>
              </div>
            </section>

            <section id="overview" className="py-20 sm:py-32">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-accent">
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
                    opportunity to learn from experts, engage in hands-on labs,
                    and network with peers.
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

            <section id="learn" className="py-20 sm:py-32">
              <div className="container mx-auto text-center">
                <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-accent">
                  What You'll Learn
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                  Our curriculum is packed with practical knowledge and hands-on
                  exercises to ensure you leave with valuable, real-world
                  skills.
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
                      <Code className="mb-4 h-10 w-10 text-accent" />
                      <h3 className="text-xl font-bold">
                        Infrastructure as Code
                      </h3>
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

            <section className="py-20 sm:py-32 text-center">
              <div className="container mx-auto">
                <p className="text-lg text-muted-foreground">
                  ...and for a "CloudX" touch to the events
                </p>
                <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mt-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  NO PREQUISITE KNOWLEDGE REQUIRED.
                </h2>
                <p className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
                  Don't worry if you don't know anything. All are welcome.
                </p>
              </div>
            </section>

            <section id="speakers" className="py-20 sm:py-32">
              <div className="text-center">
                <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-accent">
                  Meet the Speakers
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  Learn from the best. Our speakers are recognized AWS
                  Community Builders and industry veterans.
                </p>
                <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
                  <div className="flex flex-col items-center gap-4">
                    <Avatar className="h-32 w-32">
                      <AvatarImage
                        src="https://picsum.photos/200"
                        alt="Jane Doe"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold">Jane Doe</h3>
                      <p className="text-primary">AWS Community Builder</p>
                      <p className="mt-2 text-muted-foreground">
                        Jane is a DevOps enthusiast with over 10 years of
                        experience in building scalable cloud infrastructures.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Avatar className="h-32 w-32">
                      <AvatarImage
                        src="https://picsum.photos/201"
                        alt="John Smith"
                      />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold">John Smith</h3>
                      <p className="text-accent">Senior Cloud Architect</p>
                      <p className="mt-2 text-muted-foreground">
                        John specializes in serverless architectures and has
                        helped numerous startups scale their applications on AWS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="schedule" className="py-20 sm:py-32">
              <div className="container mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-accent">
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
                      <h4 className="text-xl font-bold">
                        09:00 AM - Registration
                      </h4>
                      <p className="text-muted-foreground">
                        Coffee, networking, and setup.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">
                        10:00 AM - AWS Deep Dive
                      </h4>
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
                      <h4 className="text-xl font-bold">
                        01:30 PM - DevOps & CI/CD
                      </h4>
                      <p className="text-muted-foreground">
                        Automating your workflows.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">
                        05:00 PM - Q&A and Wrap-up
                      </h4>
                      <p className="text-muted-foreground">
                        Final questions and closing remarks.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section id="location" className="py-20 sm:py-32">
              <div className="container mx-auto max-w-4xl text-center">
                <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-accent">
                  Location
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Join us at the heart of innovation.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2856053880896!2d80.04248560906781!3d12.824811887424941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70ce1c18cd9%3A0xffb39775f24c16e9!2sTech%20Park%20Building%2C%20SRM%20University%2C%20Potheri%2C%20SRM%20Nagar%2C%20Kattankulathur%2C%20Tamil%20Nadu%20603203!5e0!3m2!1sen!2sin!4v1757371884091!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                  <div className="text-left flex items-center gap-4">
                    <MapPin className="h-12 w-12 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold">Our Venue</h4>
                      <p className="text-muted-foreground">
                        iMac Lab, 14th Floor, Tech Park 1, SRMIST, Kattankulathur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="py-20 sm:py-32">
              <div className="mx-auto max-w-3xl">
                <h2 className="text-center font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-accent">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="mt-12 w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg">
                      Who is this workshop for?
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      This workshop is ideal for developers, junior DevOps
                      engineers, students, and anyone interested in learning
                      about cloud computing with AWS.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg">
                      Are there any prerequisites?
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      A basic understanding of command-line interfaces and
                      general programming concepts is helpful, but not strictly
                      required. You will need to bring your own laptop.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg">
                      What does the ticket price include?
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      Your ticket includes full access to all sessions,
                      hands-on labs, lunch, coffee, and networking
                      opportunities.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>
          </div>
        </main>

        <footer className="border-t border-border/50">
          <div className="container mx-auto py-12 px-4 text-center text-muted-foreground">
            <div className="mb-4">
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="h-14 rounded-full bg-primary px-12 text-lg font-bold text-primary-foreground transition-transform hover:scale-105 hover:bg-primary/90"
                >
                  Secure Your Spot Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
            </div>
            <p className="mt-8 text-sm">
              © {new Date().getFullYear()} CloudX. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
      <RegistrationForm />
      <ScrollToTop />
    </Dialog>
  );
}
