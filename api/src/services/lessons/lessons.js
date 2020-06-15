import { db } from 'src/lib/db'

export const lessons = () => {
  return db.lesson.findMany()
}

export const Lesson = {
  prize: (_obj, { root }) => db.lesson.findOne({ where: { id: root.id } }).prize(),
}
