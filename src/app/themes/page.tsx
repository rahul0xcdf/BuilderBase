"use client";

import { useState } from "react";
import { themes } from "@/data/themes";
import { DevicePreview } from "@/components/DevicePreview";
import { ThemeContent } from "@/components/ThemeContent";
import { ThemeSidebar } from "@/components/ThemeSidebar";
import { Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThemeExplorer() {
    const [selectedTheme, setSelectedTheme] = useState(themes[0]);

    return (
        <main className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#0a0a0a] text-white">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-full relative">
                {/* Minimal Header */}
                <header className="absolute top-0 left-0 p-8 z-10 w-full pointer-events-none flex justify-between items-start">
                    <div className="pointer-events-auto">
                        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-4 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                        </Link>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <Sparkles className="text-yellow-400 fill-yellow-400" />
                            BuilderBase
                        </h1>
                        <p className="text-muted-foreground text-sm mt-2 max-w-md leading-relaxed">
                            Yes, you have the idea but not what to prompt. <br />
                            Check out the theme, take inspiration, and <span className="text-white font-medium underline decoration-wavy decoration-primary">build it.</span>
                        </p>
                    </div>
                </header>

                {/* Preview Container */}
                <div className="flex-1 flex items-center justify-center p-8 pt-32 md:pt-8 bg-grid-white/[0.02]">
                    <DevicePreview theme={selectedTheme}>
                        <ThemeContent theme={selectedTheme} />
                    </DevicePreview>
                </div>
            </div>

            {/* Sidebar */}
            <ThemeSidebar
                selectedTheme={selectedTheme}
                onSelectTheme={setSelectedTheme}
            />
        </main>
    );
}
