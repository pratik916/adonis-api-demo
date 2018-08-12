'use strict'

/**
 * Resourceful controller for interacting with helloworlds
 */
class HelloWorldController {
  /**
   * Show a list of all helloworlds.
   * GET helloworlds
   */
  async index ({ request, response, view }) {
    return 'Hello world'
  }

  /**
   * Render a form to be used for creating a new helloworld.
   * GET helloworlds/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new helloworld.
   * POST helloworlds
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single helloworld.
   * GET helloworlds/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing helloworld.
   * GET helloworlds/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update helloworld details.
   * PUT or PATCH helloworlds/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a helloworld with id.
   * DELETE helloworlds/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = HelloWorldController
