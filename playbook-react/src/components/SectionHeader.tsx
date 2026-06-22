interface SectionHeaderProps {
  title: string;
  className?: string;
}

export default function SectionHeader({ title, className = '' }: SectionHeaderProps) {
  return <div className={`section-header ${className}`}>{title}</div>;
}
