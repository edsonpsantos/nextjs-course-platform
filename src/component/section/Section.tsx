'use client'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Card, ICardProps } from '../card/Card'
import { useRef } from 'react'

interface ISectionProps {
  title: string
  items: ICardProps[]
  variant: 'grid' | 'h-list'
}

export const Section = ({ title, variant, items }: ISectionProps) => {
  const scrollRef = useRef<HTMLUListElement>(null)

  const handleScroll = (scroll: number) => {
    const currentScrollLeft = scrollRef.current?.scrollLeft || 0
    scrollRef.current?.scrollTo({ behavior: 'smooth', left: currentScrollLeft + scroll })
  }

  return (
    <section className='flex flex-col gap-4 px-4 py-2'>
      <h2 className=' text-xl font-bold'>{title}</h2>

      <ul
        ref={scrollRef}
        className='grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=grid]:lg:grid-cols-4 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto gap-2'
        data-variant={variant}
      >
        <button className='buttonSlide left-0' onClick={() => handleScroll(-350)}>
          <MdKeyboardArrowLeft size={38} />
        </button>

        {items &&
          items.map((item) => (
            <li key={item.title} data-variant={variant} className='w-full data-[variant=h-list]:sm:w-72'>
              <Card href={item.href} image={item.image} title={item.title} description={item.description} />
            </li>
          ))}

        <button className='buttonSlide right-0' onClick={() => handleScroll(350)}>
          <MdKeyboardArrowRight size={38} />
        </button>
      </ul>
    </section>
  )
}
