import { MdShare } from 'react-icons/md'
import { CollapsibleText } from './components/CollapsibleText'
import { CopyContent } from './components/CopyContent'

export const CourseHeader = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='font-extrabold text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

      <CollapsibleText numberOfLinesWhenClosed={3}>
        Deleniti eos dicta ullam id autem dignissimos cum. Velit, suscipit enim qui omnis eveniet deleniti, et illo ex,
        illum adipisci quaerat sapiente. Deleniti eos dicta ullam id autem dignissimos cum. Velit, suscipit enim qui
        omnis eveniet deleniti, et illo ex, illum adipisci quaerat sapiente. Deleniti eos dicta ullam id autem
        dignissimos cum. Velit, suscipit enim qui omnis eveniet deleniti, et illo ex, illum adipisci quaerat sapiente.
        Deleniti eos dicta ullam id autem dignissimos cum. Velit, suscipit enim qui omnis eveniet deleniti, et illo ex,
        illum adipisci quaerat sapiente. Deleniti eos dicta ullam id autem dignissimos cum. Velit, suscipit enim qui
        omnis eveniet deleniti, et illo ex, illum adipisci quaerat sapiente. Deleniti eos dicta ullam id autem
        dignissimos cum. Velit, suscipit enim qui omnis eveniet deleniti, et illo ex, illum adipisci quaerat sapiente.
        #NEXTCourse
      </CollapsibleText>

      <div className='flex items-center flex-row gap-2'>
        <CopyContent title='Copie o link abaixo' content='Content to copy'>
          <button className='flex items-center gap-2 px-4 py-2 bg-paper rounded-full'>
            <MdShare />
            Compartilhar
          </button>
        </CopyContent>
        <span>48 aulas</span>
      </div>
    </div>
  )
}
