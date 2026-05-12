'use server'

import { createClient } from '@/lib/supabase'

export type BookingResult = {
  success: boolean
  message: string
}

export type BookingPayload = {
  service: string
  date: string
  time: string
  name: string
  email: string
  notes?: string
}

export async function submitBooking(data: BookingPayload): Promise<BookingResult> {
  const { service, date, time, name, email, notes } = data

  if (!service || !date || !time || !name?.trim() || !email?.trim()) {
    return { success: false, message: 'All required fields must be filled.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  try {
    const supabase = createClient()
    const { error } = await supabase.from('bookings').insert({
      service,
      date,
      time,
      name: name.trim(),
      email: email.trim(),
      notes: notes?.trim() || null,
    })
    if (error) throw error
    return { success: true, message: 'Booking confirmed.' }
  } catch (err) {
    console.error('Booking submission error:', err)
    return { success: false, message: 'Something went wrong. Please try again.' }
  }
}
