'use client'
import { PlayerClassGroup, PlayerHeader } from '@/component/player'

interface Props {
  params: {
    courseId: string
    classId: string
  }
}
export default function PagePlayer({ params: { courseId, classId } }: Props) {
  return (
    <main className='flex flex-col gap-20'>
      <PlayerHeader
        title='Git & Source Control (Beginner Level)'
        subTitle='🚀 How to Create and Clone a Remote Repository'
      />

      <PlayerClassGroup
        isOpen={true}
        onToogle={() => console.log('toogle')}
        title='Git & Source Control (Beginner Level)'
        position={1}
        classes={[
          { isDone: true, isPlaying: false, title: 'Learn GIT and Source Control for FREE online1' },
          { isDone: false, isPlaying: true, title: 'Learn GIT and Source Control for FREE online2' },
          { isDone: false, isPlaying: false, title: 'Learn GIT and Source Control for FREE online3' },
          { isDone: false, isPlaying: false, title: 'Learn GIT and Source Control for FREE online4' }
        ]}
      />
    </main>
  )
}
