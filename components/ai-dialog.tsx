'use client'

import { useState } from 'react'
import { Sparkles, Bot, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

interface FormData {
  title: string;
  description: string;
}

interface AIDialogProps extends FormData {
  onUpdate: (data: FormData) => void;
}

export default function AskAIDialog({ title, description, onUpdate }: AIDialogProps) {
  const [open, setOpen] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAskAI = async () => {
    try {
      setLoading(true)
      if (!prompt.trim()) {
        throw new Error('Please enter a prompt');
      }

      const response = await fetch('/api/ai/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: prompt,
          context: { title, description }
        }),
      })

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'AI request failed');
      }

      const result = await response.json();
      
      // Update form with the structured response
      onUpdate({
        title: result.title,
        description: result.description
      });

      setOpen(false);
      setPrompt('');
    } catch (error: any) {
      console.error('Error:', error);
      alert(error.message || 'Failed to generate content. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="absolute bottom-2 right-2 bg-clip-text text-purple-500 hover:text-blue-100 items-center gap-1">
          Ask AI <Sparkles />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Ask AI <Bot className="h-6 w-6" />
          </DialogTitle>
          <DialogDescription>
            Send a prompt to generate or modify your note content
          </DialogDescription>
        </DialogHeader>
        <div className="gap-4 py-4">
          <Textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full overflow-y-auto"
            placeholder="Write a check list for my Calculus Notes"
          />
        </div>
        <DialogFooter>
          <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleAskAI} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}