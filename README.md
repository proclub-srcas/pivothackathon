# PIVOT: i2i - Idea to Impact Hackathon 🚀

**Code to Innovate, Build the Future**

Welcome to the official repository for the **PIVOT Hackathon Website**. This web application serves as the central hub for the PIVOT: i2i - Idea to Impact hackathon, organized by the **Programming Club of SRCAS** in partnership with **Larsen & Toubro Limited (L&T)**.

## 🌟 About the Project

PIVOT is an industry-focused hackathon designed to bridge the gap between academia and innovation. It starts with an abstract submission round and culminates in a 12-hour coding marathon where finalists present their solutions to real-world challenges in sustainability, healthcare, smart cities, and emerging technologies.

This repository contains the source code for the landing page, registration portal, and information center for the event.

### Key Features
- **Dynamic Hero Section**: Engaging visuals with partner logos and interactive elements.
- **Event Timeline**: A scroll-animated roadmap of the event schedule.
- **Guidelines & FAQ**: Comprehensive details for participants.
- **Responsive Design**: Fully optimized for mobile and desktop devices.
- **Smooth Animations**: Powered by Framer Motion and GSAP for a premium user experience.
- **Performance Optimized**: Fast loading times and optimized assets.

## 🛠️ Tech Stack

This project is built using modern web technologies to ensure high performance and scalability.

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: 
  - [Framer Motion](https://www.framer.com/motion/)
  - [GSAP](https://greensock.com/gsap/)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-hackathon-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx        # Root layout with smooth scroll provider
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles and Tailwind directives
├── components/           # Reusable UI components
│   ├── faq/              # FAQ section components
│   ├── guidelines/       # Guidelines section components
│   ├── sections/         # Major page sections (Timeline, Prizes, Contact)
│   └── ui/               # Basic UI elements (Buttons, Cards)
├── public/               # Static assets (Images, Logos, Guidelines PDF)
└── config/               # Configuration files (if any)
```

## 🗓️ Event Schedule

- **Feb 6, 2026**: Registration Opens
- **Feb 28, 2026**: Round 1 – Abstract Submission Deadline
- **March 8, 2026**: Shortlisted Teams Announcement
- **March 10, 2026**: Round 2 – Concept Presentation
- **March 14, 2026**: Hackathon Finals (12-Hour Marathon)

## 👥 Contributors

- **Organizer**: [Sri Ramakrishna College of Arts and Science (SRCAS)](https://www.srcas.ac.in/)
- **Club**: Programming Club, SRCAS
- **Industrial Partner**: [Larsen & Toubro Limited](https://www.larsentoubro.com/)

## 📜 License

This project is licensed under the MIT License.

---

<p align="center">
  Crafted with ❤️ by [உதய UD](https://udhayasankar.vercel.app/)
</p>
