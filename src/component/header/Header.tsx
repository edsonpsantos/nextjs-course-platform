'use client'
import { MdMenu, MdOutlineOpenInNew } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Header = () => {
  const currentPath = usePathname()

  return (
    <nav className='flex items-center justify-start gap-4 md:justify-center bg-primary text-textHeader py-2 sm:py-4 px-6'>
      <button>
        <MdMenu size={24} className='sm:hidden' />
      </button>
      <ul className='flex gap-4 items-center'>
        <li className='my-2'>
          <Link href='/' className='border-2 border-background font-bold rounded-md py-2 px-1'>
            NEXTCourse
          </Link>
        </li>
        <li className='hidden sm:block'>
          <Link href='/' data-active={currentPath === '/'} className={'data-[active=true]:underline'}>
            Home
          </Link>
        </li>
        <li className='hidden sm:block'>
          <Link href='/cursos' data-active={currentPath === '/cursos'} className={'data-[active=true]:underline'}>
            Cursos
          </Link>
        </li>
        <li className='hidden sm:block'>
          <Link href='https://medium.com/@epdsant' target='_blank' className='flex items-center gap-1'>
            Blog
            <MdOutlineOpenInNew />
          </Link>
        </li>
      </ul>
      {/* <h1 className='sm:hidden'>Home</h1> */}
    </nav>
  )
}
