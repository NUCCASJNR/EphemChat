import { ArrowRight } from "lucide-react"

export default function ChatDefaultPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md space-y-4">
        <h1 className="text-2xl font-bold">Welcome to EphemChat</h1>
        <p className="text-muted-foreground">
          Select a conversation from the sidebar or start a new chat to begin messaging.
        </p>
        <p className="text-sm text-muted-foreground">
          <ArrowRight className="inline h-4 w-4 mr-1" />
          Your messages are ephemeral and will disappear after being viewed.
        </p>
      </div>
    </div>
  )
}
