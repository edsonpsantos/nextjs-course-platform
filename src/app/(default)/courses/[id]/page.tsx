import { Metadata } from 'next'

import { CourseContent } from '@/component/course-content/CourseContent'
import { CourseHeader } from '@/component/course-header/CourseHeader'
import { StartCourse } from '@/component/StartCourse'
import { time } from 'console'
import { title } from 'process'

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
        
        <div className='flex flex-[2] flex-col gap-12 pb-12'>
          <CourseHeader
            title='👨🏽‍💻 Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            description='Deleniti eos dicta ullam id autem dignissimos cum. Velit, suscipit enim qui omnis eveniet deleniti, et illo ex,
        illum adipisci quaerat sapiente. Deleniti eos dicta ullam id autem dignissimos cum. Velit, suscipit enim qui
        omnis eveniet deleniti, et illo ex, illum adipisci quaerat sapiente. Deleniti eos dicta ullam id autem
        dignissimos cum. Velit, suscipit enim qui omnis eveniet deleniti, et illo ex, illum adipisci quaerat sapiente.
        Deleniti eos dicta ullam id autem dignissimos cum. Velit, suscipit enim qui omnis eveniet deleniti, et illo ex,
        illum adipisci quaerat sapiente. Deleniti eos dicta ullam id autem dignissimos cum. Velit, suscipit enim qui
        omnis eveniet deleniti, et illo ex, illum adipisci quaerat sapiente. Deleniti eos dicta ullam id autem
        dignissimos cum. Velit, suscipit enim qui omnis eveniet deleniti, et illo ex, illum adipisci quaerat sapiente.
        #NEXTCourse'
            numberOfClasses={48}
          />
          <CourseContent
            classGroups={[
              {
                courseId: ' 123',
                title: 'Learn GIT and Source Control for FREE online',
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
                title: 'How to set up Github, Xcode Source Control',
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
