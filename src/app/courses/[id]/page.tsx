import { Metadata } from 'next'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props) {
  //Ir a API do YOUTUBE e pegar os dados do curso
  return {
    title: params.id,
    description: params.id
  }
}

export default function PageCourseDetails({ params }: Props) {
  return (
    <main className='mt-8 flex justify-center'>
      <h1>Detalhe de Curso - {params.id}</h1>
    </main>
  )
}
