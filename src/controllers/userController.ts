import { FastifyRequest, FastifyReply } from 'fastify';
import { FastifyMultipartFiles } from 'fastify-multipart';
import fs from 'fs';

interface User {
  name: string;
  email: string;
  photoUrl?: string;
}

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { fields, files } = request.body as FastifyMultipartFiles;
    const user: User = JSON.parse(fields.user);

    const photo = files.photo;
    const filename = `${Date.now()}_${photo.name}`;

    const path = `uploads/${filename}`;
    await fs.promises.mkdir('uploads', { recursive: true });
    await fs.promises.writeFile(path, photo.data);

    user.photoUrl = path;

    reply.type('application/json').send(user);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Erro interno do servidor' });
  }
}
