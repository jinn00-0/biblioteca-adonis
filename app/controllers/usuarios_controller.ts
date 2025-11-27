import type { HttpContext } from '@adonisjs/core/http'
import { createLivroValidator } from '#validators/livro'
import Livro from '#models/livro'
import { updateLivroValidator } from '#validators/livro'
export default class UsuariosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const livros = await Livro.all()
    return livros
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const dados = await request.validateUsing(createLivroValidator)
    const livro = await Livro.create(dados)
    return livro
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const payload = await request.validateUsing(updateLivroValidator)
    const livro = await Livro.findOrFail(params.id)
    livro.merge(payload)
    await livro.save()
    return livro
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const livro = await Livro.findOrFail(params.id)
    await livro.delete()
  }
}