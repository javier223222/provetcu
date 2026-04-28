import { NextRequest, NextResponse } from 'next/server'
import { askDeepSeek } from './controller'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()
    const completion = await askDeepSeek(message)

    return NextResponse.json({ reply: completion.choices[0].message.content })
  } catch (error) {
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ mensaje: '¡Hola desde la API!' })
}