import { Card } from '@/component/card/Card'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Home'
}

export default function PageHome() {
  return (
    <main>
      <Card />
    </main>
  )
}
