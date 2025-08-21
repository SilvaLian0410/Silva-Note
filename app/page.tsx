import { ThemeAwareLogos } from "@/components/theme-aware-logo";
import { Footer } from "@/components/footer";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Sparkles, Fullscreen } from "lucide-react";
import { Hero } from "@/components/landing/Hero";
import { FeatureSplit } from "@/components/landing/FeatureSplit";
import { FeatureCards } from "@/components/landing/FeatureCards";
import { CTA } from "@/components/landing/CTA";

export default async function Home() {
  const { isAuthenticated } = await getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect("/dashboard");
  }
  return (
    <>
      <Hero />

      {/* Trusted By Section */}
      <section className="container mx-auto px-20 py-20 text-center">
        <p className="text-black dark:text-gray-400 mb-8 lg:text-xl">
          Trusted by big tech companies and universities at over <b>10k+</b>{" "}
          users
        </p>
        <ThemeAwareLogos />
      </section>

      <FeatureSplit
        id="text-to-note"
        badgeIcon={<Sparkles className="text-white" />}
        badgeLabel="Text to Note"
        title="Generate detailed notes from simple prompts"
        description="Transform text prompts into organized, detailed notes in seconds. Describe your ideas, and Silva Notes refines and structures them instantly."
        ctaLabel="Watch It In Action"
        imageSrc="/img/Text-Generation-AI.gif"
        imageAlt="AI generating structured notes from text"
        imageRight
      />

      <FeatureSplit
        id="image-to-note"
        badgeIcon={<Fullscreen className="text-white" />}
        badgeLabel="Image to Note"
        title="Transform your visuals into organized notes effortlessly"
        description="Turn images into structured, detailed notes in seconds. Capture key insights and let Silva Notes refine and organize them for you."
        ctaLabel="See It In Action"
        imageSrc="/img/Image-To-Notes.gif"
        imageAlt="AI analyzing an image and generating notes"
        imageRight={false}
      />

      <FeatureCards />

      {/* Pricing Section */}
      <section
        id="pricing"
        className="container mx-auto px-4 md:px-20 py-16 md:py-20"
        aria-label="Pricing plans"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto lg:text-xl">
            Choose a plan that fits your needs and start organizing your notes
            today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary dark:bg-gray-900/50 rounded-xl p-6 md:p-12">
            <h3 className="text-black dark:text-white text-xl font-semibold mb-2">
              Basic Plan
            </h3>
            <p className="text-muted-foreground mb-4">
              Ideal for individuals looking to get started with note-taking.
            </p>
            <div className="text-black dark:text-white text-2xl mb-4">
              $30/month
            </div>
          </div>

          <div className="bg-secondary dark:bg-gray-900/50 rounded-xl p-6 md:p-12">
            <h3 className="text-black dark:text-white text-xl font-semibold mb-2">
              Pro Plan (Coming Soon)
            </h3>
            <p className="text-muted-foreground mb-4">
              Perfect for professionals who need advanced features and support.
            </p>
            <div className="text-black dark:text-white text-2xl mb-4">
              $60/month
            </div>
          </div>

          <div className="bg-secondary dark:bg-gray-900/50 rounded-xl p-6 md:p-12">
            <h3 className="text-black dark:text-white text-xl font-semibold mb-2">
              Premium Plan (Coming Soon)
            </h3>
            <p className="text-muted-foreground mb-4">
              For teams and organizations that require full access and
              collaboration tools.
            </p>
            <div className="text-black dark:text-white text-2xl mb-4">
              $90/month
            </div>
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </>
  );
}
