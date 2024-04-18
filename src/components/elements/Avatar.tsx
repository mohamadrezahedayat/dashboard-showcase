import Image from 'next/image';
import React, { FC } from 'react'

interface IProps{
  seed:number
}
const Avatar:FC<IProps> = ({seed}) => {
  return (
    <div className='overflow-hidden rounded-full w-5 h-5'>
      <Image src={`https://randomuser.me/api/portraits/men/${seed}.jpg`} alt='user' width={20} height={20}/>
    </div>
    
  )
}

export default Avatar