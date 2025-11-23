export interface Category {
    name: string;
    slug: string;
    type: "Web" | "Mobile";
}

export const categories: Category[] = [
    // Web App Templates
    { name: "Portfolio Page", slug: "portfolio-page", type: "Web" },
    { name: "Developer Resume Page", slug: "developer-resume", type: "Web" },
    { name: "Creative Agency Website", slug: "creative-agency", type: "Web" },
    { name: "Product Landing Page", slug: "product-landing", type: "Web" },
    { name: "SaaS Landing Page", slug: "saas-landing", type: "Web" },
    { name: "E-commerce Homepage", slug: "ecommerce-homepage", type: "Web" },
    { name: "Blog / Documentation", slug: "blog-documentation", type: "Web" },
    { name: "Login & Signup", slug: "login-signup", type: "Web" },
    { name: "Pricing Page", slug: "pricing-page", type: "Web" },
    { name: "Dashboard UI", slug: "dashboard-ui", type: "Web" },
    { name: "Analytics UI", slug: "analytics-ui", type: "Web" },
    { name: "Contact Page", slug: "contact-page", type: "Web" },
    { name: "Coming Soon Page", slug: "coming-soon", type: "Web" },

    // Mobile App Templates
    { name: "Onboarding Screens", slug: "onboarding-screens", type: "Mobile" },
    { name: "Login / Signup Flow", slug: "mobile-login-signup", type: "Mobile" },
    { name: "Profile Screen", slug: "profile-screen", type: "Mobile" },
    { name: "Settings Page", slug: "settings-page", type: "Mobile" },
    { name: "Social Media Feed", slug: "social-media-feed", type: "Mobile" },
    { name: "Chat App Interface", slug: "chat-interface", type: "Mobile" },
    { name: "E-commerce App UI", slug: "mobile-ecommerce", type: "Mobile" },
    { name: "Music Player UI", slug: "music-player", type: "Mobile" },
    { name: "Travel Booking Screens", slug: "travel-booking", type: "Mobile" },
    { name: "Food Delivery UI", slug: "food-delivery", type: "Mobile" },
    { name: "Finance/Wallet Dashboard", slug: "finance-dashboard", type: "Mobile" },
    { name: "Fitness Tracker UI", slug: "fitness-tracker", type: "Mobile" },
];
