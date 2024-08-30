import { Section } from '@/component/section/Section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

export default function PageHome() {
  return (
    <main>
      <Section variant='h-list' title='Veja mais cursos' />
    </main>
  )
}
