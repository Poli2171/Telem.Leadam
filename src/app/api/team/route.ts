import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function GET() {
  const members = await prisma.teamMember.findMany({
    where: { visible: true },
    orderBy: { sortOrder: 'asc' },
  })
  return NextResponse.json(members)
}

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const member = await prisma.teamMember.create({ data: body })
  return NextResponse.json(member, { status: 201 })
}
