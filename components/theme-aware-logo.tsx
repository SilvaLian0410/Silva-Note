"use client"

import Image from "next/image"
import { useTheme } from "next-themes"

export function ThemeAwareLogos() {
  const { theme } = useTheme()

  const logos = [
    { name: "Google", logo: "/logo/Google.png" },
    { name: "Meta", logo: "/logo/Meta.png" },
    { name: "Microsoft", logo: "/logo/Microsoft.png" },
    { name: "UTM", logo: "/logo/UTM.png" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-center opacity-70">
      {logos.map((brand) => (
        <div key={brand.name} className="flex items-center justify-center">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={150}
            height={40}
            className="opacity-50 hover:opacity-100 transition-opacity dark:invert-0 invert"
          />
        </div>
      ))}
    </div>
  )
}