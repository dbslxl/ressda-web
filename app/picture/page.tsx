import Container from '@/components/Container'
import React from 'react'
import Image from 'next/image'
import ImageUploader from '@/components/ImageUploader'

function page() {

  return (
    <Container>
      <ImageUploader/>
    </Container>
  )
}

export default page