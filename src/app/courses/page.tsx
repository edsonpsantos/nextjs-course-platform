import { Section } from '@/component/section/Section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Todos os Cursos'
}

export default function PageCourses() {
  return (
    <main className='mt-8 flex justify-center'>
      <div className='w-full min-[880px]:max-w-[880px]'>
      <Section
          variant='grid'
          title='Todos os cursos'
          items={[
            {
              href: '/courses/123',
              image: 'https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg',
              title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            },
            {
              href: '/courses/123',
              image: 'https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg',
              title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            },
            {
              href: '/courses/123',
              image: 'https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg',
              title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            },
            {
              href: '/courses/123',
              image: 'https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg',
              title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            }
          ]}
        />
      </div>
    </main>
  )
}
