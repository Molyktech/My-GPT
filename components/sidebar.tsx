"use client";
import { cn } from "@/lib/utils";
import {
  Code,
  Cog,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-700",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-yellow-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-full bg-[#111278] text-white space-y-4">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative flex max-w-full max-h-full  mr-4">
            <Image alt="logo" src="/logo2.webp" width={300} height={70} />
          </div>
        </Link>
        <div className="flex flex-col gap-2">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-slate-400/50 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-slate-400/50"
                  : "text-zinc-300"
              )}
            >
              <div className="flex items-center flex-1 gap-2">
                <route.icon className={cn("h-5 w-5", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
