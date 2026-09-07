import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-white px-6 pt-14 pb-10 md:pt-20 md:pb-14">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <p className="text-secondary text-[11px] md:text-xs font-medium tracking-[0.2em] mb-5 uppercase font-sans">
          RCCG Sufficiency Parish
        </p>
        <h2
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          className="text-[2.75rem] md:text-[3.75rem] font-semibold tracking-tight leading-[1.05] mb-6 text-white/95"
        >
          The Care Circle
        </h2>
        <p className="text-xl md:text-[1.35rem] text-white/80 font-light leading-relaxed mb-3 tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic' }}>
          A place to be heard, cared for and supported in Christ.
        </p>
        <p className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-widest leading-normal mb-3" style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
           “Bear ye one another’s burdens...” <br /> — Galatians 6:2
        </p>
        <p className="text-base md:text-[1.05rem] text-white/50 leading-relaxed max-w-md mx-auto mb-9 font-light">
          Whatever you're going through, you don't have to carry it alone. Share what you're experiencing, request support or prayer, or simply let us know you need a listening ear.
 <br/>
 <br/>
 You can also share your suggestions, ideas, concerns, or anything you feel we should know.
 
        </p>
        <a
          href="#support-form"
          className="inline-flex items-center gap-2.5 bg-secondary text-primary font-semibold px-7 py-3.5 rounded-full hover:bg-[#d4bc93] transition-colors shadow-[0_8px_30px_rgba(197,168,128,0.2)] active:scale-[0.98] text-[15px]"
        >
          What's on your mind?
          <ArrowDown className="w-4 h-4" strokeWidth={2} />
        </a>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[-20%] left-[10%] w-lg h-lg bg-secondary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-30%] right-[5%] w-[24rem] h-lg bg-secondary/15 rounded-full blur-[80px]"></div>
      </div>
    </section>
  )
}
