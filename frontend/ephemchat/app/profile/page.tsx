"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Camera, Save, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { saveProfileImage, getProfileImage } from "@/lib/profile-utils"

export default function ProfilePage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState({
    username: "johndoe",
    email: "john@example.com",
    bio: "Software developer and privacy enthusiast.",
    notificationsEnabled: true,
    messageRetention: "24h",
  })

  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  // Load profile image on component mount
  useEffect(() => {
    const savedImage = getProfileImage()
    if (savedImage) {
      setProfileImage(savedImage)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, notificationsEnabled: checked }))
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)

    // Create a preview of the selected image
    const reader = new FileReader()
    reader.onloadend = () => {
      const imageDataUrl = reader.result as string
      setProfileImage(imageDataUrl)
      saveProfileImage(imageDataUrl)
      setIsUploading(false)
    }
    reader.readAsDataURL(file)

    // In a real app, you would upload the image to your server here
    // For demo purposes, we're just creating a preview and saving to localStorage
  }

  const handleRemoveImage = () => {
    setProfileImage(null)
    saveProfileImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Profile updated:", { ...formData, profileImage })
    // Here you would typically handle the profile update logic
    // For demo purposes, navigate back to chat
    router.push("/chat")
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container max-w-2xl mx-auto">
        <Button variant="ghost" className="mb-4" onClick={() => router.push("/chat")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Chat
        </Button>

        <Card className="shadow-lg border-muted">
          <form onSubmit={handleSubmit}>
            <CardHeader className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <Avatar
                    className="h-20 w-20 cursor-pointer border-2 border-muted transition-all duration-200 group-hover:border-primary"
                    onClick={handleImageClick}
                  >
                    {profileImage ? (
                      <AvatarImage src={profileImage || "/placeholder.svg"} alt="Profile" className="object-cover" />
                    ) : (
                      <>
                        <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
                        <AvatarFallback className="text-xl">JD</AvatarFallback>
                      </>
                    )}
                  </Avatar>

                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 rounded-full group-hover:opacity-100 cursor-pointer"
                    onClick={handleImageClick}
                  >
                    <Camera className="h-6 w-6 text-white" />
                  </div>

                  {profileImage && (
                    <button
                      type="button"
                      className="absolute -top-1 -right-1 rounded-full bg-destructive p-1 text-destructive-foreground"
                      onClick={handleRemoveImage}
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove image</span>
                    </button>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>

                <div>
                  <CardTitle className="text-2xl">Profile Settings</CardTitle>
                  <CardDescription>Manage your account information and preferences</CardDescription>
                  <p className="text-sm text-muted-foreground mt-1">Click on the avatar to upload a profile picture</p>
                </div>
              </div>

              {isUploading && <div className="text-sm text-primary animate-pulse">Uploading image...</div>}
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Account Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" value={formData.username} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" value={formData.bio} onChange={handleChange} rows={3} />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Privacy & Security</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications">Enable Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications for new messages</p>
                  </div>
                  <Switch
                    id="notifications"
                    checked={formData.notificationsEnabled}
                    onCheckedChange={handleSwitchChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="messageRetention">Message Retention</Label>
                  <select
                    id="messageRetention"
                    value={formData.messageRetention}
                    onChange={handleSelectChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="1h">1 hour</option>
                    <option value="24h">24 hours</option>
                    <option value="7d">7 days</option>
                    <option value="30d">30 days</option>
                  </select>
                  <p className="text-sm text-muted-foreground mt-1">
                    Messages will be automatically deleted after this period
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="ml-auto">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
