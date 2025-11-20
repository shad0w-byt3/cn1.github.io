"use server"

import { revalidatePath } from "next/cache"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validation
  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required" }
  }

  if (!email.includes('@')) {
    return { success: false, error: "Please enter a valid email address" }
  }

  // For static GitHub Pages deployment, we'll use mailto link fallback
  // Store form data for potential future integration
  console.log("Contact form submission:", {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString()
  })

  revalidatePath("/")

  return {
    success: true,
    message: "Thank you for your message! For direct contact, please email hero.cn1@gmail.com",
    emailLink: `mailto:hero.cn1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
  }
}
