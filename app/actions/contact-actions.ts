"use server"

import { revalidatePath } from "next/cache"

export async function submitContactForm(formData: FormData) {
  // Static portfolio - contact form disabled
  // In a real implementation, you would send email or use a service like Formspree
  console.log("Contact form submitted:", {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  // Simulate success for now
  revalidatePath("/")
  return { success: true }
}
