import { cn } from "../components/core/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Wedding Photography and Videography Services",
      description:
        "Capture the most precious moments of your special day with our professional photography services.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Candid Photography",
      description:
        "Immortalize those genuine smiles, laughter, and tears with candid shots that tell your story naturally.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Traditional Photography",
      description:
        "A mix of posed portraits and group photos with family and friends to ensure no one is left out.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Pre-Wedding Shoots",
      description: " Celebrate your love story with picturesque and creative pre-wedding sessions at stunning locations.",
      icon: <IconCloud />,
    },
    {
      title: "Post-Wedding Shoots",
      description: "Recreate the magic after the big day with romantic post-wedding sessions.Wedding Cinematography",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Wedding Cinematography",
      description:
        "Relive your wedding day with cinematic videos that evoke emotions and create timeless memories",
      icon: <IconHelp />,
    },
    {
      title: "Cinematic Highlights",
      description:
        "A beautifully crafted 3-5 minute video summarizing the best moments of your wedding.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Traditional Full-Length Videos",
      description: "A complete video covering the rituals, ceremonies, and special moments in detail.",
      icon: <IconHeart />,
    },
    {
      title: "Short Trailers/Teasers",
      description: " A 60-90 second trailer perfect for sharing on social media.",
      icon: <IconHeart />,
    },
    {
      title: "Customized Wedding Packages",
      description: " We understand that every couple is unique, so we offer flexible packages tailored to your preferences:",
      icon: <IconHeart />,
    },
    {
      title: "Photography-Only Packages",
      description: "  Perfect for those who want high-quality photographs without video coverage.",
      icon: <IconHeart />,
    },
    {
      title: "Combo Packages",
      description: " Includes both photography and videography services for comprehensive coverage.",
      icon: <IconHeart />,
    },
    {
      title: "Highlight and Trailer Packages",
      description: " Focus on delivering short, impactful videos perfect for modern couples.",
      icon: <IconHeart />,
    },
    {
      title: "Album-Inclusive Packages",
      description: "  Get premium wedding albums included in your package for lasting memories.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {/* <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div> */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
