import { Card } from '@/component/card/Card'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Home'
}

export default function PageHome() {
  return (
    <main>
      <Card image='https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg' title='' description='' href='/cursos/123' />
    </main>
  )
}
