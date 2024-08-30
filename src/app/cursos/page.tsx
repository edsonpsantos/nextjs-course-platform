import { Section } from '@/component/section/Section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Todos os Cursos'
}

export default function PageCursos() {
  return (
    <main>
      <Section variant='grid' title='Todos os cursos' />
    </main>
  )
}
