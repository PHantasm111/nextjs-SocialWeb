import { User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserMediaCard = ({user}:{user:User}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Media</span>
                <Link href="/" className="text-blue-500 text-xs">See all</Link>
            </div>

            {/* BOTTOM */}
            <div className='flex gap-4 justify-between flex-wrap'>
                <div className='relative w-1/5 h-24'>
                    <Image 
                        src="https://images.pexels.com/photos/27604812/pexels-photo-27604812.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image 
                        src="https://images.pexels.com/photos/27604812/pexels-photo-27604812.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image 
                        src="https://images.pexels.com/photos/27604812/pexels-photo-27604812.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image 
                        src="https://images.pexels.com/photos/27604812/pexels-photo-27604812.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image 
                        src="https://images.pexels.com/photos/27604812/pexels-photo-27604812.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image 
                        src="https://images.pexels.com/photos/27604812/pexels-photo-27604812.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image 
                        src="https://images.pexels.com/photos/27604812/pexels-photo-27604812.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image 
                        src="https://images.pexels.com/photos/27604812/pexels-photo-27604812.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        alt=''
                        fill
                        className='object-cover rounded-md'
                    />
                </div>
            </div>
        </div>
  )
}

export default UserMediaCard