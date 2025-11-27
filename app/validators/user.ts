import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(3),
    email: vine.string().trim().email(),
    password: vine.string().trim().minLength(6)
  })
)

export const updateUserValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(3),
    email: vine.string().trim().email(),
    password: vine.string().trim().minLength(6)
  })
)