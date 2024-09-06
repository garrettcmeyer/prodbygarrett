'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import Image from 'next/image'

interface TimelineItemProps {
  logo: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  items: TimelineItemProps[];
}

const TimelineItem = ({ logo, title, subtitle, date, description }: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex gap-4 mb-10 relative"
  >
    <div className="flex-shrink-0 z-10">
      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-gray-200">
        <Image src={logo} alt={subtitle} width={32} height={32} className="rounded-full" />
      </div>
    </div>
    <div className="flex-grow pt-1">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground">{subtitle}</p>
      <p className="text-sm text-muted-foreground mb-2">{date}</p>
      <p className="text-sm">{description}</p>
    </div>
  </motion.div>
)

const Section = ({ title, icon, items }: SectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-12 ml-10"
  >
    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
      <div className="p-1 bg-white rounded-full text-black border border-gray-200">
        {icon}
      </div>
      {title}
    </h2>
    <div className="pl-6">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  </motion.section>
)

export default function Component() {
  const profile = {
    experiences: [
      {
        logo: "/icons/amplified.png",
        title: "Audio Engineering Intern",
        subtitle: "Amplified Studios",
        date: "June 2024 - August 2024",
        description: "Setup sessions for artists to record music and podcasts. Assisted in the operation of recording equipment."
      },
    ],
    education: [
      {
        logo: "/icons/sagecreek.webp",
        title: "High School Diploma",
        subtitle: "Sage Creek High School",
        date: "Graduation: May 2024",
        description: ""
      },
      {
        logo: "/icons/chicostate.jpg",
        title: "BA in Recording Arts",
        subtitle: "Chico State",
        date: "Graduation: May 2026",
        description: "Audio Engineering and Music Production with emphasis on operating consoles"
      },
      {
        logo: "/icons/chicostate.jpg",
        title: "BA in Computer Science",
        subtitle: "Chico State",
        date: "Graduation: May 2028",
        description: ""
      }
    ]
  }

  return (
    <div className="w-full p-6 space-y-10 ml-26 bg-gray-100">
      <Section 
        title="Education" 
        icon={<GraduationCap size={24} />} 
        items={profile.education} 
      />
      <Section 
        title="Work Experience" 
        icon={<Briefcase size={24} />} 
        items={profile.experiences} 
      />
    </div>
  )
}