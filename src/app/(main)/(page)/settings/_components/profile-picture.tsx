'use client'
import React from 'react'
import UploadCareButton from './upload-care'
import { Button } from '@/components/UI/button'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'  

type Props = {
    onDelete?: any
    onUpload?: any
    userImage: any
}

const ProfilePicture = ({ onDelete, onUpload, userImage }: Props) => {
  const router = useRouter()

  const handleUpload = async (url: string) => {
    const response = await onUpload(url)
    if (response) {
      router.refresh()
    }
  }

  const onRemoveProfileImage = async () => {
    const response = await onDelete()
    if (response) {
      router.refresh()
    }
  }

  return (
    <div className='flex flex-col'>
      <p className="text-lg text-white">Profile picture</p>
      <div className='flex items-center h-[30vh] flex-col justify-center'>
        {userImage ? (
          <>
            <div className='relative w-full h-full'>
              <Image src={userImage} alt="Profile picture" fill />
            </div>
            <Button 
              onClick={onRemoveProfileImage} 
              className='bg-transparent text-white/70 hover:bg-transparent hover:text-white'
            >
              <X className='w-4 h-4' />  
              Remove profile picture
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={handleUpload} />
        )}
      </div>
    </div>
  )
}

export default ProfilePicture