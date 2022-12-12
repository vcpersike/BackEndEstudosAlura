/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
@Injectable()
export class UsarioRepository {
  private usuarios = [];
  async salvar(usuario) {
    this.usuarios.push(usuario);
  }
  async listar() {
    return this.usuarios;
  }
}
