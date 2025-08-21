import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export function FeatureCards() {
  return (
    <section id="features" className="container mx-auto px-4 md:px-20 py-16 md:py-20">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-3">Follow Your Style</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">Check out the amazing features of Silva Notes for yourself.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-secondary dark:bg-gray-900/50 rounded-xl p-6 md:p-10">
          <h3 className="text-xl font-semibold mb-2">Color Themes</h3>
          <p className="text-muted-foreground mb-4">
            Personalize your experience with vibrant, customizable palettes designed to match every mood and style. Find the perfect theme to make your workspace uniquely yours.
          </p>
          <RegisterLink>
            <Button variant="link" className="text-primary p-0 mb-2">Check Out Now</Button>
          </RegisterLink>
        </div>
        <div className="bg-secondary dark:bg-gray-900/50 rounded-xl p-6 md:p-10">
          <h3 className="text-xl font-semibold mb-2">Light and Dark Mode</h3>
          <p className="text-muted-foreground mb-4">
            Switch effortlessly between light and dark themes to suit any setting. Reduce eye strain and enhance focus whether you’re working late or in bright daylight.
          </p>
          <RegisterLink>
            <Button variant="link" className="text-primary p-0">Check Out Now</Button>
          </RegisterLink>
        </div>
      </div>
      <div className="w-full bg-secondary dark:bg-gray-900/50 rounded-xl p-6 md:p-10 mt-6 md:mt-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">Upcoming Features</h3>
        <ul className="text-muted-foreground space-y-3 list-disc pl-5">
          <li>
            <strong>Mobile App</strong> – Access your notes on the go with an intuitive mobile experience.
          </li>
          <li>
            <strong>Upload Image / Documents</strong> – Attach images and files to enrich your notes and context.
          </li>
          <li>
            <strong>Image AI Generation</strong> – Create helpful visuals with AI to enhance your study or work.
          </li>
          <li>
            <strong>Web Scraping</strong> – Extract and structure insights from the web using AI.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FeatureCards;


