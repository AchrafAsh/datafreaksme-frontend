import { FC } from 'react'
import Link from 'next/link'

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

export default Footer
