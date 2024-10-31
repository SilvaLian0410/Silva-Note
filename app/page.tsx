import Image from "next/image"; // Make sure to import Image
import { Button } from "@/components/ui/button";
import { ThemeAwareLogos } from "@/components/theme-aware-logo"
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = await getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect("/dashboard");
  }
  return (
    <>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="w-auto px-6 py-3 rounded-full bg-secondary">
                <span className="text-sm font-medium text-primary">
                  Sort Your Notes Easily
                </span>
              </span>
              <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
                Create Notes with ease
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
                Capture ideas and organize your inspiration.
              </p>
              <div className="flex justify-center max-w-sm mx-auto mt-10">
                <RegisterLink>
                  <Button size="lg" className="w-full">
                    Sign Up For Free
                  </Button>
                </RegisterLink>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Dashboard Preview */}
      <section className="container mx-auto px-4 py-20 flex justify-center items-center">
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
     Trusted by big tech companies and universities at over <b>1,000</b>
   </p>
        <ThemeAwareLogos />
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
              <strong>Generative AI for Text Generation</strong> – Harness the
              power of Generative AI for automatic text creation. From
              personalized messages to data summaries, generate high-quality
              text with ease.
            </li>
            <li>
              <strong>Upload Image</strong> – Seamlessly upload images to enrich
              your analytics experience. Visualize data, add context, and create
              a more comprehensive view of your insights.
            </li>
            <li>
              <strong>Image AI Generation</strong> – Leverage AI-powered image
              generation to create stunning visuals on demand. Transform data
              into engaging images, enhance presentations, and captivate your
              audience.
            </li>
          </ul>
          <div className="flex justify-start">
            <RegisterLink>
              <Button size="lg">
                Sign Up For Free
              </Button>
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
            <div className="text-black dark:text-white text-2xl mb-4">$30/month</div>
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
            <div className="text-black dark:text-white text-2xl mb-4">$60/month</div>
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
            <div className="text-black dark:text-white text-2xl mb-4">$90/month</div>
            <RegisterLink>
              <Button variant="link" className="text-primary p-0 mb-4">
                Get Started
              </Button>
            </RegisterLink>
          </div>
        </div>
      </section>
    </>
  );
}
