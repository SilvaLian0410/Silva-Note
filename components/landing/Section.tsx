import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

/**
 * Section: Accessible wrapper for landing page sections.
 * - Renders a semantic <section> with aria-labelledby when a title is provided
 * - Ensures consistent spacing and container width
 */
export function Section({ id, title, description, children, className = "", ...rest }: SectionProps) {
  const headingId = title ? `${id}-heading` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} className={`container mx-auto px-4 md:px-20 py-16 md:py-20 ${className}`} {...rest}>
      {(title || description) && (
        <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          {title && (
            <h2 id={headingId} className="text-2xl md:text-4xl font-bold tracking-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-muted-foreground text-base md:text-lg">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

export default Section;


