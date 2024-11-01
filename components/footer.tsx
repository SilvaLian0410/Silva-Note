import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="border-t bg-background h-[20vh] md:h-[10vh] flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-y-4 md:gap-y-0">
        {/* Payment Methods */}
        <div className="flex items-center gap-x-4 text-muted-foreground">
          <span className="text-sm">Payment Methods:</span>
          <div className="flex items-center gap-x-2">
            <Image
              src="/payment/visa.webp"
              alt="Visa"
              width={50}
              height={25}
              className="object-contain"
            />
            <Image
              src="/payment/mastercard.webp"
              alt="Mastercard"
              width={45}
              height={25}
              className="object-contain"
            />
            {/* Add more payment methods as needed */}
          </div>
        </div>

        {/* Powered by Stripe */}
        <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
          Powered by
          <Image
            src="/payment/stripe.webp"
            alt="Stripe"
            width={60}
            height={25}
            className="object-contain"
          />
        </div>

        {/* Developer Credit */}
        <div className="text-sm text-muted-foreground">
          Developed by{" "}
          <Link 
            href="https://www.linkedin.com/in/julian-johari-b72720262/" 
            target="_blank"
            className="font-medium text-primary hover:underline"
          >
            Julian Johari
          </Link>
        </div>
      </div>
    </div>
  );
}