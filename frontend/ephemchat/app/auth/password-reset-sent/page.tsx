"use client"

import { useRouter } from "next/navigation"
import { ArrowRight, CheckCircle, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Logo } from "@/components/logo"

export default function PasswordResetSentPage() {
  const router = useRouter()

  const handleContinue = () => {
    router.push("/auth/reset-password/verify")
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg border-muted">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <div className="mx-auto bg-primary/20 p-3 rounded-full">
            <CheckCircle className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Reset Instructions Sent</CardTitle>
          <CardDescription>
            We've sent password reset instructions to your email address. Please check your inbox.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="bg-muted/50 p-4 rounded-lg">
            <Mail className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              The reset link will expire in 1 hour. If you don't see the email, check your spam folder.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" onClick={handleContinue}>
            Continue to Verification
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="text-center text-sm">
            Didn't receive the email? <button className="text-primary hover:underline">Resend instructions</button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
