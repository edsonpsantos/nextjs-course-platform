import { Metadata } from 'next'

import { CourseHeader } from '@/component/course-header/CourseHeader'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  //Go to YOUTUBE API and get course informations
  return {
    title: params.id,
    description: params.id
  }
}

export default function PageCourseDetails({ params }: Props) {
  return (
    <main className='mt-8 flex justify-center'>
      <div className='w-full min-[880px]:max-w-[880px]'>
        <CourseHeader />
      </div>
    </main>
  )
}
