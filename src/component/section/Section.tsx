import { Card } from '../card/Card'

interface ISectionProps {
  title: string
  variant: 'grid' | 'h-list'
}

export const Section = ({ title, variant }: ISectionProps) => {
  return (
    <section className='flex flex-col gap-4 px-4 py-2'>
      <h2 className=' text-xl font-bold'>{title}</h2>

      <ul
        className='grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=grid]:lg:grid-cols-4 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto gap-2'
        data-variant={variant}
      >
        <li data-variant={variant} className='w-full data-[variant=h-list]:sm:w-72'>
          <Card
            image='https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg'
            title='Lorem ipsum dolor sit amet consectetur adipisicing elit'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            href='/cursos/123'
          />
        </li>
        <li data-variant={variant} className='w-full data-[variant=h-list]:sm:w-72'>
          <Card
            image='https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg'
            title='Lorem ipsum dolor sit amet consectetur adipisicing elit'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            href='/cursos/123'
          />
        </li>
        <li data-variant={variant} className='w-full data-[variant=h-list]:sm:w-72'>
          <Card
            image='https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg'
            title='Lorem ipsum dolor sit amet consectetur adipisicing elit'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            href='/cursos/123'
          />
        </li>
        <li data-variant={variant} className='w-full data-[variant=h-list]:sm:w-72'>
          <Card
            image='https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg'
            title='Lorem ipsum dolor sit amet consectetur adipisicing elit'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            href='/cursos/123'
          />
        </li>
      </ul>
    </section>
  )
}
