import { db } from 'src/lib/db'

export const actionTypes = () => {
  return db.actionType.findMany()
}

export const actionType = ({ id }) => {
  return db.actionType.findOne({
    where: { id },
  })
}

export const createActionType = ({ input }) => {
  return db.actionType.create({
    data: input,
  })
}

export const updateActionType = ({ id, input }) => {
  return db.actionType.update({
    data: input,
    where: { id },
  })
}

export const deleteActionType = ({ id }) => {
  return db.actionType.delete({
    where: { id },
  })
}

export const ActionType = {
  actions: (_obj, { root }) => db.actionType.findOne({ where: { id: root.id } }).actions(),
}
