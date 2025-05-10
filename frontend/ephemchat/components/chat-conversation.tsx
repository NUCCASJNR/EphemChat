"use client"

import { useEffect, useRef } from "react"
import { Clock } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  content: string
  sender: "user" | "contact"
  timestamp: string
  ephemeral?: boolean
}

interface ChatConversationProps {
  messages: Message[]
  contactName: string
  contactAvatar: string
}

export function ChatConversation({ messages, contactName, contactAvatar }: ChatConversationProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex flex-1 flex-col overflow-y-auto p-4">
      <div className="flex flex-col gap-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            {message.sender === "contact" && (
              <Avatar className="mr-2 h-8 w-8">
                <AvatarImage src={contactAvatar || "/placeholder.svg"} alt={contactName} />
                <AvatarFallback>{contactName.slice(0, 2)}</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`relative max-w-[80%] rounded-lg px-4 py-2 ${
                message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
              } ${message.ephemeral ? "animate-fade-out" : ""}`}
            >
              <p>{message.content}</p>
              <div
                className={`mt-1 flex items-center text-xs ${
                  message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                <span>{message.timestamp}</span>
                {message.ephemeral && (
                  <span className="ml-2 flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    Ephemeral
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}
