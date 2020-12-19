import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'

const Navbar: FC = () => (
    <header className='max-w-5xl mx-auto py-12'>
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

const Footer: FC = () => (
    <footer className='max-w-3xl mx-auto border-t border-gray-100 p-8 font-nunito text-gray-500 text-center'>
        <div className='flex flex-row space-x-12 mx-auto w-max'>
            <ul className='space-y-2'>
                <li>
                    <Link href='/signup'>
                        <a className='hover:underline'>Signup</a>
                    </Link>
                </li>
                <li>
                    <Link href='/login'>
                        <a className='hover:underline'>Login</a>
                    </Link>
                </li>
            </ul>
            <ul className='space-y-2'>
                <li>
                    <a
                        href='mailto:aitsidihammou.achraf@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:underline'
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>

        <div className='w-1/2 mx-auto my-6'>
            <small>
                © 2020 DataFreaks - ⚡ by{' '}
                <a
                    href='https://twitter.com/achrafnotashraf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-blue-500 rounded p-1 text-gray-50'
                >
                    @achrafnotashraf
                </a>
            </small>
        </div>
    </footer>
)

const EmailExample: FC = () => (
    <div className='shadow-lg rounded-lg max-w-sm mx-auto font-nunito border border-gray-100'>
        <div className='flex flex-col p-6'>
            <header className=''>
                <img src='img/gmail.png' className='w-6' />
                <hr className='m-6' />
            </header>
            <div className='p-4'>
                <div className='bg-gray-200 py-4 px-10'>
                    <div className='flex flex-row items-center space-x-2 mb-4'>
                        <img src='/img/logo.svg' className='w-4' />
                        <p className='text-sm font-bold text-gray-700'>
                            DataFreaks
                        </p>
                    </div>
                    <div className='flex flex-row items-stretch'>
                        <div className='w-full bg-white p-4 flex flex-col space-y-2'>
                            <div className='rounded-full bg-gray-500 w-full h-1' />
                            <div className='rounded-full bg-gray-500 w-full h-1' />
                            <div className='rounded-full bg-gray-500 w-full h-1' />
                        </div>
                        <div className='w-full bg-blue-700 p-4 flex flex-row items-end space-x-2'>
                            <div className='bg-gray-50 w-1 h-4' />
                            <div className='bg-gray-50 w-1 h-5' />
                            <div className='bg-gray-50 w-1 h-6' />
                            <div className='bg-gray-50 w-1 h-1' />
                            <div className='bg-gray-50 w-1 h-6' />
                            <div className='bg-gray-50 w-1 h-3' />
                            <div className='bg-gray-50 w-1 h-5' />
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch my-3'>
                        <div className='w-full bg-white p-4 flex flex-col space-y-2'>
                            <div className='rounded-full bg-gray-500 w-full h-1' />
                            <div className='rounded-full bg-gray-500 w-full h-1' />
                            <div className='rounded-full bg-gray-500 w-full h-1' />
                        </div>
                        <div className='w-full bg-blue-700 p-4 flex flex-row items-end space-x-2'>
                            <div className='bg-gray-50 w-1 h-4' />
                            <div className='bg-gray-50 w-1 h-5' />
                            <div className='bg-gray-50 w-1 h-6' />
                            <div className='bg-gray-50 w-1 h-1' />
                            <div className='bg-gray-50 w-1 h-6' />
                            <div className='bg-gray-50 w-1 h-3' />
                            <div className='bg-gray-50 w-1 h-5' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const Home: FC = () => {
    return (
        <>
            <Head>
                <title>DataFreaks</title>
            </Head>
            <Navbar />
            <main className='max-w-5xl mx-auto font-nunito'>
                <section
                    id='hero'
                    className='my-12 flex flex-col-reverse md:flex-row items-center'
                >
                    <div className='flex flex-col space-x-6 w-full p-6'>
                        <div className='max-w-md'>
                            <h1 className='my-6 text-4xl font-black text-gray-700'>
                                Weekly digest of your data from you favourite
                                apps
                            </h1>
                            <p className='my-6 text-lg text-gray-500'>
                                Find insights from data, know thyself, get
                                better.
                            </p>
                            <Link href='/signup'>
                                <a>
                                    <div className='text-gray-50 py-2 bg-green-400 rounded-full text-center text-lg max-w-md hover:shadow-lg transition'>
                                        try for free
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full p-6'>
                        <EmailExample />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home
