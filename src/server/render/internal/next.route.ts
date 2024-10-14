//import { FastifyInstance } from 'fastify'
import { INestApplication, Logger } from '@nestjs/common'

export async function nextRoutes(app: INestApplication) {
  const server = app.getHttpAdapter().getInstance() //as FastifyInstance
  //console.log(server)
  await server.after(() => {
    //get all _next response as usual
    server.next('/')
    server.next('/me')
    // server.next('/me/settings')

    server.next(`/auth/sign-in`)
    server.next(`/auth/sign-up`)
    server.next('/auth/forgot-password')
    server.next('/auth/password-reset/*')

    server.next('/admin')
  })

  Logger.log('NEST endpoints register', 'Render')
}

