interface LogoMarkProps {
  className?: string
}

export default function LogoMark({ className = '' }: LogoMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 110"
      fill="none"
      className={className}
      aria-label="Alex Sander — AS"
      role="img"
    >
      <text
        x="0"
        y="100"
        fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
        fontSize="104"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-2"
      >
        AS
      </text>
    </svg>
  )
}
