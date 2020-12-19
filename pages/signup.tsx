import { FC } from 'react'
import Navbar from '@components/layout/Navbar'
import Footer from '@components/layout/Footer'
import EmailExampleSkeleton from '@components/EmailExampleSkeleton'
import Link from 'next/link'

const Page: FC = () => {
    return (
        <>
            <main className='flex flex-row items-stretch h-screen font-nunito'>
                <section className='w-full px-24'>
                    <Navbar />
                    <div className='flex flex-col justify-center items-center py-24'>
                        <form action='/api/auth/signup' className='w-full'>
                            <div className='border border-gray-200 shadow p-12 m-6 rounded-xl flex flex-col items-stretch space-y-4 max-w-md mx-auto'>
                                <input
                                    type='text'
                                    name='email'
                                    id='email'
                                    placeholder='coolemail@domain.com'
                                    className='rounded-full py-3 px-8 bg-gray-50'
                                />
                                <input
                                    type='text'
                                    name='firstname'
                                    id='firstname'
                                    placeholder='firstname'
                                    className='rounded-full py-3 px-8 bg-gray-50'
                                />
                                <input
                                    type='text'
                                    name='lastname'
                                    id='lastname'
                                    placeholder='lastname'
                                    className='rounded-full py-3 px-8 bg-gray-50'
                                />
                                <input
                                    type='submit'
                                    value='Sign up'
                                    className='bg-green-500 rounded-full py-3 text-gray-50'
                                />
                                <p className='text-center text-gray-400'>
                                    Already have an account?{' '}
                                    <Link href='/login'>
                                        <a className='text-blue-800 hover:underline'>
                                            Log in
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    <Footer />
                </section>
                <section className='w-full bg-blue-800 flex flex-col items-center justify-center space-y-12'>
                    <h1 className='text-gray-50 text-3xl max-w-sm text-center font-bold'>
                        Get a weekly digest of your favourite apps
                    </h1>
                    <div className='w-full max-w-sm'>
                        <EmailExampleSkeleton />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Page
