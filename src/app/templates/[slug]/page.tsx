"use client";

import { useParams } from "next/navigation";
import { categories } from "@/data/categories";
import { generateTemplates } from "@/data/templateGenerator";
import { Navbar } from "@/components/Navbar"; // We might need to recreate a simple navbar or just use a back button
import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function TemplateCategoryPage() {
    const params = useParams();
    const slug = params.slug as string;
    const category = categories.find((c) => c.slug === slug);

    const [copiedId, setCopiedId] = useState<string | null>(null);

    if (!category) {
        return <div className="p-20 text-center">Category not found</div>;
    }

    const templates = generateTemplates(category);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        toast.success("Prompt copied to clipboard!");
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <main className="min-h-screen bg-background text-foreground p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12">
                    <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
                    </Link>
                    <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
                    <p className="text-muted-foreground">
                        10 AI-ready prompts to kickstart your {category.name.toLowerCase()}.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {templates.map((template, idx) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group rounded-xl border border-white/10 bg-card overflow-hidden hover:border-primary/50 transition-colors"
                        >
                            {/* Preview Placeholder */}
                            <div className={`h-48 w-full bg-gradient-to-br ${template.previewGradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {template.tags.map(tag => (
                                        <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/5 text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
                                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                                    {template.description}
                                </p>

                                <Button
                                    className="w-full gap-2"
                                    variant="secondary"
                                    onClick={() => handleCopy(template.prompt, template.id)}
                                >
                                    {copiedId === template.id ? <Check size={16} /> : <Copy size={16} />}
                                    {copiedId === template.id ? "Copied" : "Copy Prompt"}
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
