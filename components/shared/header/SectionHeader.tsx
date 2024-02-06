interface SectionHeaderProps {
  style?: string;
  subheading: string;
  heading: string;
  headingStyle?: string;
}

export default function SectionHeader({
  style,
  subheading,
  heading,
  headingStyle,
}: SectionHeaderProps) {
  return (
    <header className={`flex flex-col gap-y-3 ${style}`}>
      <span className="subheading--secondary">{subheading}</span>
      <h2 className={`h2-bold ${headingStyle}`}>{heading}</h2>
    </header>
  );
}
