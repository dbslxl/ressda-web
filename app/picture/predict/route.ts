import { join } from 'path'
import { writeFile } from 'fs/promises'
export async function POST(request: Request) {
  const formData = await request.formData()
  const title = formData.get('title')
  // const file :File|null = formData.get('image') as unknown as File
  console.log(request.headers.get('content-type'))
  // console.log(file)
 

  
  // const bytes = await file?.arrayBuffer()
  // const buffer = Buffer.from(bytes)

  // const path = join('/','uploadTest.png')
  // console.log(path)
  // await writeFile(path,buffer)

  return Response.json({ title,})
}