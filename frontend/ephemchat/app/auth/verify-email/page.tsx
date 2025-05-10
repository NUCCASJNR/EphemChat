"use client"

import type React from "react"

import { ArrowRight, Mail } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"

export default function VerifyEmailPage() {
  const router = useRouter()
  const [code, setCode] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Verification code submitted:", code)
    // For demo purposes, navigate to chat
    router.push("/chat")
  }

  const handleResend = () => {
    console.log("Resending verification code")
    // Here you would typically handle resending the code
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg border-muted">
        <form onSubmit={handleSubmit}>
          <CardHeader className="space-y-2 text-center">
            <div className="flex justify-center mb-4">
              <Logo />
            </div>
            <div className="mx-auto bg-muted/50 p-3 rounded-full">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Verify your email</CardTitle>
            <CardDescription>We&apos;ve sent a verification code to your email. Please enter it below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="verificationCode">Verification Code</Label>
              <Input
                id="verificationCode"
                placeholder="Enter 6-digit code"
                className="text-center text-lg tracking-widest"
                maxLength={6}
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">
              Verify Email
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="text-center text-sm">
              Didn&apos;t receive a code?{" "}
              <button type="button" onClick={handleResend} className="text-primary hover:underline">
                Resend code
              </button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
