import { FastifyReply, FastifyRequest } from 'fastify'
import { v2 as cloudinary } from 'cloudinary'

export async function uploadImage(req: FastifyRequest, reply: FastifyReply) {
  const data = await req.file()
  const fileContent = await data?.toBuffer()

  if (!data) {
    return reply.status(400).send({ message: 'No file uploaded' })
  }

  if (!fileContent) {
    return reply.status(400).send({ message: 'Error reading file' })
  }

  if (!req.isMultipart()) {
    return reply.status(400).send({ message: 'Request is not multipart' })
  }

  try {
    const result = await cloudinary.uploader.upload(
      'data:image/png;base64,' + fileContent.toString('base64'),
      { resource_type: 'image', folder: 'images' },
    )

    return reply.status(201).send({ message: 'Image uploaded', data: result })
  } catch (err) {
    console.error(err)
    return reply.status(500).send({ message: 'Error uploading image' })
  }
}
