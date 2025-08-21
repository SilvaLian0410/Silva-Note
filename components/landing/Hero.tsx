import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="mx-auto h-64 md:h-80 max-w-7xl blur-3xl opacity-30 dark:opacity-40 bg-gradient-to-tr from-primary/40 via-fuchsia-500/30 to-cyan-500/30 rounded-[50%] translate-y-[-20%]" />
      </div>
      <section className="container mx-auto px-4 pb-10 pt-20 text-center">
        <div className="relative items-center w-full px-5 py-8 mx-auto lg:px-16 max-w-7xl md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary border border-border" aria-label="What's new">
              <div className="h-2 w-2 rounded-full bg-primary mr-2" />
              <span className="text-xs md:text-sm font-medium text-primary">What’s New?</span>
              <span className="text-xs md:text-sm ml-2 text-muted-foreground">Sort your notes easily</span>
            </div>
            <h1 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Create Notes with a Snap
            </h1>
            <p className="max-w-xl mx-auto mt-6 text-base md:text-lg text-muted-foreground">
              Capture ideas and organize your inspiration with ease. Start with a thought and let AI help you expand and structure your notes.
            </p>
            <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
              <RegisterLink>
                <Button size="lg" className="w-full md:w-auto" aria-label="Sign up for free">
                  Sign Up For Free
                </Button>
              </RegisterLink>
              <div className="flex items-center justify-center gap-2" aria-label="User trust indicator">
                <div className="flex -space-x-2">
                  <Image src="/trust/face1.avif" alt="Happy user 1" width={32} height={32} className="rounded-full border-2 border-black dark:border-white" />
                  <Image src="/trust/face2.avif" alt="Happy user 2" width={32} height={32} className="rounded-full border-2 border-black dark:border-white" />
                  <Image src="/trust/face3.avif" alt="Happy user 3" width={32} height={32} className="rounded-full border-2 border-black dark:border-white" />
                </div>
                <div className="flex items-center gap-1 text-yellow-500" aria-hidden>
                  {"★".repeat(5)}
                </div>
                <p className="text-sm text-muted-foreground">Trusted by <span className="font-semibold">10k+ users</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pt-6 pb-16 flex justify-center items-center" aria-label="Product preview">
        <div className="relative">
          <Image
            src="/img/Create Next App.gif"
            alt="Demo of Silva Notes app interface"
            width={1200}
            height={700}
            priority
            className="relative rounded-[20px] shadow-2xl ring-1 ring-black/5"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;


