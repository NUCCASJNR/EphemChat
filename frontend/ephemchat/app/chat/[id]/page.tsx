"use client"

import { useState } from "react"
import { ChatConversation } from "@/components/chat-conversation"
import { ChatInput } from "@/components/chat-input"

// Sample data for the conversation
const initialMessages = [
  {
    id: "1",
    content: "Hey there! How are you doing?",
    sender: "contact",
    timestamp: "10:30 AM",
    ephemeral: true,
  },
  {
    id: "2",
    content: "I'm good, thanks! Just working on some projects.",
    sender: "user",
    timestamp: "10:32 AM",
  },
  {
    id: "3",
    content: "That sounds interesting. What kind of projects?",
    sender: "contact",
    timestamp: "10:33 AM",
    ephemeral: true,
  },
  {
    id: "4",
    content: "Mostly web development stuff. Working on a new secure messaging app.",
    sender: "user",
    timestamp: "10:35 AM",
  },
  {
    id: "5",
    content: "That sounds cool! Is it like Signal or WhatsApp?",
    sender: "contact",
    timestamp: "10:36 AM",
    ephemeral: true,
  },
  {
    id: "6",
    content: "Similar, but with a focus on ephemeral messages that disappear after being read.",
    sender: "user",
    timestamp: "10:38 AM",
  },
  {
    id: "7",
    content: "I love that idea! Privacy is so important these days.",
    sender: "contact",
    timestamp: "10:40 AM",
    ephemeral: true,
  },
]

export default function ChatPage({ params }: { params: { id: string } }) {
  const [messages, setMessages] = useState(initialMessages)

  const handleSendMessage = (content: string) => {
    const newMessage = {
      id: String(Date.now()),
      content,
      sender: "user" as const,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, newMessage])
  }

  return (
    <div className="flex h-full flex-col">
      <ChatConversation
        messages={messages}
        contactName="Alice Johnson"
        contactAvatar="/placeholder.svg?height=40&width=40"
      />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  )
}
