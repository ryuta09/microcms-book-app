import Sheet from '../_components/Sheet'
import styles from './page.module.css'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({children}: Props) {
  return(
    <>
      <Sheet>{children}</Sheet>
    </>
  )
}