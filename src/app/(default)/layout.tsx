
import { Header } from '@/component/header/Header'

interface ILayout extends Readonly<{ children: React.ReactNode }> {}

export default function RootLayout({ children }: ILayout) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
