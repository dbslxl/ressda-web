"use client"

import React from 'react'
import { useState } from 'react'

function ImageUploader() {
  const [image, setImage] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = (e.currentTarget as HTMLInputElement).files as FileList
    const file = fileList[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    } 

  }



  return (
    <div>ImageUploader</div>
  )
}

export default ImageUploader