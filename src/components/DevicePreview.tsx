"use client";

import { cn } from "@/lib/utils";
import { Theme } from "@/data/themes";

interface DevicePreviewProps {
    theme: Theme;
    children: React.ReactNode;
}

export function DevicePreview({ theme, children }: DevicePreviewProps) {
    return (
        <div className="relative mx-auto w-[320px] h-[680px] bg-black rounded-[50px] border-[8px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/10">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[30px] w-[150px] bg-black rounded-b-[20px] z-20"></div>

            {/* Screen Content */}
            <div
                className="w-full h-full overflow-y-auto overflow-x-hidden pt-12 pb-8 px-4 transition-colors duration-500"
                style={theme.cssVars}
            >
                {children}
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-white/20 rounded-full z-20"></div>
        </div>
    );
}
