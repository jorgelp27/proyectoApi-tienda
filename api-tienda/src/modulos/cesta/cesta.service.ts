import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductosService } from '../productos/productos.service';
import { CreateCestaDto } from './dto/create-cesta.dto';
import { UpdateCestaDto } from './dto/update-cesta.dto';
import { Cesta } from './entities/cesta.entity';

@Injectable()
export class CestaService {

  constructor(
    @InjectRepository(Cesta)
    private readonly cestaRepository: Repository<Cesta>,
    private readonly productoService: ProductosService
  ){
   
  }
  async create(createCestaDto: CreateCestaDto) {
    
    try {
      const { idProducto,...campos } = createCestaDto;
      // console.log({...campos});
      const producto = this.productoService.findOne(idProducto);
      const cesta = this.cestaRepository.create({...campos});
      cesta.producto = await this.productoService.findOne(idProducto);
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
