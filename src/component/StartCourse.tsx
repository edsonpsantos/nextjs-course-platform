import Link from 'next/link'
import { MdPlayCircleOutline } from 'react-icons/md'

interface IStartCourseProps {
  idCourse: string
  idClass: string
  imageUrl: string
}

export const StartCourse = ({ idClass, idCourse, imageUrl }: IStartCourseProps) => {
  return (
    <div className='flex flex-col p-3 bg-paper rounded-md gap-4'>
      <Link
        className='w-full bg-cover bg-no-repeat aspect-video bg-center rounded'
        style={{ backgroundImage: `url(${imageUrl})` }}
        href={`/player/${idCourse}/${idClass}`}
      >
        <div className='flex items-center justify-center w-full h-full bg-background rounded opacity-0 hover:opacity-70 transition-opacity'>
          <MdPlayCircleOutline size={58} />
        </div>
      </Link>

      <Link className='bg-primary p-2 px-3 rounded text-center' href={`/player/${idCourse}/${idClass}`}>
        Começar curso
      </Link>
    </div>
  )
}
