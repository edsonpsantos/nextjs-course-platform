export const CourseHeader = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='font-extrabold text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

      <p>
        Deleniti eos dicta ullam id autem dignissimos cum. Velit, suscipit enim qui omnis eveniet deleniti, et illo ex,
        illum adipisci quaerat sapiente. #NEXTCourse
      </p>

      <div className='flex flex-row gap-2 items-center'>
        <button className='py-2 px-4 bg-paper rounded-full'>Compartilhar</button>
        <span>48 aulas</span>
      </div>
    </div>
  )
}
