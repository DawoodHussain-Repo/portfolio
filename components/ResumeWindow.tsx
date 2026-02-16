"use client";

import React, { useState, useRef, useEffect } from "react";
import { Minus, ExternalLink, X } from "lucide-react";

interface ResumeWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeWindow({ isOpen, onClose }: ResumeWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    };
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".window-controls")) return;
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  if (!isOpen) return null;

  return (
    <div
      ref={windowRef}
      className="fixed z-[1000] flex flex-col rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg)] shadow-2xl"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isMinimized ? "300px" : "800px",
        maxWidth: "90vw",
        height: isMinimized ? "auto" : "80vh",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] cursor-grab select-none bg-[var(--bg-secondary)]"
        onMouseDown={handleMouseDown}
      >
        <span className="text-xs font-mono tracking-wider text-[var(--fg-muted)]">
          RESUME.PDF
        </span>
        <div className="window-controls flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-[var(--bg-tertiary)] text-[var(--fg-muted)] transition-colors bg-transparent border-none cursor-pointer"
            aria-label="Minimize"
          >
            <Minus className="w-3 h-3" />
          </button>
          <button
            onClick={() => window.open("/Dawood-Hussain.pdf", "_blank")}
            className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-[var(--bg-tertiary)] text-[var(--fg-muted)] transition-colors bg-transparent border-none cursor-pointer"
            aria-label="Open in new tab"
          >
            <ExternalLink className="w-3 h-3" />
          </button>
          <button
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-[var(--bg-tertiary)] text-[var(--fg-muted)] transition-colors bg-transparent border-none cursor-pointer"
            aria-label="Close"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="flex-1 bg-[var(--bg-tertiary)]">
          <iframe
            src="/Dawood-Hussain.pdf"
            title="Resume"
            className="w-full h-full border-none"
          />
        </div>
      )}
    </div>
  );
}
