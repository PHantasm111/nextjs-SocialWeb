import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image'
import React from 'react'

const AddPost = () => {

    const { userId } = auth()

    return (
        <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
            {/* AVATOR */}
            <Image
                src='https://images.pexels.com/photos/17410093/pexels-photo-17410093.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                width={48}
                height={48}
                alt=''
                className='w-12 h-12 object-cover rounded-full'
            />
            {/* POST */}
            <div className='flex-1'>
                {/* TEXT INPUT */}
                <form action="" className='flex gap-4'>
                    <textarea name='desc'
                        placeholder="what's on your mind ?"
                        className='bg-slate-100 rounded-lg flex-1 p-2'>
                    </textarea>
                    <Image
                        src='/emoji.png'
                        width={20}
                        height={20}
                        alt=''
                        className='w-5 h-5 cursor-pointer self-end'
                    />
                    <button>Send</button>
                </form>
                {/* POST OPTION */}
                <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src="/addimage.png" alt='' width={20} height={20} />
                        Photo
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src="/addVideo.png" alt='' width={20} height={20} />
                        Video
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src="/poll.png" alt='' width={20} height={20} />
                        Poll
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src="/addevent.png" alt='' width={20} height={20} />
                        Event
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost