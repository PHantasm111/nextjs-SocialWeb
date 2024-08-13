import Image from 'next/image'
import React from 'react'
import Comments from './Comments'

const Post = () => {
    return (
        <div className='flex flex-col gap-4'>
            {/* USER */}
            <div className=''>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <Image
                            src="https://images.pexels.com/photos/7265995/pexels-photo-7265995.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=''
                            width={40}
                            height={40}
                            className='w-10 h-10 rounded-full'
                        />
                        <span className='font-medium'>John Wick</span>
                    </div>
                    <Image src='/more.png' alt='' width={16} height={16} />
                </div>
            </div>
            {/* DESC */}
            <div className='flex flex-col gap-4'>
                <div className='w-full min-h-96 relative'>
                    <Image
                        src="https://images.pexels.com/photos/27395372/pexels-photo-27395372.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        fill
                        className='object-cover rounded-md'
                        alt=''
                    />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam quae hic error eveniet odio minima,
                    dolor quia sit dolorum animi ratione ex,
                    quo rem ipsum expedita cumque enim suscipit aliquid!
                </p>
            </div>
            {/* INTERACTION */}
            <div className='flex items-center justify-between text-sm my-4'>
                <div className='flex gap-8'>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image
                            src="/like.png"
                            width={16}
                            height={16}
                            alt=''
                            className='cursor-pointer'
                        />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>
                            123 <span className='hidden md:inline'>Likes</span>
                        </span>
                    </div>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image
                            src="/comment.png"
                            width={16}
                            height={16}
                            alt=''
                            className='cursor-pointer'
                        />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>
                            123 <span className='hidden md:inline'>Comments</span>
                        </span>
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image
                            src="/share.png"
                            width={16}
                            height={16}
                            alt=''
                            className='cursor-pointer'
                        />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>
                            123 <span className='hidden md:inline'>Shares</span>
                        </span>
                    </div>
                </div>
            </div>
            {/* MODULE COMMENTS */}
            <Comments />
        </div>
    )
}

export default Post