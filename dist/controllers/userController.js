"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/controllers/userController.ts
var userController_exports = {};
__export(userController_exports, {
  createUser: () => createUser
});
module.exports = __toCommonJS(userController_exports);
var import_fs = __toESM(require("fs"));
async function createUser(request, reply) {
  try {
    const { fields, files } = request.body;
    const user = JSON.parse(fields.user);
    const photo = files.photo;
    const filename = `${Date.now()}_${photo.name}`;
    const path = `uploads/${filename}`;
    await import_fs.default.promises.mkdir("uploads", { recursive: true });
    await import_fs.default.promises.writeFile(path, photo.data);
    user.photoUrl = path;
    reply.type("application/json").send(user);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: "Erro interno do servidor" });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createUser
});
