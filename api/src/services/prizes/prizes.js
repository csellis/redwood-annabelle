import { db } from 'src/lib/db'

export const prizes = () => {
  return db.prize.findMany()
}

export const prize = ({ id }) => {
  return db.prize.findOne({
    where: { id },
  })
}

export const createPrize = ({ input }) => {
  return db.prize.create({
    data: input,
  })
}

export const updatePrize = ({ id, input }) => {
  return db.prize.update({
    data: input,
    where: { id },
  })
}

export const deletePrize = ({ id }) => {
  return db.prize.delete({
    where: { id },
  })
}
