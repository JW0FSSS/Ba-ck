import {PrismaClient} from '@prisma/client'

export const prisma= new PrismaClient()

export async function main() {
    const result = await prisma.$queryRaw`SELECT 1 + 1`
    return result  
}