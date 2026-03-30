import AdminSidebar from '@/components/admin/AdminSidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      <main className="flex-1 mr-64 p-8">{children}</main>
    </div>
  )
}
