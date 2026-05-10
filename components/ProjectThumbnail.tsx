"use client";

import React from "react";
import Image from "next/image";

type ProjectThumbnailProps = {
  title: string;
  gradient?: string;
  src?: string;
  alt?: string;
  className?: string;
};

export default function ProjectThumbnail({
  title,
  gradient = "from-teal-400/15 to-orange-500/15",
  src,
  alt,
  className,
}: ProjectThumbnailProps) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden h-44 w-full ${className ?? ""}`}
    >
      {src ? (
        <div className="absolute inset-0">
          <Image
            src={src}
            alt={alt ?? title}
            fill
            className="object-cover"
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            unoptimized
          />
        </div>
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      )}

      <div className="absolute -left-8 -top-8 w-36 h-36 rounded-full opacity-30 blur-xl bg-white/10 pointer-events-none" />
      <div className="absolute -right-10 -bottom-6 w-28 h-28 rounded-full opacity-25 blur-lg bg-white/8 pointer-events-none" />

      <div className="absolute inset-3 rounded-md border border-white/6 bg-gradient-to-t from-black/12 to-transparent pointer-events-none" />

      <div className="absolute left-4 bottom-3 text-white font-semibold text-lg drop-shadow-md pointer-events-none">
        {title}
      </div>
    </div>
  );
}
