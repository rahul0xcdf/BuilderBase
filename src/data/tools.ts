export interface Tool {
    id: string;
    name: string;
    category: string;
    description: string;
    url: string;
    icon: string; // URL or lucide icon name (handled in component)
}

export const tools: Tool[] = [
    {
        id: "1",
        name: "Tailwind CSS",
        category: "UI Library",
        description: "A utility-first CSS framework for rapidly building custom designs.",
        url: "https://tailwindcss.com",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
    },
    {
        id: "2",
        name: "Framer Motion",
        category: "Animation",
        description: "A production-ready motion library for React.",
        url: "https://www.framer.com/motion/",
        icon: "https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png"
    },
    {
        id: "3",
        name: "Lucide React",
        category: "Icons",
        description: "Beautiful & consistent icon toolkit made by the community.",
        url: "https://lucide.dev",
        icon: "https://lucide.dev/logo.light.svg"
    },
    {
        id: "4",
        name: "Shadcn UI",
        category: "UI Library",
        description: "Beautifully designed components that you can copy and paste into your apps.",
        url: "https://ui.shadcn.com",
        icon: "https://ui.shadcn.com/favicon.ico"
    },
    {
        id: "5",
        name: "GSAP",
        category: "Animation",
        description: "Professional-grade JavaScript animation for the modern web.",
        url: "https://greensock.com/gsap/",
        icon: "https://greensock.com/uploads/monthly_2020_03/gsap-logo-icon.png.369a88e9678c4309341c58c674250200.png"
    },
    {
        id: "6",
        name: "Spline",
        category: "3D Design",
        description: "A friendly 3D design tool for the web.",
        url: "https://spline.design",
        icon: "https://spline.design/images/icon_favicon32.png"
    }
];
