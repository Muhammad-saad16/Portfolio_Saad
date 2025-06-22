"use client"

import { motion } from "framer-motion"
import { Download, Calendar, MapPin, Award, Users, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
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
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-3xl mx-auto">
              Get to know the person behind the code
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <Image
                  src="/About.jpg"
                  alt="Muhammad Saad"
                  width={400}
                  height={500}
                  className="rounded-2xl object-cover w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-gray-900">
                My Journey
              </h2>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed">
                Hello! I&apos;m Muhammad Saad, a passionate web developer based in Pakistan. My journey into web development
                began during my School years when I discovered the magic of turning ideas into interactive digital
                experiences.
              </p>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed">
                With over 3 years of experience in the field, I&apos;ve had the privilege of working on diverse projects
                ranging from small business websites to complex web applications. I believe in writing clean,
                maintainable code and creating user experiences that are both beautiful and functional.
              </p>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge with the developer community.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-300 dark:text-gray-300 light:text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 dark:text-gray-300 light:text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>3+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 dark:text-gray-300 light:text-gray-600">
                  <Coffee className="h-4 w-4" />
                  <span>Coffee Enthusiast</span>
                </div>
              </div>

        <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
      <a
        href="/my_resume.pdf" // Path to your PDF in the public folder
        download="my_resume.pdf" // Optional: Specifies the downloaded file name
        className="flex items-center"
      >
        <Download className="mr-2 h-4 w-4" />
        Download Resume
      </a>
    </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 px-4 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-white light:text-gray-900 mb-6">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-3xl mx-auto">
              Here are the technologies and skills I&apos;ve mastered over the years
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              { name: "Frontend Development", level: 95, skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
              { name: "Backend Development", level: 70, skills: ["Node.js", "Express", "MongoDB"] },
              { name: "UI/UX Design", level: 80, skills: ["Figma", "Adobe XD", "Responsive Design", "User Research"] },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl font-semibold text-white dark:text-white light:text-gray-900">
                    {category.name}
                  </h3>
                  <span className="text-gray-300 dark:text-gray-300 light:text-gray-600">{category.level}%</span>
                </div>
                <div className="w-full bg-gray-700 dark:bg-gray-700 light:bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${category.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-700 dark:bg-slate-700 light:bg-gray-100 text-gray-300 dark:text-gray-300 light:text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-white light:text-gray-900 mb-6">
              My Timeline
            </h2>
            <p className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-600">
              Key milestones in my development journey
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                year: "2024",
                title: "Senior Full Stack Developer",
                company: "Technova",
                description: "Leading full stack development for enterprise applications using React, Next.js, and Node.js",
              },
              {
                year: "2023",
                title: "Frontend Developer",
                company: "Web & Media Agency",
                description: "Developed complete web solutions for various clients using modern tech stack",
              },
              {
                year: "2022",
                title: "Frontend Developer",
                company: "COKIRI",
                description: "Built responsive web applications and improved user experience",
              },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-gray-200 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-shrink-0">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-white dark:text-white light:text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-blue-400 dark:text-blue-400 light:text-blue-600 mb-2">{item.company}</p>
                      <p className="text-gray-300 dark:text-gray-300 light:text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 px-4 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: "20+", label: "Projects Completed", icon: Award },
              { number: "3+", label: "Years Experience", icon: Calendar },
              { number: "25+", label: "Happy Clients", icon: Users },
              { number: "50+", label: "Cups of Coffee", icon: Coffee },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-slate-700/50 dark:bg-slate-700/50 light:bg-white border-slate-600 dark:border-slate-600 light:border-gray-200 p-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-gray-900 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm sm:text-base">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
