// Mock data for Frank Uwora's Portfolio

export const portfolioData = {
  hero: {
    name: "Frank Uwora",
    title: "Web Developer & AI Automation Expert",
    rotatingTitles: [
      "WordPress Expert",
      "React Developer",
      "AI Automation Specialist",
      "Marketing Strategist",
      "CRM & Funnel Architect"
    ],
    image: "https://i.imgur.com/nJvJIrC.png"
  },

  about: {
    description: "A 20-year-old Web Developer & AI Automation Specialist who blends technical engineering with marketing psychology. I build scalable systems for businesses globally, focused on automation, performance & growth. My approach combines cutting-edge development with strategic thinking to deliver solutions that drive real results."
  },

  experience: [
    {
      category: "Top Rated Freelancer – Upwork",
      items: [
        "Delivered high-converting websites",
        "Built automation systems",
        "CRM integrations",
        "Marketing funnels",
        "Global client satisfaction"
      ]
    },
    {
      category: "Development Stack",
      items: [
        "PHP",
        "JavaScript",
        "React",
        "React Native",
        "Python",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Node.js"
      ]
    },
    {
      category: "CMS & Platforms",
      items: [
        "WordPress",
        "Shopify",
        "Wix",
        "Squarespace",
        "Webflow",
        "GoHighLevel"
      ]
    },
    {
      category: "AI & Automation",
      items: [
        "WhatsApp Automation",
        "AI Chatbots",
        "API Integrations",
        "Funnel Automation",
        "Email Systems"
      ]
    },
    {
      category: "Marketing & Growth",
      items: [
        "SEO",
        "Conversion Optimization",
        "Funnel Strategy",
        "Email Marketing"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Travel Agency Website",
      description: "Modern travel booking platform with intuitive UI, real-time availability, and seamless payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1707836885254-79b6e3d7b18d",
      link: "#"
    },
    {
      id: 2,
      title: "Healthcare Functional Website",
      description: "HIPAA-compliant healthcare platform with appointment scheduling, patient portal, and secure messaging.",
      technologies: ["WordPress", "PHP", "MySQL", "HIPAA"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "#"
    },
    {
      id: 3,
      title: "Handyman Business Website",
      description: "Service-based website with booking system, service catalog, and customer review management.",
      technologies: ["Webflow", "JavaScript", "Calendly API"],
      image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89",
      link: "#"
    },
    {
      id: 4,
      title: "Crypto Landing Page",
      description: "High-converting landing page for cryptocurrency platform with animated charts and real-time data.",
      technologies: ["React", "Tailwind", "Web3.js", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1602576666092-bf6447a729fc",
      link: "#"
    },
    {
      id: 5,
      title: "WhatsApp Automation System",
      description: "Automated messaging system for customer engagement, lead nurturing, and support ticketing.",
      technologies: ["Python", "WhatsApp API", "AI", "Webhooks"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
      link: "#"
    },
    {
      id: 6,
      title: "Marketing Funnel System",
      description: "Complete funnel automation with email sequences, CRM integration, and conversion tracking.",
      technologies: ["GoHighLevel", "Zapier", "ActiveCampaign"],
      image: "https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa",
      link: "#"
    }
  ],

  contact: {
    email: "frankuwora@gmail.com",
    // EmailJS will be configured later
    emailjs: {
      serviceId: "YOUR_SERVICE_ID",
      templateId: "YOUR_TEMPLATE_ID",
      publicKey: "YOUR_PUBLIC_KEY"
    }
  },

  social: {
    linkedin: "https://www.linkedin.com/in/frankuwora/",
    youtube: "https://www.youtube.com/@frankuwora",
    github: "https://github.com/FrankUwora/",
    twitter: "https://x.com/FrankUwora",
    email: "frankuwora@gmail.com"
  },

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TravelVista",
      company: "TravelVista Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      text: "Frank delivered an exceptional travel booking platform that exceeded our expectations. His attention to detail and technical expertise transformed our business. Highly recommend!",
      date: "2024-12-15"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Medical Director",
      company: "HealthCare Plus",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      rating: 5,
      text: "Working with Frank on our HIPAA-compliant healthcare platform was seamless. He understood our complex requirements and delivered a secure, user-friendly solution on time.",
      date: "2024-11-20"
    },
    {
      id: 3,
      name: "James Rodriguez",
      role: "Owner",
      company: "Pro Handyman Services",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
      text: "Frank built us a fantastic booking system that tripled our online inquiries. His marketing funnel integration was genius. Best investment we've made!",
      date: "2024-10-10"
    },
    {
      id: 4,
      name: "Emily Watson",
      role: "Founder",
      company: "CryptoVentures",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      text: "The crypto landing page Frank created for us is stunning! The animations are smooth, and the conversion rate increased by 200%. Absolute professional!",
      date: "2024-09-05"
    },
    {
      id: 5,
      name: "David Martinez",
      role: "Marketing Director",
      company: "GrowthLab Agency",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
      text: "Frank's WhatsApp automation system revolutionized our client communication. We now handle 10x more leads with better engagement. True automation expert!",
      date: "2024-08-18"
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "E-commerce Manager",
      company: "ShopSmart",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      rating: 5,
      text: "The marketing funnel system Frank built integrates perfectly with our CRM. Our sales team loves it, and our conversion rates have never been better!",
      date: "2024-07-22"
    }
  ]
};
