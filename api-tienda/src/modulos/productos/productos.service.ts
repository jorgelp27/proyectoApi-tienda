import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaService } from '../categoria/categoria.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {

  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    private readonly categoriaService: CategoriaService
  ){
   
  }
  async create(createProductoDto: CreateProductoDto) {
    
    try {
      const { idCategoria, ...campos } = createProductoDto;
      // console.log({...campos});
      const categoria = this.categoriaService.findOne(idCategoria);
      const producto = this.productoRepository.create({...campos});
      producto.categoria = await this.categoriaService.findOne(idCategoria);
      // //se lanza la petición sl SGBD (postgres). Esperar (x seg)
      await this.productoRepository.save(producto)
      return producto
    } catch (error) {
        return new InternalServerErrorException('Error en BD')
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
