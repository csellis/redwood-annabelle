import { db } from 'src/lib/db'

export const actions = () => {
  return db.action.findMany()
}

export const action = ({ id }) => {
  return db.action.findOne({
    where: { id },
  })
}

export const createAction = ({ input }) => {
  return db.action.create({
    data: input,
  })
}

export const updateAction = ({ id, input }) => {
  return db.action.update({
    data: input,
    where: { id },
  })
}

export const deleteAction = ({ id }) => {
  return db.action.delete({
    where: { id },
  })
}

export const Action = {
  actionType: (_obj, { root }) => db.action.findOne({ where: { id: root.id } }).actionType(),
  user: (_obj, { root }) => db.action.findOne({ where: { id: root.id } }).user(),
}
