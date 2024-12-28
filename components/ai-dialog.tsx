'use client'

import { useState, useEffect } from 'react'
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
import Image from 'next/image'

interface FormData {
  title: string;
  description: string;
  image?: File;
}

interface AIDialogProps extends FormData {
  onUpdate: (data: FormData) => void;
}

export default function AskAIDialog({ title, description, onUpdate }: AIDialogProps) {
  const [open, setOpen] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageDescription, setImageDescription] = useState<string>('')
  const [analyzing, setAnalyzing] = useState(false)

  const analyzeImage = async (imageData: string) => {
    try {
      setAnalyzing(true);
      const response = await fetch('/api/ai/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: "Analyze this image",
          context: { title: '', description: '' },
          image: imageData,
          imageOnly: true
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze image');
      }

      const result = await response.json();
      setImageDescription(result.description);
    } catch (error) {
      console.error('Image analysis error:', error);
      setImageDescription('Failed to analyze image');
    } finally {
      setAnalyzing(false);
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      const previewUrl = URL.createObjectURL(file)
      setImagePreview(previewUrl)

      // Convert image to base64 and analyze it
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        analyzeImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleAskAI = async () => {
    try {
      setLoading(true)
      if (!prompt.trim()) {
        throw new Error('Please enter a prompt');
      }

      // Convert image to base64 if exists
      let imageData = null;
      if (selectedImage) {
        const reader = new FileReader();
        imageData = await new Promise((resolve) => {
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(selectedImage);
        });
      }

      const response = await fetch('/api/ai/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: prompt,
          context: { title, description },
          image: imageData
        }),
      })

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'AI request failed');
      }

      const result = await response.json();
      
      onUpdate({
        title: result.title,
        description: result.description
      });

      setOpen(false);
      setPrompt('');
      setSelectedImage(null);
      setImagePreview(null);
      setImageDescription('');
    } catch (error: any) {
      console.error('Error:', error);
      alert(error.message || 'Failed to generate content. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  // Clean up the object URL when component unmounts or when preview changes
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview)
      }
    }
  }, [imagePreview])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="absolute bottom-2 right-2 bg-clip-text text-purple-500 hover:text-blue-100 items-center gap-1">
          Ask AI <Sparkles />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Ask AI <Bot className="h-6 w-6" />
          </DialogTitle>
          <DialogDescription>
            Send a prompt to generate or modify your note content
          </DialogDescription>
        </DialogHeader>
        <div className="gap-4 py-4">
          <div className="mb-4">
            <label 
              htmlFor="image-upload" 
              className="cursor-pointer block p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            >
              {imagePreview ? (
                <div className="relative w-full aspect-video">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <p>Click or drag to upload an image</p>
                </div>
              )}
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          {analyzing && (
            <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing image...
            </div>
          )}

          {imageDescription && (
            <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
              <p className="font-medium mb-1">Image Analysis:</p>
              <p className="text-gray-600 dark:text-gray-300">{imageDescription}</p>
            </div>
          )}

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
          <Button type="submit" onClick={handleAskAI} disabled={loading || analyzing}>
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