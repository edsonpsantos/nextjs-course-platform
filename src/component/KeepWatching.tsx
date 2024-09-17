import Link from 'next/link'
import { MdPlayCircle } from 'react-icons/md'

export const KeepWatching = () => {
  return (
    <Link href={`/player/{courserId}/{classId}`} className='flex gap-2 p-4 mx-4 bg-primary rounded-2xl hover:no-underline'>
      <div className='flex flex-col flex-1 gap-2'>
        <h1 className='font-bold text-background line-clamp-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className='text-background line-clamp-1'>👨🏽‍💻 Lorem ipsum dolor sit</p>
      </div>

      <div className='flex flex-row gap-2 items-center justify-center'>
        <span className='text-background md:block hidden'>Continuar Assistindo</span>
        <MdPlayCircle size={28} color='black' />
      </div>
    </Link>
  )
}
