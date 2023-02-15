import fastify from 'fastify'
import { FastifyRequest, FastifyReply, FastifyInstance, FastifyListenOptions } from 'fastify'
import fastifyMulter from 'fastify-multer'
import { PrismaClient } from '@prisma/client'
// import cors from '@fastify/cors'
import fs from 'fs'

const prisma = new PrismaClient()
const Fastify = fastify({ logger: true })
const options = {
  port: 3333,
  host: '0.0.0.0'
}

// Fastify.register(fastifyMulter.contentParser)
// Fastify.register(cors,{})
// Fastify.register(require('@fastify/multipart'))
Fastify.register(require('@fastify/multipart'))

interface IUsuarioProps {
  nome: string;
  email: string;
  photoUrl: string;
}

Fastify.post('/usuarios', async (request: FastifyRequest, reply: FastifyReply) => {
  const { nome, email, photoUrl } = request.body as IUsuarioProps
  const usuario = await prisma.testUser.create({
    data: {
      nome,
      email,
      photoUrl,
    },
  });
  reply.send(usuario);
});

Fastify.get('/', async (request, reply) => {

})
////////////////////////////////////////////////////////////////
const start = async () => {
  try {
    Fastify.listen(options, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Servidor escutando em ${address}`);

    });
  } catch (err) {
    Fastify.log.error(err);
    process.exit(1);
  }
};



start()
