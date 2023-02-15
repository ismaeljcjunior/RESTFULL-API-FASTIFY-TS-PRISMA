import "../../../chunk-YDOLXERF.mjs";

// src/prisma/migrations/20230215175143_init/migration.sql
var migration_default = "-- CreateTable\nCREATE TABLE `User` (\n    `id` INTEGER NOT NULL AUTO_INCREMENT,\n    `email` VARCHAR(191) NOT NULL,\n    `cpf` VARCHAR(191) NOT NULL,\n    `nomeCompleto` VARCHAR(191) NOT NULL,\n    `matricula` VARCHAR(191) NOT NULL,\n    `dataExpiracao` DATETIME(3) NOT NULL,\n    `dataDeNascimento` DATETIME(3) NOT NULL,\n    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),\n    `updated_at` DATETIME(3) NOT NULL,\n\n    UNIQUE INDEX `User_email_key`(`email`),\n    UNIQUE INDEX `User_cpf_key`(`cpf`),\n    PRIMARY KEY (`id`)\n) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n\n-- CreateTable\nCREATE TABLE `testUser` (\n    `id` INTEGER NOT NULL AUTO_INCREMENT,\n    `name` VARCHAR(191) NOT NULL,\n    `email` VARCHAR(191) NOT NULL,\n    `photoUrl` VARCHAR(191) NOT NULL,\n    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),\n    `updated_at` DATETIME(3) NOT NULL,\n\n    PRIMARY KEY (`id`)\n) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n";
export {
  migration_default as default
};
