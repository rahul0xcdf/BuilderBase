"use client";

import { Theme } from "@/data/themes";
import { Bell, Moon, Settings, LogOut } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeContentProps {
    theme: Theme;
}

export function ThemeContent({ theme }: ThemeContentProps) {
    return (
        <div className="flex flex-col h-full space-y-6" style={{ color: "var(--preview-text)" }}>
            {/* Header */}
            <motion.div
                key={`header-${theme.id}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-1"
            >
                <h1 className="text-3xl font-bold">My Feed</h1>
                <p className="opacity-70 text-sm">Welcome back, Riley!</p>
            </motion.div>

            {/* Stories / Circles */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {[1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="w-16 h-16 rounded-full border-2 flex-shrink-0"
                        style={{ borderColor: "var(--preview-primary)" }}
                    />
                ))}
            </div>

            {/* Main Card */}
            <motion.div
                key={`card-${theme.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 rounded-[var(--preview-radius)] shadow-sm"
                style={{ backgroundColor: "var(--preview-card-bg)" }}
            >
                <h3 className="font-semibold mb-2">Latest Update</h3>
                <p className="text-sm opacity-80 mb-4 leading-relaxed">
                    This is a card component that adapts to the selected theme. Notice how the border radius, colors, and shadows change?
                </p>
                <button
                    className="w-full py-3 font-medium rounded-[var(--preview-radius)] transition-transform active:scale-95"
                    style={{
                        backgroundColor: "var(--preview-primary)",
                        color: theme.id === 'modern-minimal' ? '#fff' : '#fff' // Simple contrast check could be better
                    }}
                >
                    Read More
                </button>
            </motion.div>

            {/* Settings List */}
            <motion.div
                key={`settings-${theme.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-4 rounded-[var(--preview-radius)] space-y-4"
                style={{ backgroundColor: "var(--preview-card-bg)" }}
            >
                <div className="flex justify-between items-center">
                    <span className="font-medium">Settings</span>
                    <span className="text-xs opacity-50 cursor-pointer">Edit</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Bell size={18} className="opacity-70" />
                        <span className="text-sm">Notifications</span>
                    </div>
                    <div
                        className="w-10 h-6 rounded-full relative transition-colors"
                        style={{ backgroundColor: "var(--preview-primary)" }}
                    >
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Moon size={18} className="opacity-70" />
                        <span className="text-sm">Dark Mode</span>
                    </div>
                    <div className="w-10 h-6 rounded-full bg-gray-300 relative">
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                    </div>
                </div>
            </motion.div>

            <div className="flex-1" />

            {/* Logout Button */}
            <button
                className="w-full py-4 border rounded-[var(--preview-radius)] flex items-center justify-center gap-2 font-medium transition-colors hover:opacity-80"
                style={{
                    borderColor: "var(--preview-card-bg)",
                    backgroundColor: "transparent",
                    color: "var(--preview-text)"
                }}
            >
                <LogOut size={18} />
                Log Out
            </button>
        </div>
    );
}
