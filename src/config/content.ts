import { Cpu, BarChart2, Database, Link, AlertTriangle, Lightbulb, DollarSign, HelpCircle, Zap, Clock } from 'lucide-react';

export const content = {
  company: {
    name: "NexGen Company AI",
    logo: "/logo.png",
    favicon: "/favicon.ico",
  },
  hero: {
    title: "Get your enterprise apps in days, not weeks",
    subtitle: "Crafting cutting-edge SaaS and AI solutions, data engineering, SAP BTP, and integrated cloud applications for enterprises.",
    ctaText: "Contact Us",
    backgroundImage: "/hero-background.jpg",
    services: [
      { name: "App Development", icon: Cpu },
      { name: "Business Gen AI", icon: Lightbulb },
      { name: "Data Engineering", icon: Database },
      { name: "Enterprise Integration", icon: Link },
    ],
    partners: [
      { name: "SAP", logo: "/sap-logo.png" },
      { name: "BTP", logo: "/btp-logo.png" },
      { name: "Azure", logo: "/azure-logo.png" },
      { name: "AWS", logo: "/aws-logo.png" },
    ],
  },
  problem: {
    title: "The Problem",
    subtitle: "50% of digital transformation fall short due to rigid timelines and the demand for high-quality code.",
    steps: [
      { emoji: "🕒", text: "Months of planning & development" },
      { emoji: "😓", text: "Struggle to deliver quality code" },
      { emoji: "😞", text: "Postpone Go-Live" },
    ],
  },
  solution: {
    title: "Supercharge your Digital Transformation",
    subtitle: "Accelerate your digital transformation with our rapid app development, cutting-edge AI solutions, advanced data engineering, and seamless enterprise integration, delivering tailored success in record time.",
    services: [
      {
        title: "Rapid App Development",
        icon: Zap,
        features: [
          "100+ pre-build code templates for different business usecase scenarios",
          "Well defined framework",
          "Proven architecture, used by numerous clients",
          "Experience team with modern tech stacks",
          "simple app built in 3 days, medium-complexity in 7 days",
        ],
      },
      {
        title: "Business Gen AI",
        icon: Lightbulb,
        features: [
          "5+ successful AI SaaS building experience",
          "pre-built AI model and algorithems for different business usecases",
          "50+ AI usecase PoC demonstrated to customers",
          "Experience team with modern AI tech stacks",
          "low-complexity AI app built in 5 days, medium-complexity in 10 days",
        ],
      },
      {
        title: "Data Engineering",
        icon: Database,
        features: [
          "Docker image for Cloud Connector, SDI (Smart Data Integration)",
          "SDK for Any-DB to Any-DB Real-Time data transfer",
          "Data Factory, Data Lake experience team",
          "1 Billion records (2 TB) processed in 23 minutes (credibility)",
        ],
      },
      {
        title: "Enterprise Integration",
        icon: Link,
        features: [
          "Expertise in SAP CPI, Solace, BTP Event Mesh, Kafka",
          "Delivered 50+ SAP Build Process Automation",
          "Building readily consumable business integration flows (upcoming)",
        ],
      },
    ],
  },
  pricing: {
    title: "Save your budget, hire a NexGen Engineer!",
    subtitle: "Choose the plan that fits your needs",
    plans: [
      {
        title: "Small",
        description: "Perfect for simple Apps",
        price: 1020,
        discountedPrice: 720,
        features: [
          "Cloud Infra (BTP) Setup",
          "App Development",
          "Database Connection",
          "5 microservices",
          "upto 5 API consumption",
          "simple business algo",
        ],
      },
      {
        title: "Medium",
        description: "Complexity Application",
        price: 4480,
        discountedPrice: 1680,
        features: [
          "Cloud Infra (BTP) Setup",
          "App Development",
          "Database Connection",
          "file management",
          "15 microservices",
          "upto 15 API consumption",
          "complex business algo",
          "RBAC setup",
          "App performance monitoring",
        ],
        popular: true,
      },
      {
        title: "Large",
        description: "Powerpack Enterprise App",
        price: 7680,
        discountedPrice: 3360,
        features: [
          "Cloud Infra (BTP) Setup",
          "App Development",
          "Database Connection",
          "file management",
          "30+ microservices",
          "upto 30+ API consumption",
          "High complex business algo",
          "RBAC setup",
          "App performance monitoring",
          "Business Gen AI",
        ],
      },
    ],
  },
  budgetCalculator: {
    title: "Budget Calculator",
    subtitle: "Estimate Your Project Cost",
    description: "Use our budget calculator to get an estimate for your project based on the engineer level and hours required.",
    rates: [
      { level: "Level 1 [Associate Software Engineer] (0-1 year)", rate: 20 },
      { level: "Level 2 [Software Engineer] (1-3 years)", rate: 30 },
      { level: "Level 3 [Sr. Engineer] (3-6 years)", rate: 40 },
      { level: "Level 4 [Lead Engineer] (6-9 years)", rate: 50 },
      { level: "Distinguished Engineer (9+ years)", rate: 80 },
    ],
    services: [
      { title: "Application Development", description: "Tailoring enterprise applications with a focus on SAP BTP, Azure Power Platform, and scalable cloud solutions with AWS Compute." },
      { title: "Business AI (GenAI Solutions)", description: "Driving business process innovation and efficiency through cutting-edge AI technologies." },
      { title: "Data Engineering", description: "Advanced data solutions for robust data integration, management, and analytics." },
      { title: "Enterprise Integration", description: "Integrating diverse systems seamlessly, leveraging our expertise across SAP, Azure, and AWS platforms for a unified business ecosystem." },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "What do I get exactly?",
        answer: [
          "When you hire our Enterprise Engineers, you will get free assessment of your system and business requirements by our Nexgen Enterprise Tech Lead",
          "Our NexGen Engineers will Develop your Business requirements, do end-to-end testing, deploy till production",
          "We support 2 weeks of hypercare post production deployment",
        ],
      },
      {
        question: "What is NexGen's tech stack expertise?",
        answer: [
          "SAP BTP (Cloud Foundry, Kyma)",
          "SAP BTP Administration, Cloud DevOps",
          "SAP BTP CAP Development (NodeJS)",
          "Integration (Event Mesh, Kafka, Solace, CPI)",
          "Data Engineering (HANA Cloud, PostgreSQL, Azure DL, AWS S3, SDI, BODS, CPI-DS)",
          "SAP Core (ABAP)",
          "Microsoft Power Platform (Power Apps, Power Automate, Logic Apps, Power BI)",
          "Gen AI (Business AI apps - MS OpenAI, Hugging Face Models, RAG)",
          "Programming - NodeJS, Python, TypeScript",
          "UI/UX (FIORI, React, NextJS)",
        ],
      },
      {
        question: "I have another question",
        answer: ["Great! Reach out to us via email at partha@nexgencompany.ai"],
      },
    ],
  },
  footer: {
    logo: "/logo.png",
    companyName: "NexGen Technologies",
    companyDescription: "NexGen Technologies - Propelling Enterprises into the Future",
    copyright: "Copyright © 2024 - All rights reserved",
    linkedInUrl: "https://www.linkedin.com/company/nexgen-company/",
    legalLinks: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
};