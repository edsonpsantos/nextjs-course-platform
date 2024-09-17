'use client'

import Link from 'next/link'
import { MdPlayCircleOutline } from 'react-icons/md'
import { useInView } from 'react-intersection-observer'

interface IStartCourseProps {
  idCourse: string
  idClass: string
  title: string
  imageUrl: string
}

export const StartCourse = ({ idClass, idCourse, imageUrl, title }: IStartCourseProps) => {
  const [ref, inView] = useInView({ threshold: 0.2, initialInView: true })

  return (
    <>
      <div ref={ref} className='flex flex-col p-3 bg-paper rounded-md gap-4 md:sticky md:top-[96px]'>
        <Link
          className='w-full bg-cover bg-no-repeat aspect-video bg-center rounded'
          style={{ backgroundImage: `url(${imageUrl})` }}
          href={`/player/${idCourse}/${idClass}`}
        >
          <div className='flex items-center justify-center w-full h-full bg-background rounded opacity-0 hover:opacity-70 transition-opacity'>
            <MdPlayCircleOutline size={58} />
          </div>
        </Link>
        <Link
          className='bg-primary p-2 px-3 rounded text-center text-background hover:no-underline'
          href={`/player/${idCourse}/${idClass}`}
        >
          Começar curso
        </Link>
      </div>

      {!inView && (
        <div className='flex flex-col gap-4 bg-paper p-3 px-2 absolute left-0 right-0 top-14 transition-opacity'>
          <h1 className='font-extrabold text-xl'>{title}</h1>
          <Link
            className='bg-primary p-2 px-3 rounded text-center text-background hover:no-underline'
            href={`/player/${idCourse}/${idClass}`}
          >
            Começar curso
          </Link>
        </div>
      )}
    </>
  )
}
