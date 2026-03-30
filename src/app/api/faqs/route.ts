import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function GET() {
  const faqs = await prisma.fAQ.findMany({
    where: { visible: true },
    orderBy: { sortOrder: 'asc' },
  })
  return NextResponse.json(faqs)
}

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const faq = await prisma.fAQ.create({ data: body })
  return NextResponse.json(faq, { status: 201 })
}
