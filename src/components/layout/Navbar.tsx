import { FC } from 'react'
import Link from 'next/link'

const Navbar: FC = () => (
    <header className='max-w-5xl mx-auto py-12 px-6 flex flex-row items-center justify-between'>
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
