"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  ChevronDown,
  Calendar,
  Download,
  ArrowRight,
} from "lucide-react";

// Lazy load below-the-fold components
const Timeline = dynamic(() => import("@/components/sections/timeline"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-50/50 rounded-3xl" />,
});
const GuidelinesSection = dynamic(() => import("@/components/guidelines/guidelines"));
const PrizesSection = dynamic(() => import("@/components/sections/PrizesSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));
const FaqList = dynamic(() => import('@/components/faq/faq-list').then(mod => mod.FaqList));
const DodgeHero = dynamic(() => import("@/components/DodgeHero"));
const FloatingLogos = dynamic(() => import("@/components/FloatingLogos"));

import JumpingText from "@/components/JumpingText";
import { Typography } from '@/components/Typography';
import Image from "next/image"
import { Link } from "next-view-transitions";



// ============================================
// ANIMATION VARIANTS
// ============================================
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#005CAA]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#005CAA]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#005CAA]/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#005CAA 1px, transparent 1px), linear-gradient(90deg, #005CAA 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Partners Logos - Top Right */}
      <div className="absolute top-6 right-10 z-50 hidden md:flex items-center gap-8">
        <Image
          src="/srcas-1-logo.png"
          alt="SRCAS"
          width={180}
          height={100}
          className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300 rounded-xl"
        />
        <div className="w-[1px] h-12 bg-gray-400/30" />
        <Image
          src="/l-and-t-logo-1.jpeg"
          alt="L&T Product Development Centre"
          width={200}
          height={100}
          className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300 rounded-xl"
        />

        <div className="w-[1px] h-12 bg-gray-400/30" />
        <Image
          src="/programming-club-2-logo.png"
          alt="Programming Club"
          width={180}
          height={100}
          className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300 rounded-xl"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Badge */}
          {/* <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#005CAA]/10 text-[#005CAA] rounded-full text-sm font-medium">
              <Calendar className="w-4 h-4" />
              February 2026
            </span>
          </motion.div> */}



          {/* PIVOT Logo */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-18 mb-2 mt-0 md:mt-10">
            <div className="flex items-center">
              <Image
                src="/PIVOT.png"
                alt="PIVOT"
                width={700}
                height={500}
                className="h-56 md:h-96 w-auto object-contain"
              />
            </div>
          </div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            <div className="flex flex-wrap justify-center gap-x-4 mb-2">
              <JumpingText
                text="Innovate to "
                defaultColor="#111827"
                hoverColor="#005CAA"
              />
              <JumpingText
                text="Build the Future"
                defaultColor="#005CAA"
                hoverColor="#003366"
              />
            </div>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto gap-16 md:gap-27 mb-12"
          >
            <span className=" text-5xl font-semibold text-[#005CAA]  "></span>  <span className="text-5xl font-semibold text-gray-800"></span>
            <span className="text-lg mt-2 block">
              <span className="font-semibold text-[#005CAA]"> </span>
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(0, 92, 170, 0)",
                  "0px 0px 20px rgba(0, 92, 170, 0.4)",
                  "0px 0px 0px rgba(0, 92, 170, 0)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="flex items-center gap-2 px-8 py-4 bg-[#005CAA] text-white font-semibold rounded-xl hover:bg-[#004a8c] transition-all duration-300 shadow-lg"
            >
              Register Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <a
              href="/fileFolder/Abstract Submission Guidelines.pdf"
              download="Abstract_Submission_Guidelines.pdf"
              className="flex items-center gap-2 px-8 py-4 border-2 border-[#005CAA] text-[#005CAA] font-semibold rounded-xl hover:bg-[#005CAA]/5 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Guidelines for the Abstract
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Badge - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-8 right-8"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#005CAA]/10 text-[#005CAA] rounded-full text-sm font-medium backdrop-blur-sm border border-[#005CAA]/20">
          <Calendar className="w-4 h-4" />
          14th March  2026
        </span>
      </motion.div>
      {/* Scroll indicator */}
      <motion.div

        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }
        }
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-[#005CAA]/50" />
      </motion.div >
    </section >
  );
}

// ============================================
// ABOUT SECTION
// ============================================
function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="text-[#005CAA] font-semibold uppercase tracking-wider text-sm"
          >
            <JumpingText
              text="Who We Are and"
              defaultColor="#005CAA"
              hoverColor="#003366"
              jumpHeight={6}
            />
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8"
          >
            <div className="max-w-7xl mx-auto relative z-10">
              {/* Section Title */}
              <div className="flex flex-col items-center justify-center mb-10 md:mb-20 text-center space-y-4">
                <Typography.H2 className="font-wc-rough-trad text-black text-[clamp(1.5rem,3.5vw,3.5rem)] leading-none">
                  <JumpingText
                    text="What is "
                    defaultColor="#000000"
                    hoverColor="#005CAA"
                    jumpHeight={12}
                  />
                  <span className="font-wc-rough-trad text-[#005CAA] whitespace-nowrap">
                    <JumpingText
                      text="PIVOT INNOVATION CHALLENGE"
                      defaultColor="#005CAA"
                      hoverColor="#003366"
                      jumpHeight={14}
                    />
                    {" "}
                  </span>
                </Typography.H2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-gray-700 to-black rounded-full mt-4" />
              </div>
            </div>
          </motion.h2>
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed mb-2 md:mb-6">
              Sri Ramakrishna College of Arts and Science (SRCAS) is proud to partner with <span className="font-semibold text-[#005CAA]">L&T Product Development Centre</span> to
              host an industry-focused Innovation Challenge that bridges academia and innovation.
            </p>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
              This Innovation Challenge exposes students to real industry problem statements, encouraging solutions aligned with actual engineering workflows, planning challenges, and data-driven decision-making. By bringing together the brightest minds to solve challenges across emerging technologies, the event fosters innovation that translates into real-world impact.
            </p>
          </motion.div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/about"
              className="group flex items-center gap-2 px-8 py-3 bg-[#005CAA] text-white font-semibold rounded-full hover:bg-[#004a8c] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


// ============================================
// FAQ SECTION
// ============================================
const faqs = [
  {
    question: "Who can participate in the Innovation Challenge?",
    answer:
      "The Innovation Challenge is open to all Engineering Students! Whether you are a beginner or an expert, everyone is welcome. Teams can have 2-4 members.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No, participation is completely free! We believe innovation should be accessible to everyone.",
  },
  {
    question: "What are the competition rounds and how are teams selected?",
    answer:
      <div className="space-y-4">
        <p>
          The event has two rounds: Round 1 is abstract submission and shortlisting; Round 2 is a final presentation by shortlisted teams. Abstracts are reviewed for relevance, structure, feasibility and originality; shortlisted teams get time to refine their concept for final evaluation.
        </p>
        <a
          href="/fileFolder/Abstract Submission Guidelines.pdf"
          download="Abstract_Submission_Guidelines.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#005CAA] text-white font-semibold rounded-lg hover:bg-[#003366] transition-all duration-300 text-sm"
        >
          <Download className="w-4 h-4" />
          Download Guidelines
        </a>
      </div>
  },
  {
    question: "What must be included in the abstract and how will it be evaluated?",
    answer: (
      <div className="space-y-4">
        <p>
          The abstract should show your understanding of the chosen problem statement, the core idea/solution, planned approach or framework, and expected outcome/usefulness. Evaluators score submissions on relevance to the problem, logical structure, feasibility within the timeline, and originality.
        </p>
        <a
          href="/fileFolder/Abstract Submission Guidelines.pdf"
          download="Abstract_Submission_Guidelines.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#005CAA] text-white font-semibold rounded-lg hover:bg-[#003366] transition-all duration-300 text-sm"
        >
          <Download className="w-4 h-4" />
          Download Guidelines
        </a>
      </div>
    ),
  },
  {
    question: "What should I bring to the Innovation Challenge?",
    answer:
      "Bring your laptop, charger, any hardware you might need, and your creativity! We'll provide food, refreshments, free wifi, and a comfortable workspace.",
  },
  {
    question: "Can I start working on my project before the event?",
    answer:
      "Yes! You can start working on your project.",
  },
  {
    question: "How are the winners selected?",
    answer:
      "Projects are judged based on innovation, technical complexity, practical applicability, and presentation quality by a panel of industry experts.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        {/* Background Card Container */}
        {/* <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-300 p-8 md:p-12"> */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-[#005CAA] font-semibold uppercase tracking-wider text-sm">
              Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#005CAA] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function Home() {
  return (
    <main className="bg-transparent">
      <HeroSection />
      <FloatingLogos hideInHero={true} />
      {/* <DodgeHero /> */}
      <AboutSection />
      <FaqList />
      <GuidelinesSection />
      <PrizesSection />
      <Timeline />
      <FAQSection />
      <ContactSection />
    </main>
  );
}