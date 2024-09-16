'use client'
import { useEffect, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { MdCheckBox, MdContentCopy } from 'react-icons/md'

interface ICopyContextProps {
  title: string
  content: string
  children: React.ReactNode
}

export const CopyContent = ({ title, content, children }: ICopyContextProps) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000)
    }
  }, [copied])
  
  const habndleCopy = () => {
    window.navigator.clipboard.writeText(content)
    setCopied(true)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='flex flex-col gap-2 p-2 bg-paper border border-primary rounded-lg'>
          <span>{title}</span>
          <div className='flex items-center gap-1'>
            <input
              className='bg-background p-1 px-2 rounded'
              readOnly
              autoFocus
              onFocus={(e) => e.target.select()}
              value={content}
            />

            <button className='p-2' onClick={habndleCopy}>
              {copied ? <MdCheckBox className='text-primary' /> : <MdContentCopy />}
            </button>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
