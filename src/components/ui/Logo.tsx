import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn("relative w-10 h-10 flex items-center justify-center", className)}>
            {/* Center Dot */}
            <div className="absolute w-1.5 h-1.5 bg-violet-600 rounded-full" />

            {/* Inner Ring */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={`inner-${i}`}
                    className="absolute w-1 h-1 bg-violet-600 rounded-full"
                    style={{
                        transform: `rotate(${i * 60}deg) translate(8px)`,
                    }}
                />
            ))}

            {/* Outer Ring */}
            {[...Array(12)].map((_, i) => (
                <div
                    key={`outer-${i}`}
                    className="absolute w-1 h-1 bg-violet-500/80 rounded-full"
                    style={{
                        transform: `rotate(${i * 30}deg) translate(16px)`,
                    }}
                />
            ))}
        </div>
    );
};
