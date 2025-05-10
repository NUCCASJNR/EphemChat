import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Lock, Shield, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { FadeIn } from "@/components/fade-in"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="border-b border-muted">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo className="text-xl" />
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-24">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <FadeIn>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Secure, Ephemeral Messaging
                </h1>
              </FadeIn>
              <FadeIn delay={300}>
                <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                  EphemChat provides private conversations that disappear after being read. Your privacy comes first.
                </p>
              </FadeIn>
              <FadeIn delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" asChild className="px-8">
                    <Link href="/auth/signup">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/auth/login">Log in to your account</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={300}>
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden border border-muted shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-background to-transparent z-10 opacity-20"></div>
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="EphemChat App Screenshot"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={200}>
              <FeatureCard
                icon={<Clock className="h-10 w-10 text-primary" />}
                title="Ephemeral Messages"
                description="Messages disappear after being read, leaving no trace behind."
              />
            </FadeIn>
            <FadeIn delay={400}>
              <FeatureCard
                icon={<Lock className="h-10 w-10 text-primary" />}
                title="End-to-End Encryption"
                description="Your conversations are encrypted and can only be read by you and the recipient."
              />
            </FadeIn>
            <FadeIn delay={600}>
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-primary" />}
                title="Privacy First"
                description="We don't store your messages or metadata longer than necessary."
              />
            </FadeIn>
            <FadeIn delay={800}>
              <FeatureCard
                icon={<Smartphone className="h-10 w-10 text-primary" />}
                title="Mobile Responsive"
                description="Use EphemChat on any device with a seamless experience."
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={200}>
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
                <p className="text-muted-foreground">Sign up with your email and create a secure password.</p>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Start a Conversation</h3>
                <p className="text-muted-foreground">Find friends or contacts and begin messaging securely.</p>
              </div>
            </FadeIn>
            <FadeIn delay={600}>
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Enjoy Privacy</h3>
                <p className="text-muted-foreground">Messages disappear after being read, ensuring your privacy.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">Ready to take control of your privacy?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who value their digital privacy. Start using EphemChat today.
            </p>
            <Button size="lg" asChild className="px-8">
              <Link href="/auth/signup">
                Create Your Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-muted py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Logo />
              <p className="text-sm text-muted-foreground mt-2">© 2023 EphemChat. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Feature Card Component
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-background border border-muted rounded-lg p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
