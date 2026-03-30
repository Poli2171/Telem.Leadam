import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/auth'
import AdminSidebar from './AdminSidebar'

export default async function AdminShell({ children }: { children: React.ReactNode }) {
  const authed = await isAuthenticated()
  if (!authed) redirect('/admin/login')

  return (
    <div className="min-h-screen bg-gray-50 flex" dir="rtl">
      <AdminSidebar />
      <main className="flex-1 mr-64 p-8 max-lg:mr-0">
        {children}
      </main>
    </div>
  )
}
