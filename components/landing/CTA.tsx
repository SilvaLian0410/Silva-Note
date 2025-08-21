import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export function CTA() {
  return (
    <section className="container mx-auto px-4 md:px-20 py-16 md:py-20 text-center">
      <div className="bg-secondary/50 dark:bg-gray-900/60 rounded-2xl p-8 md:p-12 ring-1 ring-border">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Be more organized in minutes</h2>
        <p className="mt-3 md:mt-4 text-muted-foreground max-w-2xl mx-auto">Sign up to start creating structured notes with AI assistance. It’s fast, powerful, and free to try.</p>
        <div className="mt-6">
          <RegisterLink>
            <Button size="lg" aria-label="Create your free account">Get Started Free</Button>
          </RegisterLink>
        </div>
      </div>
    </section>
  );
}

export default CTA;


