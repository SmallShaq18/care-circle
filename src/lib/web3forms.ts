interface FormData {
  category: string
  message: string
  followUp: 'anonymous' | 'yes'
  contact: string
  consent: boolean
}

export async function submitSupportForm(data: FormData): Promise<{ success: boolean; message?: string }> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''
  if (!accessKey) {
    return { success: false, message: 'Web3Forms access key not configured.' }
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Care Circle — ${data.category}`,
        category: data.category,
        message: data.message,
        follow_up: data.followUp,
        contact_info: data.followUp === 'yes' ? data.contact : 'Not provided',
        consent_given: data.consent,
        from_name: 'Anonymous',
        email: 'adetunjiifeoluwamary@gmail.com',
      }),
    })

    const result = await response.json()
    if (result.success) {
      return { success: true, message: 'Your message has been received.' }
    }
    return { success: false, message: result.message || 'Something went wrong sending your message.' }
  } catch (e) {
    return { success: false, message: 'Could not connect to Web3Forms. Please try again later.' }
  }
}
