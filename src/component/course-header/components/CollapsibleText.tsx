'use client'

import { useState } from 'react'

interface ICollapsibleTextProps {
  numberOfLinesWhenClosed: number
  children: React.ReactNode
}

export const CollapsibleText = ({ children, numberOfLinesWhenClosed }: ICollapsibleTextProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='flex flex-col items-end'>
      <p
        data-open={open}
        className='data-[open=false]:line-clamp-[var(--number-of-lines-when-closed)]'
        style={{ '--number-of-lines-when-closed': numberOfLinesWhenClosed } as any}
      >
        {children}
      </p>
      <br />
      <button
        data-open={open}
        onClick={() => setOpen(!open)}
        className='bg-paper rounded  border border-primary data-[open=false]:-mt-12'
      >
        {open ? 'Ver menos!' : 'Ver mais!'}
      </button>
    </div>
  )
}
