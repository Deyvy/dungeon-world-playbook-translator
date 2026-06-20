export default function VerticalBanner() {
  return (
    <div
      className="flex flex-shrink-0 items-center justify-center overflow-hidden"
      style={{
        width: '42px',
        background: '#1a1a1a',
      }}
    >
      <span
        className="font-metamorphous whitespace-nowrap text-white"
        style={{
          writingMode: 'vertical-lr',
          transform: 'rotate(180deg)',
          fontSize: '28px',
          letterSpacing: '0.15em',
          fontWeight: 400,
        }}
      >
        EL GUERRERO
      </span>
    </div>
  );
}
