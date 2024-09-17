import { Metadata } from 'next'

import { CourseContent } from '@/component/course-content/CourseContent'
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
      <div className='flex flex-col md:flex-row-reverse lg:px-0 px-2 gap-4 w-full min-[880px]:max-w-[880px]'>
        <div className='flex-1'>
          <StartCourse
            idClass='1'
            idCourse='1'
            title='👨🏽‍💻 Lorem ipsum dolor sit amet consectetur'
            imageUrl='https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg'
          />
        </div>
        <div className='flex flex-[2] flex-col gap-12'>
          <CourseHeader />
          <CourseContent
            classGroups={[
              {
                courseId: ' 123',
                title: 'Lorem ipsum dolor sit amet consectetur',
                classes: [
                  {
                    id: '234',
                    title: 'Lorem ipsum dolor sit amet consectetur'
                  },
                  {
                    id: '456',
                    title: 'Lorem ipsum dolor sit amet consectetur'
                  }
                ]
              },
              {
                courseId: ' 123',
                title: 'XPTO Lorem ipsum dolor sit amet consectetur',
                classes: [
                  {
                    id: '789',
                    title: 'XPTO Lorem ipsum dolor sit amet consectetur'
                  },
                  {
                    id: '987',
                    title: 'XPTOLorem ipsum dolor sit amet consectetur'
                  },
                  {
                    id: '654',
                    title: 'XPTOLorem ipsum dolor sit amet consectetur'
                  }
                ]
              }
            ]}
          />
        </div>
      </div>
    </main>
  )
}
