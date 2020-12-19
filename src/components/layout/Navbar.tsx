import { FC } from 'react'
import Link from 'next/link'
import Head from 'next/head'

interface NavProps {
    title?: string
    description?: string
}

const Navbar: FC<NavProps> = ({ title, description }) => (
    <header className='max-w-5xl mx-auto py-12 px-6 flex flex-row items-center justify-between'>
        <Head>
            <title>
                DataFreaks {title ? '-' : ''} {title}
            </title>
            <meta
                name='description'
                content={
                    description ||
                    'Get a weely digest of your favourite apps data in your mailbox.'
                }
            />
            <link rel='icon' href='/img/logo.png' />
        </Head>
        <div className='flex flex-row items-center space-x-3'>
            <img src='/img/logo.svg' className='h-6' />
            <Link href='/'>
                <a>
                    <h1 className='font-nunito font-black text-gray-700 text-xl'>
                        DataFreaks
                    </h1>
                </a>
            </Link>
        </div>
    </header>
)

export default Navbar
