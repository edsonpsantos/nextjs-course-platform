import { Card } from '../card/Card'

export const Section = () => {
  return (
    <section className='flex flex-col gap-4 px-4 py-2'>
      <h2 className=' text-xl font-bold'>Veja mais cursos</h2>
      <ul className='flex flex-col gap-2'>
        <li>
          <Card
            image='https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg'
            title='Lorem ipsum dolor sit amet consectetur adipisicing elit'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            href='/cursos/123'
          />
        </li>
        <li>
          <Card
            image='https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg'
            title='Lorem ipsum dolor sit amet consectetur adipisicing elit'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            href='/cursos/123'
          />
        </li>
        <li>
          <Card
            image='https://i.ytimg.com/vi/_H8_IU1G8G0/hqdefault.jpg'
            title='Lorem ipsum dolor sit amet consectetur adipisicing elit'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quibusdam ut quam dolorem unde velit deleniti! Assumenda, ducimus voluptatibus, impedit fugit id recusandae qui minima tempora maxime ab expedita?'
            href='/cursos/123'
          />
        </li>
        <li>
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
