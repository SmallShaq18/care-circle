import logo from '../assets/rcc logo.png'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-5 py-3.5 flex items-center gap-3">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
            <img src={logo} alt="RCCG Logo" className="w-5 h-5 opacity-90" />
          </div>
          <div className="min-w-0">
            <h1 className="text-white text-[15px] font-semibold leading-tight tracking-tight truncate">
              The Care Circle
            </h1>
            <p className="text-white/40 text-[11px] leading-tight truncate font-light">
              RCCG Sufficiency Parish
            </p>
          </div>
        </a>
      </div>
    </header>
  )
}
