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
  Gift,
  Users,
  Linkedin,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
                alt="Cloud Ascend Logo"
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
                href="#sessions"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Sessions
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

        <main className="flex-1 pt-20">
          <div className="container mx-auto px-4">
            <section
              id="home"
              className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center overflow-hidden text-center"
            >
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
              </div>
              <div className="relative mx-auto max-w-5xl">
                <h1 className="font-headline text-5xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                  Cloud Ascend:
                  <br />
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    Elevate Your Skills.
                  </span>
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                  One Day. Real Projects. From Cloud Basics to Docker, Kubernetes, and AWS Q CLI — Build, Deploy & Leave with skills that stick.
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
                  <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                    Workshop Overview
                  </h2>
                   <p className="text-lg text-muted-foreground">
                    Cloud Ascend is a full-day, hands-on workshop designed for anyone — no prior cloud experience required. From your very first step in the cloud to building with AWS, Docker, Kubernetes, and the AWS Q CLI, you’ll learn by doing, not just listening.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Guided by AWS Community Builders, this workshop is packed with labs, swags, and community learning. You’ll walk out with real projects, a certificate, and practical skills that set you apart. Miss it, and you’re missing the easiest way to step into the future of cloud.
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
                <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                  What You’ll Learn
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                  This isn’t theory. Every session is hands-on, so you leave with real projects and skills you can show off.
                </p>
                <div className="mt-12 grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Cloud className="mb-4 h-10 w-10 text-primary" />
                      <CardTitle>AWS & Data Lakes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Kickstart your cloud journey with the fundamentals of AWS, then build and manage your very own data lake — the backbone of modern data-driven applications.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Code className="mb-4 h-10 w-10 text-accent" />
                      <CardTitle>Docker & Kubernetes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Master the essentials of containerization and orchestration. Learn how to package, run, and scale applications the way the industry does it.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Zap className="mb-4 h-10 w-10 text-primary" />
                      <CardTitle>Generative AI with AWS Q</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Step into the future with the AWS Q CLI. Build intelligent, AI-powered solutions and see how generative AI is reshaping cloud development.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
            
            <section id="sessions" className="py-20 sm:py-32">
              <div className="container mx-auto max-w-4xl text-center">
                <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                  Deep Dive Sessions
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                  Our expert-led sessions are designed to give you hands-on experience and deep insights.
                </p>
                <div className="mt-12 space-y-12 text-left">
                  <Card className="overflow-hidden md:grid md:grid-cols-3">
                    <div className="md:col-span-2">
                       <CardHeader>
                        <CardTitle className="text-2xl text-accent">Session 01: CloudSteps</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">Your first steps into the cloud. Begin with the essentials, then dive into building a data lake on AWS, while gaining practical exposure to Docker and Kubernetes.</p>
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src="/speakers/speaker1.jpeg" alt="Abinaya S V" />
                            <AvatarFallback>AS</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-bold">Abinaya S V</p>
                              <span className="text-muted-foreground/50">|</span>
                              <Link href="https://www.linkedin.com/in/abinayasv/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5 text-[#0077b5] transition-colors hover:text-[#0077b5]/80" />
                              </Link>
                            </div>
                            <p className="text-sm text-primary">AWS Community Builder - Data</p>
                            <p className="text-sm text-muted-foreground">PwC Acceleration Centers in India</p>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                    <div className="bg-muted/50 p-6 md:col-span-1">
                      <h4 className="font-bold text-lg mb-2">Key Takeaways</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Grasp core AWS services and concepts</li>
                        <li>Build and manage a functional data lake</li>
                        <li>Containerize applications with Docker</li>
                        <li>Orchestrate workloads with Kubernetes basics</li>
                      </ul>
                    </div>
                  </Card>
                  
                  <Card className="overflow-hidden md:grid md:grid-cols-3">
                     <div className="md:col-span-2">
                       <CardHeader>
                        <CardTitle className="text-2xl text-accent">Session 02: CloudUnlocked</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">Step into the future of development with the AWS Q CLI, a generative AI assistant built for the command line. Learn how to use AI to build, debug, and automate faster than ever.</p>
                         <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src="/speakers/speaker2.jpeg" alt="Jeevitha M" />
                            <AvatarFallback>JM</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-bold">Jeevitha M</p>
                              <span className="text-muted-foreground/50">|</span>
                              <Link href="https://www.linkedin.com/in/jeevitha-m-357979223/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5 text-[#0077b5] transition-colors hover:text-[#0077b5]/80" />
                              </Link>
                            </div>
                            <p className="text-sm text-primary">AWS Community Builder - AI Engineering</p>
                            <p className="text-sm text-muted-foreground">BigTapp Analytics</p>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                     <div className="bg-muted/50 p-6 md:col-span-1">
                      <h4 className="font-bold text-lg mb-2">Key Takeaways</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Understand generative AI fundamentals</li>
                        <li>Set up and work with the AWS Q CLI</li>
                        <li>Build and debug apps with AI assistance</li>
                        <li>Automate tasks using natural language commands</li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>
            </section>

            <section className="py-20 text-center sm:py-32">
              <div className="container mx-auto">
                <p className="text-lg text-muted-foreground">
                  ...and for a "CloudX" touch to the events
                </p>
                <h2 className="font-headline mt-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl">
                  NO PREQUISITE KNOWLEDGE REQUIRED.
                </h2>
                <p className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
                  Don't worry if you don't know anything. All are welcome.
                </p>
              </div>
            </section>
            
            <section id="schedule" className="py-20 sm:py-32">
              <div className="container mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
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
                        09:00 AM - Registration & Breakfast
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
                        09:15 AM - 12:00 PM: Session 01 by Abinaya S V
                      </h4>
                      <p className="text-muted-foreground">
                        Your first steps with cloud. An introduction to building a data lake on AWS, with hands-on experience in Docker & Kubernetes.
                      </p>
                    </div>
                  </li>
                   <li className="flex items-start gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/80 text-primary-foreground">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z"/></svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">
                        12:00 PM - 01:00 PM: Lunch Break
                      </h4>
                      <p className="text-muted-foreground">
                        Refuel and connect with other attendees.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">
                        01:00 PM - 03:00 PM: Session 02 by Jeevitha M
                      </h4>
                      <p className="text-muted-foreground">
                        Explore the future of development by building with the AWS Q CLI.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Gift className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">
                        03:00 PM - 03:15 PM: Quiz & Swag
                      </h4>
                      <p className="text-muted-foreground">
                        Test your knowledge and win exclusive AWS swag! Refreshments from Burger King will be provided.
                      </p>
                    </div>
                  </li>
                   <li className="flex items-start gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                       <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">
                        03:15 PM - 04:30 PM: Q&A and Networking
                      </h4>
                      <p className="text-muted-foreground">
                        Ask your questions to the experts and network with peers.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">
                        04:30 PM - Wrap-up
                      </h4>
                      <p className="text-muted-foreground">
                        Final remarks and closing.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            
            <section id="location" className="py-20 sm:py-32">
              <div className="container mx-auto max-w-4xl text-center">
                <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                  Location
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Join us at the heart of innovation.
                </p>
                <div className="mt-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                  <div className="w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!d3890.2856053880896!2d80.04248560906781!3d12.824811887424941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70ce1c18cd9%3A0xffb39775f24c16e9!2sTech%20Park%20Building%2C%20SRM%20University%2C%20Potheri%2C%20SRM%20Nagar%2C%20Kattankulathur%2C%20Tamil%20Nadu%20603203!5e0!3m2!1sen!2sin!4v1757371884091!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                  <div className="flex items-center gap-4 text-left">
                    <MapPin className="h-12 w-12 flex-shrink-0 text-primary" />
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
                <h2 className="text-center font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
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
                      No prerequisite knowledge is required! We welcome everyone,
                      from beginners to those with some experience. You will
                      need to bring your own laptop.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg">
                      What does the ticket price include?
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      Your ticket includes full access to all sessions,
                      hands-on labs, lunch, Burger King refreshments, and the
                      chance to win AWS swag. OD will be provided for students.
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
              © {new Date().getFullYear()} Cloud Ascend. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
      <RegistrationForm />
      <ScrollToTop />
    </Dialog>
  );
}
