export interface Theme {
    id: string;
    name: string;
    color: string; // Hex for the sidebar dot
    cssVars: React.CSSProperties; // Variables to apply to the preview container
    prompt: string;
}

export const themes: Theme[] = [
    {
        id: "cupertino",
        name: "Cupertino (Basic)",
        color: "#007AFF",
        cssVars: {
            "--preview-bg": "#F2F2F7",
            "--preview-card-bg": "#FFFFFF",
            "--preview-text": "#000000",
            "--preview-primary": "#007AFF",
            "--preview-radius": "12px",
        } as React.CSSProperties,
        prompt: "Create a clean iOS-style interface with rounded corners, large headings, and a translucent navigation bar. Use San Francisco font or similar sans-serif.",
    },
    {
        id: "modern-minimal",
        name: "Modern Minimal",
        color: "#18181b",
        cssVars: {
            "--preview-bg": "#ffffff",
            "--preview-card-bg": "#f4f4f5",
            "--preview-text": "#18181b",
            "--preview-primary": "#18181b",
            "--preview-radius": "4px",
        } as React.CSSProperties,
        prompt: "Design a stark, minimalist interface using black and white. Use sharp corners, heavy borders, and plenty of whitespace.",
    },
    {
        id: "violet-bloom",
        name: "Violet Bloom",
        color: "#7c3aed",
        cssVars: {
            "--preview-bg": "#f5f3ff",
            "--preview-card-bg": "#ffffff",
            "--preview-text": "#4c1d95",
            "--preview-primary": "#7c3aed",
            "--preview-radius": "20px",
        } as React.CSSProperties,
        prompt: "Create a soft, playful interface with purple and violet tones. Use large border radii and subtle drop shadows.",
    },
    {
        id: "pink-flamingo",
        name: "Pink Flamingo",
        color: "#db2777",
        cssVars: {
            "--preview-bg": "#fce7f3",
            "--preview-card-bg": "#ffffff",
            "--preview-text": "#831843",
            "--preview-primary": "#db2777",
            "--preview-radius": "16px",
        } as React.CSSProperties,
        prompt: "Design a vibrant interface using hot pinks and soft roses. Use bold typography and high-contrast buttons.",
    },
    {
        id: "mocha-mousse",
        name: "Mocha Mousse",
        color: "#78350f",
        cssVars: {
            "--preview-bg": "#fffbeb",
            "--preview-card-bg": "#ffffff",
            "--preview-text": "#451a03",
            "--preview-primary": "#78350f",
            "--preview-radius": "8px",
        } as React.CSSProperties,
        prompt: "Create a warm, cozy interface using brown and cream tones. Use serif headings and rounded buttons.",
    },
    {
        id: "bubblegum",
        name: "Bubblegum",
        color: "#ec4899",
        cssVars: {
            "--preview-bg": "#ffe4e6",
            "--preview-card-bg": "#fff1f2",
            "--preview-text": "#be123c",
            "--preview-primary": "#f43f5e",
            "--preview-radius": "24px",
        } as React.CSSProperties,
        prompt: "Design a fun, pop-art inspired interface with bright pinks and rounded shapes. Think bubblegum and candy.",
    },
    {
        id: "amethyst-haze",
        name: "Amethyst Haze",
        color: "#9333ea",
        cssVars: {
            "--preview-bg": "#faf5ff",
            "--preview-card-bg": "#f3e8ff",
            "--preview-text": "#581c87",
            "--preview-primary": "#9333ea",
            "--preview-radius": "12px",
        } as React.CSSProperties,
        prompt: "Create a mystical interface using deep purples and soft lavenders. Use gradients and glassmorphism effects.",
    },
    {
        id: "doom-64",
        name: "Doom 64",
        color: "#ef4444",
        cssVars: {
            "--preview-bg": "#1a0505",
            "--preview-card-bg": "#450a0a",
            "--preview-text": "#fecaca",
            "--preview-primary": "#ef4444",
            "--preview-radius": "0px",
        } as React.CSSProperties,
        prompt: "Design a dark, aggressive interface inspired by retro shooters. Use deep reds, blacks, and sharp, jagged edges.",
    },
    {
        id: "catppuccin",
        name: "Catppuccin",
        color: "#f5c2e7",
        cssVars: {
            "--preview-bg": "#1e1e2e",
            "--preview-card-bg": "#313244",
            "--preview-text": "#cdd6f4",
            "--preview-primary": "#f5c2e7",
            "--preview-radius": "10px",
        } as React.CSSProperties,
        prompt: "Create a soothing pastel interface based on the Catppuccin color palette. Use soft, desaturated colors and a dark background.",
    },
    {
        id: "neon-nature",
        name: "Neon Nature",
        color: "#22c55e",
        cssVars: {
            "--preview-bg": "#052e16",
            "--preview-card-bg": "#14532d",
            "--preview-text": "#dcfce7",
            "--preview-primary": "#22c55e",
            "--preview-radius": "16px",
        } as React.CSSProperties,
        prompt: "Design a high-contrast interface mixing nature themes with neon green accents. Dark forest greens background with bright lime highlights.",
    },
    {
        id: "holographic-glass",
        name: "Holographic Glass",
        color: "#06b6d4",
        cssVars: {
            "--preview-bg": "#083344",
            "--preview-card-bg": "rgba(255, 255, 255, 0.1)",
            "--preview-text": "#cffafe",
            "--preview-primary": "#06b6d4",
            "--preview-radius": "16px",
        } as React.CSSProperties,
        prompt: "Create a futuristic interface using glassmorphism and holographic gradients. Use translucent backgrounds and cyan accents.",
    },
    {
        id: "cyber-yellow",
        name: "Cyber Yellow",
        color: "#eab308",
        cssVars: {
            "--preview-bg": "#000000",
            "--preview-card-bg": "#171717",
            "--preview-text": "#fef08a",
            "--preview-primary": "#eab308",
            "--preview-radius": "0px",
        } as React.CSSProperties,
        prompt: "Design a brutalist interface using black and bright yellow. Use monospaced fonts and thick borders.",
    }
];
