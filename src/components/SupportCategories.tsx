import { Heart, HandHeart, Coins, Compass, MessageCircle, HelpCircle } from 'lucide-react'

const categories = [
  {
    icon: Heart,
    label: 'Prayer',
    desc: "I'd like someone to pray with or for me.",
  },
  {
    icon: HandHeart,
    label: 'Emotional Support',
    desc: "I'm going through something emotionally and need someone to talk to.",
  },
  {
    icon: Coins,
    label: 'Financial Difficulty',
    desc: "I'm experiencing a financial challenge and may need support.",
  },
  {
    icon: Compass,
    label: 'Spiritual Struggles',
    desc: "I'm struggling spiritually and would appreciate guidance or prayer.",
  },
  {
    icon: MessageCircle,
    label: 'Suggestion or Concern',
    desc: "I'd like to share a suggestion, concern, or issue.",
  },
  {
    icon: HelpCircle,
    label: "I Don't Know What I Need",
    desc: "I don't feel okay, but I'm not sure what kind of support I need.",
  },
]

export default function SupportCategories() {
  return (
    <section className="bg-[#f6f4f1] px-6 py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[1.9rem] md:text-[2.25rem] font-semibold text-[#1a2e4d] mb-4 tracking-tight leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            What would you like to share?
          </h2>
          <p className="text-[#5a6578] text-base md:text-[1.05rem] max-w-md mx-auto leading-relaxed font-light">
            There's no wrong way to reach out. Select the option that best describes what you're experiencing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href="#support-form"
              className="group block bg-white rounded-2xl border border-[#1a2e4d]/5 p-6 md:p-7 shadow-[0_2px_12px_rgba(26,46,77,0.03)] hover:shadow-[0_8px_24px_rgba(26,46,77,0.06)] hover:-translate-y-[2px] transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-[#1a2e4d]/5 flex items-center justify-center mb-4 group-hover:bg-[#1a2e4d]/8 transition-colors">
                <cat.icon className="w-5 h-5 text-[#1a2e4d]" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-[#1a2e4d] text-[1.05rem] mb-1.5 tracking-tight">{cat.label}</h3>
              <p className="text-[#6b7b8d] text-[0.92rem] leading-relaxed">{cat.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
