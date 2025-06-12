"use server";

import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface SubmitResult {
  success: boolean;
  message?: string;
}

export async function submitContactForm(data: ContactFormData): Promise<SubmitResult> {
  const validationResult = contactFormSchema.safeParse(data);

  if (!validationResult.success) {
    // Simplified error message, client-side validation should catch specifics
    return { success: false, message: "Invalid form data. Please check your inputs." };
  }

  // Simulate API call or database save
  console.log("Received contact form submission:", validationResult.data);
  
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a potential error (uncomment to test error handling)
  // if (Math.random() > 0.5) {
  //   return { success: false, message: "An unexpected error occurred on the server." };
  // }

  return { success: true, message: "Form submitted successfully!" };
}
