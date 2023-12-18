interface SectionHeaderProps {
  subheading: string;
  heading: string;
  headingStyle?: string;
}

export default function SectionHeader({
  subheading,
  heading,
  headingStyle,
}: SectionHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-y-3">
      <span className="subheading--secondary">{subheading}</span>
      <h2 className={`h2-bold text-center ${headingStyle}`}>{heading}</h2>
    </header>
  );
}
