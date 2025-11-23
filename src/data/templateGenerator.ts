import { Category } from "./categories";

export interface Template {
    id: string;
    title: string;
    description: string;
    prompt: string;
    tags: string[];
    previewGradient: string;
}

const styles = [
    "Modern Minimalist", "Glassmorphism", "Neobrutalist", "Dark Mode",
    "Cyberpunk", "Corporate Clean", "Playful Pastel", "Monochromatic"
];

const features = [
    "Sidebar Navigation", "Hero Video Background", "3D Elements", "Parallax Scrolling",
    "Grid Layout", "Bento Box Grid", "Large Typography", "Micro-interactions"
];

export function generateTemplates(category: Category): Template[] {
    return Array.from({ length: 10 }).map((_, i) => {
        const style = styles[i % styles.length];
        const feature = features[i % features.length];

        return {
            id: `${category.slug}-${i}`,
            title: `${style} ${category.name}`,
            description: `A ${style.toLowerCase()} design for a ${category.name.toLowerCase()} featuring ${feature.toLowerCase()}.`,
            prompt: `Create a ${category.name.toLowerCase()} with a ${style} design style. Key features should include ${feature}, a responsive layout, and smooth animations. Use a color palette that matches the ${style} aesthetic. Ensure the UI is accessible and modern.`,
            tags: [style, feature, category.type],
            previewGradient: getGradient(i),
        };
    });
}

function getGradient(index: number): string {
    const gradients = [
        "from-pink-500 via-red-500 to-yellow-500",
        "from-green-300 via-blue-500 to-purple-600",
        "from-indigo-400 to-cyan-400",
        "from-gray-900 to-gray-600 bg-gradient-to-r",
        "from-rose-400 via-fuchsia-500 to-indigo-500",
        "from-blue-400 via-indigo-500 to-purple-500",
        "from-emerald-500 to-lime-600",
        "from-orange-400 to-rose-400",
        "from-slate-900 via-purple-900 to-slate-900",
        "from-teal-400 to-yellow-200",
    ];
    return gradients[index % gradients.length];
}
