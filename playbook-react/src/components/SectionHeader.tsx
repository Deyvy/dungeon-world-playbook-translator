interface SectionHeaderProps {
  title: string;
  className?: string;
  rightGlyph?: string;
}

export default function SectionHeader({ title, className = '', rightGlyph }: SectionHeaderProps) {
  return (
    <div className={`section-header ${className}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span>{title}</span>
      {rightGlyph && <span style={{ fontSize: '1.8em', margin: '-10px 0' }}>{rightGlyph}</span>}
    </div>
  );
}
