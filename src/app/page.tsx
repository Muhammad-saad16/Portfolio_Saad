"use client"
import Home from "/Home.jpg"

import { motion } from "framer-motion"
import { ArrowDown,  Mail,  Code, Palette, Database, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white"
        >
          MS
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 light:from-gray-50 light:via-blue-50 light:to-purple-50 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white dark:bg-white light:bg-purple-400 rounded-full opacity-20"
            initial={{
              x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
              y: typeof window !== "undefined" ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
              y: typeof window !== "undefined" ? Math.random() * window.innerHeight : 0,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white dark:text-white light:text-gray-900 mb-4"
            >
              Muhammad{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Saad</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 dark:text-gray-300 light:text-gray-600 mb-6"
            >
              Passionate Web Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base sm:text-lg text-gray-400 dark:text-gray-400 light:text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Crafting Digital Experiences with Passion. I build modern, responsive, and user-friendly web applications
              that bring ideas to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                asChild
              >
                <Link href="/projects">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-900 hover:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 light:border-gray-300 light:text-gray-700 light:hover:bg-gray-100"
                asChild
              >
                <Link href="/contact">
                  Get In Touch
                  <Mail className="ml-2 h-4 w-4 " />
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 dark:bg-slate-900 light:bg-white flex items-center justify-center">
                  <Image
                    src= {Home}
                    alt="Muhammad Saad"
                    width={300}
                    height={300}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full opacity-80"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 rounded-full opacity-80"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-gray-400 dark:text-gray-400 light:text-gray-600"
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 px-4 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white dark:text-white light:text-gray-900 mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { name: "React", icon: Code, color: "from-blue-400 to-blue-600" },
              { name: "Next.js", icon: Globe, color: "from-gray-400 to-gray-600" },
              { name: "TypeScript", icon: Code, color: "from-blue-500 to-blue-700" },
              { name: "Node.js", icon: Database, color: "from-green-400 to-green-600" },
              { name: "UI/UX Design", icon: Palette, color: "from-purple-400 to-purple-600" },
              { name: "MongoDB", icon: Database, color: "from-green-500 to-green-700" },
              { name: "Tailwind CSS", icon: Palette, color: "from-cyan-400 to-cyan-600" },
              { name: "JavaScript", icon: Code, color: "from-yellow-400 to-yellow-600" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <Card className="bg-slate-700/50 dark:bg-slate-700/50 light:bg-white border-slate-600 dark:border-slate-600 light:border-gray-200 p-4 sm:p-6 text-center hover:border-purple-500 transition-all duration-300">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white dark:text-white light:text-gray-900">
                    {skill.name}
                  </h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white dark:text-white light:text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 mb-8 leading-relaxed">
              I&apos;m a passionate web developer with several years of experience creating beautiful, functional, and
              user-centered digital experiences. I specialize in modern web technologies and love turning ideas into
              reality.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-700 hover:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 light:border-gray-300 light:text-gray-700 light:hover:bg-gray-100"
              asChild
            >
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
