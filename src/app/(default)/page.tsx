import { Metadata } from 'next'

import { KeepWatching } from '@/component/KeepWatching'
import { Section } from '@/component/section/Section'

export const metadata: Metadata = {
  title: 'Home'
}

export default function PageHome() {
  return (
    <main className='mt-8 flex justify-center'>
      <div className='min-[880px]:max-w-[880px] w-full flex flex-col gap-4'>
        <KeepWatching />

        <Section
          variant='h-list'
          title='Veja mais cursos'
          items={[
            {
              href: '/courses/123',
              image: 'https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg',
              title: '📱 Git & Source Control',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            },
            {
              href: '/courses/123',
              image: 'https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg',
              title: '👨🏽‍💻 2 Lorem ipsum dolor sit amet consectetur adipisicing elit',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            },
            {
              href: '/courses/123',
              image: 'https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg',
              title: '⚛️ 3 Lorem ipsum dolor sit amet consectetur adipisicing elit',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            },
            {
              href: '/courses/123',
              image: 'https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg',
              title: '🔥 4 Lorem ipsum dolor sit amet consectetur adipisicing elit',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            }
          ]}
        />
      </div>
    </main>
  )
}
