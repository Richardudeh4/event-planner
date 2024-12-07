import { cn } from '@/lib/utils';
import { Settings, Users, UsersIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import {GoCheck, GoCheckCircle, GoCheckCircleFill, GoHome, GoHomeFill} from "react-icons/go";
const route = [
    {
        label: "Home",
        href:"/",
        icon:GoHome,
        activeIcon: GoHomeFill,
    },
    {
        label: "My Tasks",
        href:"/tasks",
        icon:GoCheckCircle,
        activeIcon: GoCheckCircleFill,
    },
    {
        label: "Settings",
        href:"/settings",
        icon:Settings,
        activeIcon: Settings,
    },
    {
        label: "Members",
        href:"/members",
        icon:UsersIcon,
        activeIcon: UsersIcon,
    },
]
const Navigation = () => {
  return (
    <ul className='flex flex-col'>
      {route.map((item,i) => {
        const isActive=false;
        const Icon = isActive ? item.activeIcon : item.icon;
        return(
        <Link key={item.href} href={item.href}>
            <div className={cn("flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
            )}>
            <Icon className='size-5 text-neutral-500'/>
            {item.label}
            </div>
        </Link>
        )
      })}
    </ul>
  )
}

export default Navigation