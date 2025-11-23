"use client";

import { Theme, themes } from "@/data/themes";
import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

interface ThemeSidebarProps {
    selectedTheme: Theme;
    onSelectTheme: (theme: Theme) => void;
}

export function ThemeSidebar({ selectedTheme, onSelectTheme }: ThemeSidebarProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(selectedTheme.prompt);
        setCopied(true);
        toast.success("Prompt copied! Now go build it.");
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full md:w-80 h-full border-l border-white/10 bg-background/50 backdrop-blur-xl flex flex-col">
            <div className="p-6 border-b border-white/10">
                <h2 className="font-bold text-lg mb-1">Themes</h2>
                <p className="text-xs text-muted-foreground">Pick a flavor, any flavor.</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {themes.map((theme) => (
                    <button
                        key={theme.id}
                        onClick={() => onSelectTheme(theme)}
                        className={cn(
                            "w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left group",
                            selectedTheme.id === theme.id
                                ? "bg-white/10 ring-1 ring-white/20"
                                : "hover:bg-white/5"
                        )}
                    >
                        <div
                            className="w-8 h-8 rounded-full shadow-sm ring-2 ring-white/10 group-hover:scale-110 transition-transform"
                            style={{ backgroundColor: theme.color }}
                        />
                        <span className={cn(
                            "text-sm font-medium transition-colors",
                            selectedTheme.id === theme.id ? "text-white" : "text-muted-foreground group-hover:text-white"
                        )}>
                            {theme.name}
                        </span>
                    </button>
                ))}
            </div>

            <div className="p-6 border-t border-white/10 bg-background/80">
                <div className="mb-4">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Selected: {selectedTheme.name}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-3 italic">
                        &quot;{selectedTheme.prompt}&quot;
                    </p>
                </div>
                <Button
                    className="w-full gap-2 font-bold"
                    onClick={handleCopy}
                    style={{ backgroundColor: selectedTheme.color, color: '#fff' }}
                >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Copied!" : "Copy Prompt"}
                </Button>
            </div>
        </div>
    );
}
