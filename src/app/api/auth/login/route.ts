import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyPassword, createToken } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    const user = await prisma.adminUser.findUnique({ where: { email } })
    if (!user) {
      return NextResponse.json({ error: 'פרטי התחברות שגויים' }, { status: 401 })
    }

    const valid = await verifyPassword(password, user.password)
    if (!valid) {
      return NextResponse.json({ error: 'פרטי התחברות שגויים' }, { status: 401 })
    }

    const token = await createToken({ userId: user.id, email: user.email })

    const response = NextResponse.json({ success: true, user: { name: user.name, email: user.email } })
    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json({ error: 'שגיאת שרת' }, { status: 500 })
  }
}
