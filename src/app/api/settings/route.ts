import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function GET() {
  const settings = await prisma.siteSettings.findUnique({ where: { id: 'main' } })
  return NextResponse.json(settings)
}

export async function PUT(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()

  const settings = await prisma.siteSettings.upsert({
    where: { id: 'main' },
    update: body,
    create: { id: 'main', ...body },
  })

  return NextResponse.json(settings)
}
