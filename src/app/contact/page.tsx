"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("https://formspree.io/f/mqaprqpb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setError("Failed to send message. Please try again or contact me directly.")
      // Reset error message after 5 seconds
      setTimeout(() => setError(""), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 light:from-gray-50 light:via-blue-50 light:to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-white light:text-gray-900 mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-gray-900 mb-6">
                  Let&apos;s Start a Conversation
                </h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed mb-8">
                  I&apos;m always excited to work on new projects and collaborate with amazing people. Whether you have a
                  project in mind or just want to say hello, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "saadfreelancer16@gmail.com",
                    href: "mailto:saadfreelancer16@gmail.com",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+92 333 2858292",
                    href: "tel:+923332858292",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Karachi, Pakistan",
                    href: "#",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white light:text-gray-900 font-semibold">{contact.title}</h3>
                      <a
                        href={contact.href}
                        className="text-gray-300 dark:text-gray-300 light:text-gray-600 hover:text-blue-400 transition-colors"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-white dark:text-white light:text-gray-900 mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/Muhammad-saad16", label: "GitHub" },
                    { icon: Linkedin, href: "www.linkedin.com/in/muhammad-saad-raza-6aa58b2b4", label: "LinkedIn" },
                  ].map((social) => (
                    <Button
                      key={social.label}
                      size="icon"
                      variant="outline"
                      className="border-gray-600 text-gray-800 hover:bg-gray-900 hover:border-blue-500 hover:text-blue-400 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 light:border-gray-300 light:text-gray-700 light:hover:bg-gray-100"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-gray-200 p-6 sm:p-8">
                <form
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/mqaprqpb"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-700 dark:bg-slate-700 light:bg-gray-50 border-slate-600 dark:border-slate-600 light:border-gray-300 text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-700 dark:bg-slate-700 light:bg-gray-50 border-slate-600 dark:border-slate-600 light:border-gray-300 text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-slate-700 dark:bg-slate-700 light:bg-gray-50 border-slate-600 dark:border-slate-600 light:border-gray-300 text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-slate-700 dark:bg-slate-700 light:bg-gray-50 border-slate-600 dark:border-slate-600 light:border-gray-300 text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Hidden Formspree fields */}
                  <input type="hidden" name="_replyto" value={formData.email} />
                  <input type="hidden" name="_subject" value={`Portfolio Contact: ${formData.subject}`} />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="mr-2"
                        >
                          <MessageCircle className="h-4 w-4" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Success Message */}
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <p className="text-green-400 font-medium">Message Sent Successfully!</p>
                      </div>
                      <p className="text-green-300 text-sm">
                        Thank you for reaching out! I&apos;ll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-red-400" />
                        <p className="text-red-400 font-medium">Error Sending Message</p>
                      </div>
                      <p className="text-red-300 text-sm">{error}</p>
                    </motion.div>
                  )}
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
