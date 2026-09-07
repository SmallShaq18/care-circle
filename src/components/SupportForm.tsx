import { useState } from 'react'
import { Send, Check, AlertTriangle, Loader2 } from 'lucide-react'
import { submitSupportForm } from '../lib/web3forms'

type CategoryValue = 'prayer' | 'emotional' | 'financial' | 'spiritual' | 'suggestion' | 'unknown' | 'other'

interface FormData {
  category: CategoryValue | ''
  message: string
  followUp: 'anonymous' | 'yes'
  contact: string
  consent: boolean
}

const categoryLabels: Record<string, string> = {
  prayer: 'Prayer',
  emotional: 'Emotional Support',
  financial: 'Financial Difficulty',
  spiritual: 'Spiritual Struggles',
  suggestion: 'Suggestion or Concern',
  unknown: "I Don't Know What I Need",
  other: 'Other',
}

export default function SupportForm() {
  const [form, setForm] = useState<FormData>({
    category: '',
    message: '',
    followUp: 'anonymous',
    contact: '',
    consent: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (): boolean => {
    const nextErrors: Record<string, string> = {}
    if (!form.category) {
      nextErrors.category = 'Please choose what you would like to talk about.'
    }
    if (!form.message.trim()) {
      nextErrors.message = 'Please share a little about what is going on.'
    } else if (form.message.trim().length < 5) {
      nextErrors.message = 'Please share a bit more — even a few sentences help.'
    }
    if (form.followUp === 'yes' && form.contact.trim() && form.contact.trim().length < 4) {
      nextErrors.contact = 'Please provide a way to reach you, or choose to remain anonymous.'
    }
    if (!form.consent) {
      nextErrors.consent = 'Please confirm your understanding before sending.'
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    setErrors({})
    try {
      const result = await submitSupportForm({
        category: form.category ? categoryLabels[form.category] || form.category : '',
        message: form.message.trim(),
        followUp: form.followUp,
        contact: form.contact.trim(),
        consent: form.consent,
      })
      if (result.success) {
        setStatus('success')
        setForm({
          category: '',
          message: '',
          followUp: 'anonymous',
          contact: '',
          consent: false,
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <SuccessMessage onReset={() => setStatus('idle')} />
  }

  return (
    <section id="support-form" className="bg-[#f6f4f1] px-6 py-14 md:py-18">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[1.75rem] md:text-[2rem] font-semibold text-[#1a2e4d] mb-3 tracking-tight leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Tell us what's going on
          </h2>
          <p className="text-[#6b7b8d] text-base md:text-[1.05rem] font-light">
            You can share as much or as little as you're comfortable with.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-white rounded-[1.5rem] border border-[#1a2e4d]/5 shadow-[0_4px_24px_rgba(26,46,77,0.04)] p-6 md:p-9 space-y-7">
          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-[0.85rem] font-semibold text-[#1a2e4d] mb-3 tracking-tight">
              What kind of support are you looking for?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { value: 'prayer', label: 'Prayer' },
                { value: 'emotional', label: 'Emotional Support' },
                { value: 'financial', label: 'Financial Difficulty' },
                { value: 'spiritual', label: 'Spiritual Struggles' },
                { value: 'suggestion', label: 'Suggestion or Concern' },
                { value: 'unknown', label: "I Don't Know What I Need" },
                { value: 'other', label: 'Something Else' },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${form.category === opt.value ? 'bg-[#1a2e4d]/[0.04] border-[#1a2e4d]/20' : 'bg-[#f6f4f1] border-[#1a2e4d]/8 hover:border-[#1a2e4d]/15'}`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={opt.value}
                    checked={form.category === opt.value}
                    onChange={(e) => setForm({ ...form, category: e.target.value as CategoryValue })}
                    className="w-4 h-4 accent-[#1a2e4d] text-[#1a2e4d]"
                  />
                  <span className="text-[0.9rem] font-medium text-[#1f2937]">{opt.label}</span>
                </label>
              ))}
            </div>
            {errors.category && <p className="text-red-600 text-[0.8rem] mt-2">{errors.category}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-[0.85rem] font-semibold text-[#1a2e4d] mb-3 tracking-tight">
              What's going on?
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us whatever you'd like us to know. There is no perfect way to say it."
              className="w-full rounded-xl border border-[#1a2e4d]/8 px-4 py-3 text-[#1f2937] bg-white placeholder:text-[#9ca3af]/70 focus:outline-none focus:ring-2 focus:ring-[#c5a880]/30 focus:border-[#c5a880]/30 resize-y text-[0.9rem] leading-relaxed transition-all shadow-sm"
            />
            {errors.message && <p className="text-red-600 text-[0.8rem] mt-2">{errors.message}</p>}
            <p className="text-[0.75rem] text-[#9ca3af] mt-2.5">Your message will be received confidentially by the Welfare Head.</p>
          </div>

          {/* Follow-up */}
          <div>
            <p className="text-[0.85rem] font-medium text-[#1a2e4d] mb-3 tracking-tight">Would you like someone to follow up with you?</p>
            <div className="flex flex-wrap gap-2.5">
              <label className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[0.85rem] cursor-pointer border transition-all ${form.followUp === 'anonymous' ? 'bg-[#1a2e4d] text-white border-[#1a2e4d] shadow-sm' : 'bg-[#f6f4f1] text-[#4a5568] border-[#1a2e4d]/8 hover:border-[#1a2e4d]/15'}`}>
                <input
                  type="radio"
                  name="followUp"
                  value="anonymous"
                  checked={form.followUp === 'anonymous'}
                  onChange={(e) => setForm({ ...form, followUp: e.target.value as 'anonymous' | 'yes' })}
                  className="sr-only"
                />
                No, I'd prefer to remain anonymous
              </label>
              <label className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[0.85rem] cursor-pointer border transition-all ${form.followUp === 'yes' ? 'bg-[#1a2e4d] text-white border-[#1a2e4d] shadow-sm' : 'bg-[#f6f4f1] text-[#4a5568] border-[#1a2e4d]/8 hover:border-[#1a2e4d]/15'}`}>
                <input
                  type="radio"
                  name="followUp"
                  value="yes"
                  checked={form.followUp === 'yes'}
                  onChange={(e) => setForm({ ...form, followUp: e.target.value as 'anonymous' | 'yes' })}
                  className="sr-only"
                />
                Yes, I'd like someone to reach me
              </label>
            </div>
            {form.followUp === 'yes' && (
              <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <label htmlFor="contact" className="block text-[0.8rem] font-medium text-[#1a2e4d] mb-2 tracking-tight">
                  How can we reach you? (Optional)
                </label>
                <input
                  id="contact"
                  type="text"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder="Phone number, WhatsApp, or email"
                  className="w-full rounded-xl border border-[#1a2e4d]/8 px-4 py-3 text-[#1f2937] bg-white placeholder:text-[#9ca3af]/60 focus:outline-none focus:ring-2 focus:ring-[#c5a880]/30 focus:border-[#c5a880]/30 text-[0.9rem] transition-all shadow-sm"
                />
                {errors.contact && <p className="text-red-600 text-[0.8rem] mt-2">{errors.contact}</p>}
                <p className="text-[0.75rem] text-[#9ca3af] mt-2">This is completely optional. Only provide what you're comfortable sharing.</p>
              </div>
            )}
          </div>

          {/* Consent */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                className="mt-0.5 w-5 h-5 accent-[#1a2e4d] rounded border-[#1a2e4d]/20 shrink-0"
              />
              <span className="text-[0.85rem] text-[#4a5568] leading-relaxed select-none font-light">
                I understand that this message will be received by the Welfare Head of RCCG Sufficiency Parish and handled with care.
              </span>
            </label>
            {errors.consent && <p className="text-red-600 text-[0.8rem] mt-2 ml-8">{errors.consent}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-2.5 bg-[#1a2e4d] hover:bg-[#15253f] text-white font-semibold text-[0.95rem] py-3.5 rounded-xl transition-all duration-200 active:scale-[0.99] shadow-[0_4px_16px_rgba(26,46,77,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending your message...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" strokeWidth={2} />
                Send Confidential Message
              </>
            )}
          </button>

          {status === 'error' && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-[#1f2937]">We couldn't send your message.</p>
                <p className="text-sm text-[#6b7b8d]">Please check your connection and try again.</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <section className="bg-[#f6f4f1] px-6 py-16 md:py-24">
      <div className="max-w-md mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-[#1a2e4d]/5 border border-[#1a2e4d]/8 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-[#1a2e4d]" strokeWidth={2} />
        </div>
        <h2 className="text-[1.6rem] md:text-[1.9rem] font-semibold text-[#1a2e4d] mb-4 tracking-tight leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Your message has been received.
        </h2>
        <p className="text-[#6b7b8d] text-base md:text-[1.05rem] leading-relaxed mb-2 font-light">
          Thank you for trusting us enough to reach out. Your message will be seen by the Welfare Head and handled with care.
        </p>
        <div className="bg-white rounded-2xl border border-[#1a2e4d]/5 shadow-[0_2px_12px_rgba(26,46,77,0.03)] p-5 mt-8 text-left space-y-3">
          <div className="flex items-start gap-3 text-[0.85rem] text-[#6b7b8d] leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] mt-1.5 shrink-0"></span>
            <span>If you requested follow-up, someone will reach out using the contact information you provided.</span>
          </div>
          <div className="flex items-start gap-3 text-[0.85rem] text-[#6b7b8d] leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a2e4d]/30 mt-1.5 shrink-0"></span>
            <span>If you chose to remain anonymous, no response is required from you.</span>
          </div>
        </div>
        <button
          onClick={onReset}
          className="mt-8 inline-flex items-center gap-2 bg-white border border-[#1a2e4d]/10 hover:border-[#1a2e4d]/20 text-[#1a2e4d] font-medium text-[0.9rem] px-6 py-3 rounded-xl transition-all duration-200 active:scale-[0.99] shadow-[0_1px_4px_rgba(26,46,77,0.05)] hover:shadow-[0_2px_8px_rgba(26,46,77,0.08)]"
        >
          Send another message
        </button>
      </div>
    </section>
  )
}
