import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { ProductosService } from '../productos/productos.service';
import { CreateCestaDto } from './dto/create-cesta.dto';
import { UpdateCestaDto } from './dto/update-cesta.dto';
import { Cesta } from './entities/cesta.entity';

@Injectable()
export class CestaService {

  constructor(
    @InjectRepository(Cesta)
    private readonly cestaRepository: Repository<Cesta>,
    private readonly productosService: ProductosService,
    private readonly authService: AuthService
  ){
   
  }
  async create(createCestaDto: CreateCestaDto) {
    
    try {
      const { idProducto,idUser,...campos } = createCestaDto;
      // console.log({...campos});
      const producto = this.productosService.findOne(idProducto);
      const user = this.authService.findOne(idUser);
      const cesta = this.cestaRepository.create({...campos});
      cesta.producto = await this.productosService.findOne(idProducto);
      cesta.user = await this.authService.findOne(idUser);
      // //se lanza la petición sl SGBD (postgres). Esperar (x seg)
      await this.cestaRepository.save(cesta)
      return cesta
    } catch (error) {
        return new InternalServerErrorException('Error en BD')
        
    }

 
  }

  findAll() {
    return `This action returns all cesta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cesta`;
  }

  update(id: number, updateCestaDto: UpdateCestaDto) {
    return `This action updates a #${id} cesta`;
  }

  remove(id: number) {
    return `This action removes a #${id} cesta`;
  }
}
