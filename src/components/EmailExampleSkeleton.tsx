import { FC } from 'react'

const EmailExampleSkeleton: FC = () => (
    <div className='shadow-lg bg-white rounded-lg w-full max-w-sm font-nunito border border-gray-100'>
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

export default EmailExampleSkeleton
