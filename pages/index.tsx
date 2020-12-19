import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import Footer from '@components/layout/Footer'
import Navbar from '@components/layout/Navbar'
import EmailExampleSkeleton from '@components/EmailExampleSkeleton'

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
                    className='my-12 mb-32 flex flex-col-reverse md:flex-row items-center'
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
                    <div className='w-full p-6 flex flex-row justify-end'>
                        <EmailExampleSkeleton />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home
