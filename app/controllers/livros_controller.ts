import { createLivroValidator } from '#validators/livro'
import type { HttpContext } from '@adonisjs/core/http'

export default class LivrosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
     return [
      {id:1,titulo:"Pinochio",autor:'Disney',preco:"50"}
    ]
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createLivroValidator)
    return payload
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    let codigo=params.id
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}