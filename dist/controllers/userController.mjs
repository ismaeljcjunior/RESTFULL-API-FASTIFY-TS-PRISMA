import "../chunk-YDOLXERF.mjs";

// src/controllers/userController.ts
import fs from "fs";
async function createUser(request, reply) {
  try {
    const { fields, files } = request.body;
    const user = JSON.parse(fields.user);
    const photo = files.photo;
    const filename = `${Date.now()}_${photo.name}`;
    const path = `uploads/${filename}`;
    await fs.promises.mkdir("uploads", { recursive: true });
    await fs.promises.writeFile(path, photo.data);
    user.photoUrl = path;
    reply.type("application/json").send(user);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: "Erro interno do servidor" });
  }
}
export {
  createUser
};
