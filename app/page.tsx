import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeAwareLogos } from "@/components/theme-aware-logo";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Footer } from "@/components/footer";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Sparkles, Play } from "lucide-react";

export default async function Home() {
  const { isAuthenticated } = await getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect("/dashboard");
  }
  return (
    <>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pb-10 pt-20 text-center">
          <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-secondary">
                <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                <span className="text-sm font-medium text-primary">
                  What&apos;s New?
                </span>
                <span className="text-sm ml-2">Sort Your Notes Easily!</span>
              </div>
              <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
                Create Notes with a Snap!
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
                Capture ideas and organize your inspiration with ease.
              </p>
              <p className="max-w-xl mx-auto  text-base lg:text-xl text-secondary-foreground">
                Start with a thought and let AI help you expand and structure
                your notes.
              </p>
              <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                {/* CTA Button */}
                <div className="md:w-auto">
                  <RegisterLink>
                    <Button size="lg" className="w-full">
                      Sign Up For Free
                    </Button>
                  </RegisterLink>
                </div>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-2">
                  <div className="flex -space-x-2">
                    <Image
                      src="/trust/face1.avif" // Replace with your AVIF image path
                      alt="Description of image 1"
                      width={32} // Adjust width as needed
                      height={32} // Adjust height as needed
                      className="rounded-full border-2 border-black"
                    />
                    <Image
                      src="/trust/face2.avif" // Replace with your AVIF image path
                      alt="Description of image 2"
                      width={32} // Adjust width as needed
                      height={32} // Adjust height as needed
                      className="rounded-full border-2 border-black"
                    />
                    <Image
                      src="/trust/face3.avif" // Replace with your AVIF image path
                      alt="Description of image 3"
                      width={32} // Adjust width as needed
                      height={32} // Adjust height as needed
                      className="rounded-full border-2 border-black"
                    />
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-sm text-gray-400">
                    Trusted by over{" "}
                    <span className="font-semibold">10k+ users</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Dashboard Preview */}
      <section className="container mx-auto px-4 pt-10 pb-20 flex justify-center items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-orange-600/30 blur-3xl rounded-[10px]" />
          <Image
            src="/img/Create Next App.gif"
            alt="Demo App"
            width={1200}
            height={700}
            className="relative rounded-[20px]"
          />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="container mx-auto px-20 py-20 text-center">
        <p className="text-black dark:text-gray-400 mb-8 lg:text-xl">
          Trusted by big tech companies and universities at over <b>10k+</b> users
        </p>
        <ThemeAwareLogos />
      </section>

      {/* Generative AI Text Generation */}
      <section className="container mx-auto px-4 md:px-20 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-2/5 space-y-6">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-primary">
              <Sparkles className="text-white mr-2" />
              <span className="text-sm font-medium text-white">
                Text to Note
              </span>
            </span>

            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              Generate Detailed Notes from Simple Prompts
            </h1>

            <p className="text-lg text-muted-foreground">
              Transform text prompts into organized, detailed notes in seconds!
              Describe your ideas, and Note Generator refines and structures
              them instantly!
            </p>

            <RegisterLink>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition duration-300 mt-8"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch It In Action
              </Button>
            </RegisterLink>
          </div>

          <div className="rounded-[20px] w-full md:w-3/5 flex items-center justify-center md:justify-end">
            <div className="relative w-full max-w-2xl h-[400px] rounded-[20px] overflow-hidden">
              <Image
                src="/img/Text-Generation-AI.gif"
                alt="Original logo"
                className="object-contain md:object-cover w-full h-full"
                fill
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-20 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Follow Your Style
          </h2>
          <p className="text-black dark:text-gray-400 max-w-2xl mx-auto lg:text-xl">
            Check out our amazing features and of Silva Notes for yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary dark:bg-gray-900/50 rounded-xl p-6 md:p-12">
            <h3 className="text-black dark:text-white text-xl font-semibold mb-2">
              Color Themes
            </h3>
            <p className="text-black dark:text-gray-400 mb-4">
              Personalize your experience with a wide range of vibrant and
              customizable palettes, designed to match every mood and style.
              Whether you prefer calming hues, bold contrasts, or soft pastels,
              find the perfect theme to make your workspace uniquely yours.
            </p>
            <RegisterLink>
              <Button variant="link" className="text-primary p-0 mb-4">
                Check Out Now
              </Button>
            </RegisterLink>
          </div>

          <div className="bg-secondary dark:bg-gray-900/50 rounded-xl p-6 md:p-12">
            <h3 className="text-black dark:text-white text-xl font-semibold mb-2">
              Light and Dark Mode Support
            </h3>
            <p className="text-black dark:text-gray-400 mb-4">
              Switch effortlessly between light and dark themes to suit any
              setting or time of day. Enjoy optimal visibility and comfort with
              modes tailored to reduce eye strain and enhance focus, whether
              you're working late or in bright daylight.
            </p>
            <RegisterLink>
              <Button variant="link" className="text-primary p-0">
                Check Out Now
              </Button>
            </RegisterLink>
          </div>
        </div>

        {/* Powerful Analytics Section */}
        <div className="w-full bg-secondary dark:bg-gray-900/50 rounded-xl p-6 md:p-12  mt-8">
          <h3 className="text-black dark:text-white text-2xl md:text-3xl font-bold mb-4 text-start">
            Upcoming Features
          </h3>
          <ul className="text-black dark:text-gray-400 mb-6 text-start space-y-4">
            <li>
              <strong>Mobile App</strong> – Access insights and analytics
              on-the-go with our intuitive mobile app. Stay connected and make
              data-driven decisions anytime, anywhere.
            </li>
            <li>
              <strong>Upload Image / Documents</strong> – Seamlessly upload
              images to enrich your analytics experience. Visualize data, add
              context, and create a more comprehensive view of your insights.
            </li>
            <li>
              <strong>Image AI Generation</strong> – Leverage AI-powered image
              generation to create stunning visuals on demand. Transform data
              into engaging images, enhance presentations, and captivate your
              audience.
            </li>
            <li>
              <strong>Web Scraping</strong> – Harness the power of AI to extract
              and analyze data from various web sources effortlessly. Automate
              the collection of valuable information, enabling you to visualize
              trends, generate insights, and enhance your decision-making
              process with ease.
            </li>
          </ul>
          <div className="flex justify-start">
            <RegisterLink>
              <Button size="lg">Sign Up For Free</Button>
            </RegisterLink>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 md:px-20 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-black dark:text-gray-400 max-w-2xl mx-auto lg:text-xl">
            Choose a plan that fits your needs and start organizing your notes
            today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary dark:bg-gray-900/50 rounded-xl p-6 md:p-12">
            <h3 className="text-black dark:text-white text-xl font-semibold mb-2">
              Basic Plan
            </h3>
            <p className="text-black dark:text-gray-400 mb-4">
              Ideal for individuals looking to get started with note-taking.
            </p>
            <div className="text-black dark:text-white text-2xl mb-4">
              $30/month
            </div>
            <RegisterLink>
              <Button variant="link" className="text-primary p-0 mb-4">
                Get Started
              </Button>
            </RegisterLink>
          </div>

          <div className="bg-secondary dark:bg-gray-900/50 rounded-xl p-6 md:p-12">
            <h3 className="text-black dark:text-white text-xl font-semibold mb-2">
              Pro Plan (Coming Soon)
            </h3>
            <p className="text-black dark:text-gray-400 mb-4">
              Perfect for professionals who need advanced features and support.
            </p>
            <div className="text-black dark:text-white text-2xl mb-4">
              $60/month
            </div>
            <RegisterLink>
              <Button variant="link" className="text-primary p-0 mb-4">
                Get Started
              </Button>
            </RegisterLink>
          </div>

          <div className="bg-secondary dark:bg-gray-900/50 rounded-xl p-6 md:p-12">
            <h3 className="text-black dark:text-white text-xl font-semibold mb-2">
              Premium Plan (Coming Soon)
            </h3>
            <p className="text-black dark:text-gray-400 mb-4">
              For teams and organizations that require full access and
              collaboration tools.
            </p>
            <div className="text-black dark:text-white text-2xl mb-4">
              $90/month
            </div>
            <RegisterLink>
              <Button variant="link" className="text-primary p-0 mb-4">
                Get Started
              </Button>
            </RegisterLink>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
