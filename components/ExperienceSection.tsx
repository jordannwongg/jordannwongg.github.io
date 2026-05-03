import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

// Define the data structure for your experience
type ExperienceData = {
  title: string;
  desc: string[];
  year: string;
  company: string;
  companyLink: string;
};

// Hardcoded experience data
const experienceData: ExperienceData[] = [
  {
    title: "Member Service Representative",
    desc: ["At Crunch Fitness, I manage member data, scheduling, and transactions using internal CRM systems in a high-volume environment. I also troubleshoot account and billing issues, helping ensure a smooth customer experience and supporting member retention."],
    year: "March 2026 - Present",
    company: "Crunch Fitness",
    companyLink: "https://www.crunch.com/"
  },
  {
    title: "AI Model & Data Evaluation Analyst",
    desc: ["I evaluate AI-generated code and technical responses for correctness, efficiency, and edge-case handling across programming tasks. Using Python, I analyze model outputs to identify logical inconsistencies and help improve the reliability of large language model responses."],
    year: "December 2025 - Present",
    company: "DataAnnotation",
    companyLink: "https://dataannotation.tech/?projects=PL&worker_src=G&utm_source=google&utm_medium=display&utm_campaign=22342920477&utm_adgroup=198383717641&utm_content=806378468090&gad_source=1&gad_campaignid=22342920477&gbraid=0AAAAAqBNCsUSeSpxCfu64jDHdI9O1P0wY&gclid=CjwKCAjwwdbPBhBgEiwAxBRA4b-ylJSWrwOJSA-m8biIgM9EbmelTIwLNJg3GPr5t1I3-guOR345phoC5nMQAvD_BwE"
  },
  {
    title: "Software Engineer Intern",
    desc: ["Engineered and implemented a full-stack chatbot application utilizing OpenAI's API, with a Python backend for operations and API handling, React.JS for frontend development, MySQL for database management, and Docker for streamlined deployment and local execution."],
    year: "August - December 2023",
    company: "FPT Asia Pacific",
    companyLink: "https://fptsoftware.com/fpt-asia-pacific"
  },
  {
    title: "Research and Development Intern",
    desc: ["Designed and optimized cloud applications, utilizing Python, APIs, and Google Cloud Functions to create Slack bots that enhance office operations."],
    year: "June - July 2023",
    company: "Openspace Ventures",
    companyLink: "https://www.openspace.vc/"
  },
  // ... (Add more experiences as needed)
];

// Props type for the ExperienceCard component
interface ExperienceCardProps {
  title: string;
  desc: string[];
  year: string;
  company: string;
  companyLink: string;
}

const ExperienceSection = () => {
  return (
    <section id="experience">
      <section>
        <h1 className="my-10 text-center font-bold text-4xl">
          Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
        </h1>
        <div className="!dark:bg-gray-900 -mt-14">
          <div className="grid grid-cols-1 !dark:bg-gray-900 max-w-xl mx-auto pt-20">
            {/* Experience card */}
            {experienceData.map((exp, idx) => (
              <React.Fragment key={idx}>
                <ExperienceCard
                  title={exp.title}
                  desc={exp.desc}
                  year={exp.year}
                  company={exp.company}
                  companyLink={exp.companyLink}
                />
                {idx === experienceData.length - 1 ? null : (
                  <div className="divider-container flex flex-col items-center -mt-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10">
                      <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10 animate-ping"></div>
                    </div>
                    <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}


const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute text-2xl md:-left-10 -top-10 md:text-3xl font-bold">
      {year}
      </h1>
      <h1 className="font-semibold text-xl text-blue-500">{title}</h1>
      <a href={companyLink} rel="noreferrer" target="_blank" className="text-gray-500 hover:underline">
        {company}
      </a>
      <ul className="text-gray-600 dark:text-gray-400 my-2">
        {desc.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceSection
