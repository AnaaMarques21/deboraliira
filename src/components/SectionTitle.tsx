
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionTitleProps {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  subtitleClassName?: string;
}

const SectionTitle = ({
  icon,
  title,
  subtitle,
  className,
  centered = false,
  subtitleClassName,
}: SectionTitleProps) => {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {icon && <div className="mb-4 text-brand-500">{icon}</div>}
      <h2 
        className={cn(
          "section-heading", 
          centered && "mx-auto after:left-1/2 after:-translate-x-1/2"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("section-subheading", centered && "mx-auto", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
