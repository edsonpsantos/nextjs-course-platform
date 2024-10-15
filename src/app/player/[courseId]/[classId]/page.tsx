import { PlayerHeader } from '@/component/player'

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
      Player {courseId}/{classId}
    </>
  )
}
