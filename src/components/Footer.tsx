export default function Footer() {
  return (
    <footer className="bg-primary text-white px-6 py-10 md:py-12 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="font-semibold text-[1.05rem] mb-1 tracking-tight">The Care Circle</h3>
          <p className="text-white/35 text-[0.85rem] font-light">RCCG Sufficiency Parish</p>
        </div>
        <div className="max-w-md text-[0.85rem] text-white/35 leading-relaxed font-light">
          <p>
            Created as a safe channel for members of RCCG Sufficiency Parish to reach out for support. Your message is handled with care and discretion.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-white/10 text-[0.75rem] text-white/20 font-light">
        <p>Not an emergency service. For urgent help, please contact emergency services or someone you trust.</p>
      </div>
    </footer>
  )
}
