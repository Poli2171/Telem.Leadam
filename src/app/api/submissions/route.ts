import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'שדות חובה חסרים' }, { status: 400 })
    }

    const submission = await prisma.submission.create({
      data: { name, email, phone: phone || null, message },
    })

    return NextResponse.json(submission, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'שגיאת שרת' }, { status: 500 })
  }
}

export async function GET() {
  const session = await getSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const submissions = await prisma.submission.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(submissions)
}
