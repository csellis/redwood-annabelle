import { db } from 'src/lib/db'

export const prizes = () => {
  return db.prize.findMany()
}

export const prize = ({ id }) => {
  return db.prize.findOne({
    where: { id },
  })
}

export const Prize = {
  lessons: (_obj, { root }) =>
    db.prize.findOne({ where: { id: root.id } }).lessons(),
}
