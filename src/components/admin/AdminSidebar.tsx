'use client'

import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import {
  LayoutDashboard,
  FileText,
  Users,
  HelpCircle,
  MessageSquare,
  Settings,
  Image as ImageIcon,
  LogOut,
  Megaphone,
  Target,
  Heart,
  Footprints,
  Layers,
  AlertTriangle,
  Lightbulb,
  UserCheck,
  Handshake,
} from 'lucide-react'

const navItems = [
  { label: 'סקירה כללית', href: '/admin', icon: LayoutDashboard },
  { label: 'הגדרות אתר', href: '/admin/settings', icon: Settings },
  { label: 'Hero', href: '/admin/sections/hero', icon: Megaphone },
  { label: 'אודות', href: '/admin/sections/about', icon: FileText },
  { label: 'הבעיה', href: '/admin/sections/problem', icon: AlertTriangle },
  { label: 'הגישה שלנו', href: '/admin/sections/solution', icon: Lightbulb },
  { label: 'עמודי תווך', href: '/admin/sections/pillars', icon: Layers },
  { label: 'פעילויות', href: '/admin/sections/activities', icon: Heart },
  { label: 'התהליך', href: '/admin/sections/process', icon: Footprints },
  { label: 'קהלי יעד', href: '/admin/sections/audiences', icon: UserCheck },
  { label: 'השפעה', href: '/admin/sections/impact', icon: Target },
  { label: 'צוות', href: '/admin/team', icon: Users },
  { label: 'שותפויות', href: '/admin/sections/partners', icon: Handshake },
  { label: 'שאלות נפוצות', href: '/admin/faqs', icon: HelpCircle },
  { label: 'פניות', href: '/admin/submissions', icon: MessageSquare },
  { label: 'מדיה', href: '/admin/media', icon: ImageIcon },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <aside className="fixed right-0 top-0 bottom-0 w-64 bg-white border-l border-gray-200 flex flex-col z-40">
      {/* Logo */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.jpeg" alt="תלם לאדם" width={40} height={40} className="rounded-xl" />
          <div>
            <div className="font-bold text-secondary-dark text-sm">תלם לאדם</div>
            <div className="text-xs text-gray-400">לוח ניהול</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm mb-0.5 transition-all ${
                isActive
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="w-4.5 h-4.5 flex-shrink-0" />
              {item.label}
            </a>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-gray-100">
        <a
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500 hover:bg-gray-50 mb-1"
        >
          צפייה באתר
        </a>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-red-500 hover:bg-red-50 w-full"
        >
          <LogOut className="w-4 h-4" />
          התנתקות
        </button>
      </div>
    </aside>
  )
}
