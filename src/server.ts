const fastify = require('fastify')()
import { FastifyRequest, FastifyReply } from 'fastify'
import { FastifyMultipartFiles } from 'fastify-multipart';
const port = process.env.API_PORT
import fs from 'fs';
import { createUser } from './controllers/userController';

fastify.register(require('fastify-cors'), {
    // Configuração de permissões CORS, caso necessário
});
fastify.register(require('fastify-multipart'), {
    addToBody: true
});

// fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
//     try {
//         const { fields, files } = request.body as FastifyMultipartFiles;
//         const user = JSON.parse(fields.user);

//         const photo = files.photo;
//         const filename = `${Date.now()}_${photo.name}`;

//         const path = `uploads/${filename}`;
//         await fs.promises.mkdir('uploads', { recursive: true });
//         await fs.promises.writeFile(path, photo.data);

//         user.photoUrl = path;

//         reply.type('application/json').send(user);
//     } catch (error) {
//         console.error(error);
//         reply.status(500).send({ error: 'Erro interno do servidor' });
//     }
// });

fastify.post('/users', createUser);

const start = async () => {
    try {
        await fastify.listen(port);
        console.log(`Servidor iniciado na porta ${port}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
start();