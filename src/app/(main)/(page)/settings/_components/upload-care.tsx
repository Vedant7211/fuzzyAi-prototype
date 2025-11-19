'use client'
import React, { useEffect, useRef } from 'react'
import * as LR from '@uploadcare/blocks'
import { useRouter } from 'next/navigation'

type Props = {
  onUpload: (e: string) => any
}

LR.registerBlocks(LR)

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()
  const ctxProviderRef = useRef<any>(null)

  useEffect(() => {
    const handleUpload = async (e: any) => {
      try {
        const file = await onUpload(e.detail.cdnUrl)
        if (file) {
          router.refresh()
        }
      } catch (error) {
        console.error('Upload failed:', error)
      }
    }

    const currentRef = ctxProviderRef.current
    if (currentRef) {
      currentRef.addEventListener('file-upload-success', handleUpload)
    }

    // Cleanup function
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('file-upload-success', handleUpload)
      }
    }
  }, [onUpload, router])

  return (
    <div>
      {/* @ts-expect-error - Custom web component from uploadcare blocks */}
      <lr-config
        ctx-name="my-uploader"
        pubkey="a9428ff5ff90ae7a64eb"
      />

      {/* @ts-expect-error - Custom web component from uploadcare blocks */}
      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`${process.env.NEXT_PUBLIC_UPLOADCARE_CSS_SRC || ''}${LR.PACKAGE_VERSION}${process.env.NEXT_PUBLIC_UPLOADCARE_CSS_SRC_PACKAGE || ''}`}
      />

      {/* @ts-expect-error - Custom web component from uploadcare blocks */}
      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />
    </div>
  )
}

export default UploadCareButton