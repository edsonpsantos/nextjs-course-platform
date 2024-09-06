import { Section } from '@/component/section/Section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

export default function PageHome() {
  return (
    <main className='mt-8 flex justify-center'>
      <div className='min-[880px]:max-w-[880px] max-w-full'>
        <Section
          variant='h-list'
          title='Veja mais cursos'
          items={[
            {
              href: '/cursos/123',
              image: 'https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg',
              title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            },
            {
              href: '/cursos/123',
              image: 'https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg',
              title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            },
            {
              href: '/cursos/123',
              image: 'https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg',
              title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            },
            {
              href: '/cursos/123',
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
