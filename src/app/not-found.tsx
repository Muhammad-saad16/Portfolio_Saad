"use client"

import { motion } from "framer-motion"
import { Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-300 text-lg max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
            asChild
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </motion.div>

        {/* Animated Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 left-20 w-16 h-16 border-2 border-blue-500 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 right-20 w-12 h-12 border-2 border-purple-500 rounded-full opacity-20"
        />
      </div>
    </div>
  )
}
