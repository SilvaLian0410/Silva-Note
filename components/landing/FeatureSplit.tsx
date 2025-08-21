import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ReactNode } from "react";

interface FeatureSplitProps {
  id: string;
  badgeIcon?: ReactNode;
  badgeLabel: string;
  title: string;
  description: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
  imageRight?: boolean;
}

export function FeatureSplit({ id, badgeIcon, badgeLabel, title, description, ctaLabel, imageSrc, imageAlt, imageRight = true }: FeatureSplitProps) {
  return (
    <section id={id} className="container mx-auto px-4 md:px-20 py-16 md:py-20">
      <div className={`flex flex-col md:flex-row items-center justify-between gap-8 ${imageRight ? "" : "md:flex-row-reverse"}`}>
        <div className="w-full md:w-2/5 space-y-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white">
            {badgeIcon}
            <span className="text-sm font-medium ml-2">{badgeLabel}</span>
          </span>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h3>
          <p className="text-base md:text-lg text-muted-foreground">{description}</p>
          <RegisterLink>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition" aria-label={ctaLabel}>
              {ctaLabel}
            </Button>
          </RegisterLink>
        </div>
        <div className="rounded-[20px] w-full md:w-3/6 flex items-center justify-center md:justify-end">
          <div className="relative w-full max-w-2xl h-[360px] md:h-[420px] rounded-[20px] overflow-hidden">
            <Image src={imageSrc} alt={imageAlt} fill className="object-contain md:object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSplit;


