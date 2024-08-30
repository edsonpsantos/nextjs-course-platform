import Image from 'next/image'
import Link from 'next/link'

export const Card = () => {
  return (
    <Link href={'/cursos/1'} className='hover:no-underline'>
      <article className='flex flex-col gap-2 p-2 rounded sm:hover:opacity-70'>
        <Image
          className='aspect-video object-cover border-4 rounded-2xl'
          src={'https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg'}
          alt={'Git & Source Control (Beginner Level)'}
          width={1280}
          height={0}
          draggable={false}
        />

        <h4 className=' font-extrabold text-lg '>Git & Source Control (Beginner Level)</h4>
        <p className='line-clamp-3'>
          Master GIT and source control with our free online tutorial. This video is designed for beginners and
          professionals alike, offering a comprehensive guide to understanding and utilizing GIT for version control.
          Learn the essentials of GIT, from basic commands to advanced features, and enhance your software development
          practices. Start your journey to becoming proficient in source control management today.
        </p>
      </article>
    </Link>
  )
}
