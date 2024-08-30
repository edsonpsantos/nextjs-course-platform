import Image from 'next/image'
import Link from 'next/link'

interface ICardProps {
  href: string
  image: string
  title: string
  description: string
}

export const Card = ({ title, description, image, href }: ICardProps) => {
  return (
    <Link href={href} className='hover:no-underline'>
      <article className='flex flex-col gap-2 p-2 rounded sm:hover:bg-yellow-300 sm:hover:text-primary-contrast'>
        <Image
          className='aspect-video object-cover border-4 rounded-2xl'
          src={image}
          alt={title}
          width={1280}
          height={0}
          draggable={false}
        />

        <h4 className=' font-extrabold text-lg '>{title}</h4>
        <p className='line-clamp-3'>{description}</p>
      </article>
    </Link>
  )
}
