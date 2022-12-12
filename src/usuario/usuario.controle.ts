/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { Body, Get } from '@nestjs/common/decorators';
import { UsarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {

constructor(private usuarioRepository: UsarioRepository){}


  @Post()
  async criaUsuario(@Body() dadosDoUsuario) {
    this.usuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }
  @Get()
  async listUsuario(){
    return this.usuarioRepository.listar();
  }
}
