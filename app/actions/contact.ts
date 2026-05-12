'use server'

import { createClient } from '@/lib/supabase'

export type ContactResult = {
  success: boolean
  message: string
}

export async function submitContact(formData: FormData): Promise<ContactResult> {
  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()

  if (!name || !email || !message) {
    return { success: false, message: 'All fields are required.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  try {
    const supabase = createClient()
    const { error } = await supabase.from('contacts').insert({ name, email, message })
    if (error) throw error
    return { success: true, message: 'Message sent.' }
  } catch (err) {
    console.error('Contact submission error:', err)
    return { success: false, message: 'Something went wrong. Please try again.' }
  }
}
