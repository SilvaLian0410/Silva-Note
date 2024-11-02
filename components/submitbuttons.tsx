"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2, Trash } from "lucide-react";
import { Bot } from "lucide-react";
import AskAIDialog from "./ai-dialog";

// Add interface for the form data
interface FormData {
  title: string;
  description: string;
}

// Add interface for the button props
interface AskAIButtonProps {
  onUpdate: (data: FormData) => void;
  currentData: FormData;
}

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {" "}
      {pending ? (
        <Button disabled className="w-fit">
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button className="w-fit" type="submit">
          Save Now
        </Button>
      )}
    </>
  );
}

export function AskAIButton({ onUpdate, currentData }: AskAIButtonProps) {
  return (
    <>
      <AskAIDialog 
        {...currentData} 
        onUpdate={(newData: FormData) => onUpdate(newData)} 
      />
    </>
  );
}

export function StripeSubscriptionCreateButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {" "}
      {pending ? (
        <Button disabled className="w-full">
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button className="w-full" type="submit">
          Create Subscription
        </Button>
      )}
    </>
  );
}

export function TrashDelete() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button variant="destructive" size="icon" disabled>
          <Loader2 className="w-4 h-4 animate-spin" />
        </Button>
      ) : (
        <Button variant="destructive" size="icon" type="submit">
          <Trash className="w-4 h-4" />
        </Button>
      )}
    </>
  );
}

export function StripePortal() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="w-fit">
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button className="w-full" type="submit">
          View Payment Details
        </Button>
      )}
    </>
  );
}
