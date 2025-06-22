"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {  ExternalLink, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import ecommerce from "/E-comerce.png"
import inter from "/interview.png"
import Ku from "/professor.png"
import cokiri from "/cokiri.png"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      image: ecommerce.src,
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      category: "Full Stack",
      featured: true,
      demo: "https://hashmicameras.pk/",
    },
    {
      title: "Job Interview Platform(In process)",
      description:
        "A platform for job seekers to apply for jobs and receive interviews.",
      image: inter.src,
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      category: "Full Stack",
      featured: false,
      demo: "https://job-interview-application.vercel.app/",
    },
    {
      title: "KU Professor Portal",
      description: "A platform for KU professors to manage their courses, lectures, and events.",
      image: Ku.src,
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      category: "Frontend",
      featured: false,
      demo: "https://drumairsiddiqui.com/",
    },
    {
      title: "Institutional Research Platform",
      description: "A platform for researchers to collaborate and share their work.",
      image: cokiri.src,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      category: "Full Stack",
      featured: false,
      demo: "https://cokiri.net/",
    },
    
  ]

  const categories = ["All", "Frontend", "Full Stack",]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

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
              My{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-3xl mx-auto mb-8">
              Here are some of my recent projects that showcase my skills and passion for web development.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={
                    filter === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-gray-700 border-0"
                      : "border-gray-600 text-gray-800 hover:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 light:border-gray-300 light:text-gray-700 light:hover:bg-gray-100"
                  }
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-gray-200 overflow-hidden h-full">
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="flex gap-3">
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={project.demo}>
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                        {/* <Button size="sm" variant="secondary" asChild>
                          <Link href={project.github}>
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button> */}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-slate-700 dark:bg-slate-700 light:bg-gray-100 text-gray-300 dark:text-gray-300 light:text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                        asChild
                      >
                        <Link href={project.demo}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 light:border-gray-300 light:text-gray-700 light:hover:bg-gray-100"
                        asChild
                      >
                        {/* <Link href={project.github}>
                          <Github className="h-4 w-4" />
                        </Link> */}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
