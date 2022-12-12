/* eslint-disable prettier/prettier */

import { UsarioRepository } from './usuario.repository';

import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controle';

@Module({
  controllers: [UsuarioController],
  providers: [UsarioRepository],
})
export class UsuarioModule {}
