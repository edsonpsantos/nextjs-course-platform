'use client'
import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'

import { Class } from './Class'

export interface IClassGroupProps {
  title: string
  courseId: string
  classes: {
    id: string
    title: string
  }[]
}

export const ClassGRoup = ({ courseId, title, classes }: IClassGroupProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className='flex items-center gap-6 p-4 bg-paper' onClick={() => setOpen(!open)}>
        {open ? <MdKeyboardArrowDown size={24} /> : <MdKeyboardArrowRight size={24} />}
        {title}
      </button>

      <ol data-open={open} className='flex flex-col data-[open=false]:hidden'>
        {classes.map(({ id, title }) => (
          <li key={id}>
            <Class title={title} playerUrl={`/player/${courseId}/${id}`} />
          </li>
        ))}
      </ol>
    </>
  )
}
