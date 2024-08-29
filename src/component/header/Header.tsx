'use client'
import { useEffect, useState } from 'react'
import { MdMenu, MdOutlineOpenInNew } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Header = () => {
  const [title, setTitle] = useState('Home')
  const [drawer, setDrawer] = useState(false)
  const currentPath = usePathname()

  useEffect(() => {
    setTitle(document.title)
    setDrawer(false)
  }, [currentPath])

  return (
    <nav className='flex items-center justify-start gap-4 md:justify-center bg-primary text-textHeader py-2 sm:py-4 px-6'>
      <button className='sm:hidden' onClick={() => setDrawer(true)}>
        <MdMenu size={24} />
      </button>
      <ul className='flex gap-4 items-center' tabIndex={drawer ? -1 : undefined}>
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

      <div
        data-open={drawer}
        onClick={() => setDrawer(false)}
        tabIndex={drawer ? undefined : -1}
        className='bg-gradient-to-r from-background fixed top-0 left-0 right-0 bottom-0 transition-transform data-[open=false]:-translate-x-full'
      >
        <ul
          className='flex flex-col gap-4 p-4 w-60 h-full bg-background text-text'
          onClick={(e) => e.stopPropagation()}
        >
          <li className=''>
            <Link href='/' data-active={currentPath === '/'} className={'data-[active=true]:underline'}>
              Home
            </Link>
          </li>
          <li className=''>
            <Link href='/cursos' data-active={currentPath === '/cursos'} className={'data-[active=true]:underline'}>
              Cursos
            </Link>
          </li>
          <li className=''>
            <Link href='https://medium.com/@epdsant' target='_blank' className='flex gap-1 items-center'>
              Blog
              <MdOutlineOpenInNew />
            </Link>
          </li>
        </ul>
      </div>

      <h1 className='sm:hidden'>{title}</h1>
    </nav>
  )
}
