import Head from 'next/head'
import { ReactNode } from 'react'
import { Favicon } from 'components'

interface LayoutProps {
  head?: any;
  title: string;
  children: ReactNode
}

export const Layout = ({ head, title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='My app description' />
        <meta name='viewport' content='width-device-width, initial-scale=1' />
        {head}
        <Favicon />
      </Head>
      {children}
    </>
  )
}
