import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CategoriaModule } from './categoria/categoria.module';
import { PedidoModule } from './pedido/pedido.module';

@Module({
  imports: [ClienteModule, UsuarioModule, CategoriaModule, PedidoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
