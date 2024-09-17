'use client'

import { MdShare } from 'react-icons/md'
import { CollapsibleText } from './components/CollapsibleText'
import { CopyContent } from './components/CopyContent'

interface ICourseHeaderProps {
  title: string
  description: string
  numberOfClasses: number
}

export const CourseHeader = ({ title, description, numberOfClasses }: ICourseHeaderProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='font-extrabold text-xl'>{title}</h1>

      <CollapsibleText numberOfLinesWhenClosed={3}>{description}</CollapsibleText>

      <div className='flex items-center flex-row gap-2'>
        <CopyContent title='Copie o link abaixo' content={window.location.href}>
          <button className='flex items-center gap-2 px-4 py-2 bg-paper rounded-full'>
            <MdShare />
            Compartilhar
          </button>
        </CopyContent>
        <span>{numberOfClasses} aulas</span>
      </div>
    </div>
  )
}
