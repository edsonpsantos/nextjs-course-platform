import { Metadata } from 'next'

import { CourseHeader } from '@/component/course-header/CourseHeader'
import { StartCourse } from '@/component/StartCourse'

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
      <div className='flex flex-col gap-4 w-full min-[880px]:max-w-[880px] px-2'>
        <StartCourse idClass='1' idCourse='1' imageUrl='https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg' />
        <CourseHeader />
      </div>
    </main>
  )
}
