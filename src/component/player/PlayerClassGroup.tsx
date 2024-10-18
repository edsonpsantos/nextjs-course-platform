import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'
import { PlayerClass, IPlayerClassProps } from './PlayerClass'

interface IPlayerClassGroupProps {
  title: string
  position: number
  isOpen: boolean
  classes: Omit<IPlayerClassProps, 'onPlay' | 'onCheck'>[]
  onToogle: () => void
}

export const PlayerClassGroup = ({ classes, position, title, isOpen, onToogle }: IPlayerClassGroupProps) => {
  return (
    <div className='flex flex-col'>
      <button className='flex gap-2 p-4 bg-paper items-center' onClick={onToogle}>
        <div className='flex items-center justify-center rounded-full bg-background w-12 h-12'>{position}</div>

        <div className='flex flex-col flex-1 items-start'>
          <span className='text-base font-bold text-start line-clamp-1'>{title}</span>
          <span className='text-sm font-light text-start line-clamp-1'>
            {classes.filter((classItem) => classItem.isDone).length}/{classes.length} aulas
          </span>
        </div>

        {isOpen ? <MdKeyboardArrowDown size={28} /> : <MdKeyboardArrowRight size={28} />}
      </button>

      <ol data-open={isOpen} className='flex flex-col data-[open=false]:hidden'>
        {classes.map((classItem) => (
          <li key={classItem.title}>
            <PlayerClass {...classItem} onCheck={() => console.log('check')} onPlay={() => console.log('play')} />
          </li>
        ))}
      </ol>
    </div>
  )
}
