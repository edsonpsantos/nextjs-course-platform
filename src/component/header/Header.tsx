'use client'
import { MdOutlineOpenInNew } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Header = () => {
  const currentPath = usePathname()

  return (
    <nav className='flex items-center justify-center bg-primary py-2'>
      <ul className='flex gap-4 items-center'>
        <li className='my-2'>
          <Link className='border-2 border-background rounded-md py-2 px-2 font-bold' href={'/'}>
            NextCourse Academy
          </Link>
        </li>
        <li>
          <Link data-active={currentPath === '/'} className={'data-[active=true]:underline'} href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link data-active={currentPath === '/cursos'} className={'data-[active=true]:underline'} href={'/cursos'}>
            Cursos
          </Link>
        </li>
        <li>
          <Link className='flex items-center justify-center gap-1' href='https://medium.com/@epdsant' target='_blank'>
            Blog
            <MdOutlineOpenInNew />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
