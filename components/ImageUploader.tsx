"use client"

import React from 'react'
import { useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import { Button } from './ui/button'

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

  const handleSubmit = () => {

  }
  const handleFormSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()    
    const formData = new FormData(e.target as HTMLFormElement)
    console.log('form data:',formData)
    const response = await fetch('/picture/predict', {
      method: 'POST',
      body: formData
    })
    const data = await response.json();
    console.log('response data:',data)
    // formData.append('image', image)
    // fetch('/api/upload', {
    //   method: 'POST',

    //   body: formData
    // })
  }  
    


  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const selected = e.target.files?.[0]
  //   setImage(selected)
  // }


  return (
    <>
      <Container>
        <div className="flex items-center justify-center sm:w-3/4 lg:w-1/2 py-20 mx-auto">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-96 h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {image ? <Image src={image?image:'/img.cat'} width={128} height={128} alt="upload" className='w-full max-h-60 overflow-hidden rounded-lg'/> : <>
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </>
                  }                                        
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleChange}/>
          </label>
        </div>
        <Button className='m-auto block'>제출</Button>

        <form onSubmit={handleFormSubmit}  className='flex-col'>
          <input type="text" name='title' placeholder="제목"/>
          <input type="file" name='image' onChange={handleChange}/>
          <button type="submit">제출</button>
        </form>

      </Container>
    </>
  )
}

export default ImageUploader