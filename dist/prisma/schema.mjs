import "../chunk-YDOLXERF.mjs";

// src/prisma/schema.prisma
var schema_default = '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "mysql"\n  url      = env("DATABASE_URL")\n}\n\nmodel User {\n  id               Int      @id @default(autoincrement())\n  email            String   @unique\n  cpf              String   @unique\n  nomeCompleto     String\n  matricula        String\n  dataExpiracao    DateTime\n  dataDeNascimento DateTime\n  created_at       DateTime @default(now())\n  updated_at       DateTime @updatedAt\n}\n\nmodel testUser {\n  id         Int      @id @default(autoincrement())\n  nome       String\n  email      String\n  photoUrl   String\n  created_at DateTime @default(now())\n  updated_at DateTime @updatedAt\n}\n';
export {
  schema_default as default
};
