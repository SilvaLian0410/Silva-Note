'use client'

import { SubmitButton, AskAIButton } from "@/components/submitbuttons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { getNoteById, updateNote } from "@/app/actions/notes";

export default function EditNotePage({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  useEffect(() => {
    const loadNote = async () => {
      try {
        const note = await getNoteById(params.id);
        if (note) {
          setFormData({
            title: note.title,
            description: note.description
          });
        }
      } catch (error) {
        console.error('Failed to load note:', error);
      }
    };

    loadNote();
  }, [params.id]);

  const handleSubmit = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    await updateNote(params.id, title, description);
  };

  return (
    <Card>
      <form action={handleSubmit}>
        <CardHeader>
          <CardTitle>Edit Note</CardTitle>
          <CardDescription>Edit your notes here</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label>Title</Label>
            <Input
              required
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                title: e.target.value
              }))}
              placeholder="Title for your notes"
            />
          </div>

          <div className="flex flex-col gap-y-2 relative">
            <Label>Description</Label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                description: e.target.value
              }))}
              placeholder="describe your note"
              required
              className="max-h-60 h-60 w-full overflow-y-auto"
            />
            <AskAIButton onUpdate={setFormData} currentData={formData} />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button asChild variant="destructive">
            <Link href="/dashboard">Cancel</Link>
          </Button>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
