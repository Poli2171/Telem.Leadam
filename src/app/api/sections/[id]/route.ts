import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const section = await prisma.section.findUnique({ where: { id } })

  if (!section) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json({
    ...section,
    content: JSON.parse(section.content),
  })
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const body = await req.json()

  const section = await prisma.section.update({
    where: { id },
    data: {
      content: JSON.stringify(body.content),
      visible: body.visible,
    },
  })

  return NextResponse.json({
    ...section,
    content: JSON.parse(section.content),
  })
}
