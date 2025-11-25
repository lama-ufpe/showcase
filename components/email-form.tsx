"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function EmailForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setMessage("Por favor, insira um e-mail válido")
      return
    }

    setIsSubmitting(true)
    setMessage("")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would send this to your backend
    console.log("[v0] Email submitted:", email)

    setMessage("✅ E-mail cadastrado com sucesso!")
    setEmail("")
    setIsSubmitting(false)

    // Clear success message after 3 seconds
    setTimeout(() => setMessage(""), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-white border-2 border-[#FFC600] text-[#232222] placeholder:text-gray-400 focus-visible:ring-[#FFC600] text-base"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#FFC600] hover:bg-[#FFD633] text-[#232222] font-bold px-8 whitespace-nowrap"
        >
          <Mail className="w-4 h-4 mr-2" />
          {isSubmitting ? "Enviando..." : "Notificar PS"}
        </Button>
      </div>
      {message && (
        <p className={`text-center text-sm ${message.includes("✅") ? "text-[#C3FE4C]" : "text-red-400"}`}>{message}</p>
      )}
    </form>
  )
}
