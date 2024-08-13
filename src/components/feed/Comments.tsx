import Image from "next/image"

const Comments = () => {
    return (
        <div className="">
            {/* WRITE */}
            <div className="flex items-center gap-4">
                <Image
                    src='https://images.pexels.com/photos/27566517/pexels-photo-27566517.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
                    alt=''
                    className="w-8 h-8 rounded-full"
                    width={32}
                    height={32}
                />
                <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input type="text" placeholder="Write a comment..." className="bg-transparent outline-none flex-1" />
                    <Image
                        src='/emoji.png'
                        alt=''
                        className="cursor-pointer"
                        width={16}
                        height={16}
                    />
                </div>
            </div>
            {/* COMMENTS */}
            <div className="">
                {/* COMMENT */}
                <div className="flex gap-4 justify-between mt-6">
                    {/* AVATAR */}
                    <Image
                        src='https://images.pexels.com/photos/27566517/pexels-photo-27566517.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
                        alt=''
                        className="w-10 h-10 rounded-full"
                        width={40}
                        height={40}
                    />
                    {/* DESC */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">Besde Jeosen</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem praesentium deserunt commodi earum nobis, atque porro fugit vitae ipsam tempore ducimus omnis debitis doloribus beatae quos alias amet officiis non.</p>
                        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                            <div className="flex items-center gap-4">
                                {/* LIKE IMAGE */}
                                <Image
                                    src="/like.png"
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="cursor-pointer w-4 h-4"
                                />
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500">123</span>
                            </div>
                            <div className="">Reply</div>
                        </div>

                    </div>
                    {/* ICON */}
                    <Image
                        src="/more.png"
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer w-4 h-4"
                    />

                </div>
            </div>

        </div>
    )
}

export default Comments