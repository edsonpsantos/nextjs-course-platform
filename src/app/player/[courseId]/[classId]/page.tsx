'use client'
import { PlayerClass, PlayerHeader } from '@/component/player'

interface Props {
  params: {
    courseId: string
    classId: string
  }
}
export default function PagePlayer({ params: { courseId, classId } }: Props) {
  return (
    <>
      <PlayerHeader
        title='Git & Source Control (Beginner Level)'
        subTitle='🚀 How to Create and Clone a Remote Repository'
      />

      <PlayerClass
        title='Learn GIT and Source Control for FREE online'
        isPlaying={false}
        isDone={false}
        onCheck={() => console.log('check')}
        onPlay={() => console.log('play')}
      />
    </>
  )
}
