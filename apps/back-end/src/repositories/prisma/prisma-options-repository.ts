import { Prisma } from '@prisma/client'
import { OptionsRepository } from '../options-repository'
import { prismaClient } from '@/lib/prisma'

export class PrismaOptionsRepository implements OptionsRepository {
  async addOption(
    option: Prisma.OptionCreateInput,
    subsectionId: string,
    domainId: string,
  ) {
    const domain = await prismaClient.domain.findUnique({
      where: {
        id: domainId,
      },
    })

    const subsection = await prismaClient.subsection.findUnique({
      where: {
        id: subsectionId,
      },
    })

    if (!domain) {
      throw new Error(`Domain not found`)
    }

    if (!subsection) {
      throw new Error(`Subsection not found`)
    }

    const newOption = await prismaClient.option.create({
      data: {
        ...option,
        Subsection: {
          connect: {
            id: subsectionId,
          },
        },
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
    })

    return newOption
  }

  async updateOption(
    data: Prisma.OptionUpdateInput,
    optionId: string,
    domainId: string,
  ) {
    const domain = await prismaClient.domain.findUnique({
      where: {
        id: domainId,
      },
    })

    const option = await prismaClient.option.findUnique({
      where: {
        id: optionId,
      },
    })

    if (!domain) {
      throw new Error(`Domain not found`)
    }

    if (!option) {
      throw new Error(`Option not found`)
    }

    const updatedOption = await prismaClient.option.update({
      where: {
        id: optionId,
      },
      data: {
        ...data,
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
    })

    return updatedOption
  }

  async deleteOption(id: string, domainId: string) {
    const option = await prismaClient.option.findUnique({
      where: {
        id,
        Domain: {
          id: domainId,
        },
      },
    })

    if (!option) {
      throw new Error(`Option not found`)
    }

    await prismaClient.option.delete({ where: { id } })
  }
}
