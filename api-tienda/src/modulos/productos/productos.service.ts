import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {

  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>
  ){
   
  }
  async create(createProductoDto: CreateProductoDto) {
    
    try {
      //crea la instancia del producto con sus propiedades
      const producto = this.productoRepository.create(createProductoDto);
      // Lo graba e impacta en la BD
      await this.productoRepository.save(producto);
      return producto;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda!')
    }
 
  }
 
 

  findAll() {
    return `This action returns all productos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
