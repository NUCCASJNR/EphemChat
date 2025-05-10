"use client"

import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Sample data for recent chats
const recentChats = [
  {
    id: "1",
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hey, how are you doing?",
    time: "2m ago",
    unread: true,
  },
  {
    id: "2",
    name: "Bob Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Can we meet tomorrow?",
    time: "1h ago",
    unread: false,
  },
  {
    id: "3",
    name: "Carol Williams",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "I sent you the files",
    time: "3h ago",
    unread: false,
  },
  {
    id: "4",
    name: "Dave Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks for your help!",
    time: "1d ago",
    unread: false,
  },
  {
    id: "5",
    name: "Eve Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Let me know when you're free",
    time: "2d ago",
    unread: false,
  },
]

export function ChatSidebar() {
  const router = useRouter()

  const handleChatSelect = (chatId: string) => {
    router.push(`/chat/${chatId}`)
  }

  return (
    <Sidebar variant="sidebar" collapsible="offcanvas">
      <SidebarHeader>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search conversations..." className="w-full bg-muted pl-8" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {recentChats.map((chat) => (
            <SidebarMenuItem key={chat.id}>
              <SidebarMenuButton
                isActive={chat.id === "1"}
                className="flex items-center gap-3 p-3"
                onClick={() => handleChatSelect(chat.id)}
              >
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                    <AvatarFallback>{chat.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  {chat.unread && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3 rounded-full bg-primary">
                      <span className="sr-only">New messages</span>
                    </span>
                  )}
                </div>
                <div className="flex-1 truncate">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{chat.name}</span>
                    <span className="text-xs text-muted-foreground">{chat.time}</span>
                  </div>
                  <p className="truncate text-sm text-muted-foreground">{chat.lastMessage}</p>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
