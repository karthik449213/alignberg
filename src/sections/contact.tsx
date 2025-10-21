"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { portfolioData } from "@/data/portfolio-data";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    url: `mailto:${portfolioData.contact.email}`,
    color: "hover:text-red-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: portfolioData.contact.linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "GitHub",
    icon: Github,
    url: portfolioData.contact.github,
    color: "hover:text-gray-800 dark:hover:text-gray-200",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: portfolioData.contact.twitter,
    color: "hover:text-blue-400",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Get In Touch
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-primary mx-auto rounded-full"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
                <p className="text-muted-foreground mb-6">
                  I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Find me on</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className={`flex items-center justify-center w-12 h-12 rounded-full bg-card border hover:shadow-lg transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    📍 Available for freelance projects
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ⚡ Response time: Within 24 hours
                  </p>
                  <p className="text-sm text-muted-foreground">
                    🌍 Open to remote opportunities
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input placeholder="Your Name" />
                      </div>
                      <div>
                        <Input type="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div>
                      <Input placeholder="Subject" />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your message..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full group">
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
