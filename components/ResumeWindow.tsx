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
  const [isMobile, setIsMobile] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
    if (isMobile) return;
    if ((e.target as HTMLElement).closest(".window-controls")) return;
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={windowRef}
        className="fixed z-[1000] flex flex-col rounded-xl overflow-hidden border border-[var(--black)] bg-white shadow-2xl"
        style={
          isMobile
            ? {
                left: "8px",
                right: "8px",
                top: "8px",
                bottom: "8px",
                width: "auto",
              }
            : {
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: isMinimized ? "300px" : "800px",
                maxWidth: "90vw",
                height: isMinimized ? "auto" : "80vh",
              }
        }
      >
        {/* Title bar */}
        <div
          className="flex items-center justify-between px-4 py-3 border-b border-[var(--black)] select-none bg-[var(--gray-100)]"
          style={{ cursor: isMobile ? "default" : "grab" }}
          onMouseDown={handleMouseDown}
        >
          <span className="text-xs font-mono tracking-wider text-[var(--gray-500)]">
            RESUME.PDF
          </span>
          <div className="window-controls flex items-center gap-2">
            {!isMobile && (
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-[var(--gray-200)] text-[var(--black)] transition-colors bg-transparent border-none cursor-pointer"
                aria-label="Minimize"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={() => window.open("/Dawood-Hussain.pdf", "_blank")}
              className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-[var(--gray-200)] text-[var(--black)] transition-colors bg-transparent border-none cursor-pointer"
              aria-label="Open in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-red-100 text-[var(--black)] hover:text-red-600 transition-colors bg-transparent border-none cursor-pointer"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <div className="flex-1 bg-[var(--gray-100)]">
            <iframe
              src="/Dawood-Hussain.pdf"
              title="Resume"
              className="w-full h-full border-none"
            />
          </div>
        )}
      </div>
    </>
  );
}
