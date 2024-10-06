import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify'
import { initializeCookies, initializeCors, initializeSentry, initializeSession, initializeStaticAssets, initializeSwagger } from './bootstrap'

import { initializeNext, nextRoutes } from './render'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )
  // Set global prefix for api
  app.setGlobalPrefix('/api/v1')

  /* installation of auxiliary modules */
  initializeSentry(app)
  initializeCors(app)
  initializeStaticAssets(app)
  initializeSwagger(app)

  initializeSentry(app)

  initializeCookies(app)
  initializeSession(app)

  /* server admin client */
  initializeNext(app)
  await nextRoutes(app)

  /* start server */
  await app.listen(8001)
}
bootstrap()
