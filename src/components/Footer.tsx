export default function Footer() {
  return (
    <footer id="footer" className="bg-ink py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-playfair font-bold text-white text-lg">AS</span>
          <span className="text-white/20 text-sm hidden sm:inline">·</span>
          <p className="text-white/45 text-sm">
            © {new Date().getFullYear()} Alex Sander. Crafted with care.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a
            id="footer-email"
            href="mailto:alexjiang1609@gmail.com"
            className="text-sm text-white/50 hover:text-bronze transition-colors"
          >
            Email
          </a>
          <a
            id="footer-linkedin"
            href="https://linkedin.com/in/alex-sander1609"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-bronze transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
