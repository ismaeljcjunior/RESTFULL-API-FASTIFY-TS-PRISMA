import "../../../chunk-YDOLXERF.mjs";

// src/prisma/migrations/20230215191607_init/migration.sql
var migration_default = "/*\n  Warnings:\n\n  - You are about to drop the column `name` on the `testuser` table. All the data in the column will be lost.\n  - Added the required column `nome` to the `testUser` table without a default value. This is not possible if the table is not empty.\n\n*/\n-- AlterTable\nALTER TABLE `testuser` DROP COLUMN `name`,\n    ADD COLUMN `nome` VARCHAR(191) NOT NULL;\n";
export {
  migration_default as default
};
