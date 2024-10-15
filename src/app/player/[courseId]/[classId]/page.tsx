interface Props {
  params: {
    courseId: string
    classId: string
  }
}
export default function PagePlayer({ params: { courseId, classId } }: Props) {
  return (
    <>
      Player /{courseId}/{classId}
    </>
  )
}
