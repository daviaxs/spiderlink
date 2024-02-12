import { makeDeleteSubsectionUseCase } from '@/use-cases/factories/subsections/make-delete-subsection-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../../utils/handleError'

export async function deleteSubsection(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const paramsBodySchema = z.object({
    domainId: z.string(),
    subsectionId: z.string(),
  })

  const parsed = paramsBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { domainId, subsectionId } = parsed.data

  try {
    const deleteSubsectionUseCase = makeDeleteSubsectionUseCase()

    await deleteSubsectionUseCase.execute(subsectionId, domainId)

    return reply.status(200).send({ message: 'Subsection deleted' })
  } catch (err) {
    handleError(err, reply)
  }
}
