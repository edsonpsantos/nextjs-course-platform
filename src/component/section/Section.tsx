'use client'
import { UIEvent, useRef, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Card, ICardProps } from '../card/Card'

interface ISectionProps {
  title: string
  items: ICardProps[]
  variant: 'grid' | 'h-list'
}

export const Section = ({ title, variant, items }: ISectionProps) => {
  const scrollRef = useRef<HTMLUListElement>(null)
  const [scrollAt, setScrollAt] = useState<'start' | 'middle' | 'end'>('start')

  const handleSetScroll = (scroll: number) => {
    const currentScrollLeft = scrollRef.current?.scrollLeft || 0
    scrollRef.current?.scrollTo({ behavior: 'smooth', left: currentScrollLeft + scroll })
  }

  const handleScroll = (event: UIEvent<HTMLUListElement>) => {
    if (event.currentTarget.scrollLeft === 0) {
      setScrollAt('start')
    } else if (event.currentTarget.scrollWidth - event.currentTarget.clientWidth === event.currentTarget.scrollLeft) {
      setScrollAt('end')
    } else {
      setScrollAt('middle')
    }
  }

  return (
    <section className='flex flex-col gap-4 px-4 py-2'>
      <h2 className=' text-xl font-bold'>{title}</h2>

      <ul
        ref={scrollRef}
        onScroll={handleScroll}
        className='grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=grid]:lg:grid-cols-4 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto gap-2'
        data-variant={variant}
      >
        {variant === 'h-list' && (
          <button
            disabled={scrollAt === 'start'}
            className='buttonSlide left-0'
            onClick={() => handleSetScroll(-350)}
          >
            <MdKeyboardArrowLeft size={38} />
          </button>
        )}

        {items &&
          items.map((item) => (
            <li key={item.title} data-variant={variant} className='w-full data-[variant=h-list]:sm:w-72'>
              <Card href={item.href} image={item.image} title={item.title} description={item.description} />
            </li>
          ))}
        {variant === 'h-list' && (
          <button
            disabled={scrollAt === 'end'}
            className='buttonSlide right-0'
            onClick={() => handleSetScroll(350)}
          >
            <MdKeyboardArrowRight size={38} />
          </button>
        )}
      </ul>
    </section>
  )
}
