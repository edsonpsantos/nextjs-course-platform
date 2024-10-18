'use client'
import { MdCheckCircle, MdCircle, MdPlayCircleOutline } from 'react-icons/md'

export interface IPlayerClassProps {
  title: string
  isPlaying: boolean
  isDone: boolean
  onPlay: () => void
  onCheck: () => void
}

export const PlayerClass = ({ title, isPlaying, isDone, onPlay, onCheck }: IPlayerClassProps) => {
  return (
    <button className='flex gap-6 p-4 items-center hover:opacity-100' onClick={() => onPlay()}>
      {!isDone && (
        <div
          className='group'
          onClick={(e) => {
            e.stopPropagation()
            onCheck()
          }}
        >
          <MdPlayCircleOutline className='min-w-6 group-hover:hidden' size={24} />
          <MdCircle className='min-w-6 hidden group-hover:block' size={24} />
        </div>
      )}
      {isDone && <MdCheckCircle className='min-w-6 text-green-400' size={24} />}

      <div className='flex flex-col gap-1 items-start'>
        <p data-done={isDone} className='line-clamp-2 text-start data-[done=true]:text-green-400'>
          {title}
        </p>

        {isPlaying && <span className='px-2 py-1 bg-blue-500 rounded-full leading-4'>Reproduzindo</span>}
      </div>
    </button>
  )
}
