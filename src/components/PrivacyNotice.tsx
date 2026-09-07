export default function PrivacyNotice() {
  return (
    <section className="bg-white px-6 py-14 md:py-16 border-t border-primary/5">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-[1.6rem] md:text-[1.85rem] font-semibold text-primary mb-5 tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Your privacy is important to us.
        </h2>
        <div className="space-y-4 text-[#4a5568] text-[0.95rem] md:text-base leading-[1.7] font-light">
          <p>
            You don't have to tell us who you are. Your name and contact details are not required. This space exists so you can share what's on your heart; whether that's a prayer request, emotional support, or something else entirely.
          </p>
          <p>
            If you'd like someone to follow up with you, you can optionally leave a way for us to reach you. That's completely your choice, and you can skip it entirely.
          </p>
          <p className="text-[#5a6578] text-[0.9rem]">
            Messages are received by the Welfare Head of RCCG Sufficiency Parish and handled with care and discretion.
          </p>
        </div>
      </div>
    </section>
  )
}
