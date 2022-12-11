import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaService } from '../categoria/categoria.service';
import { ClientesService } from '../clientes/clientes.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {

  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    private readonly clienteService: ClientesService
  ){
   
  }
  async create(createProductoDto: CreateProductoDto) {
    
    try {
      const { idCliente,...campos } = createProductoDto;
      // console.log({...campos});
      const cliente = this.clienteService.findOne(idCliente);
      const producto = this.productoRepository.create({...campos});
      producto.cliente = await this.clienteService.findOne(idCliente);
      // //se lanza la petición sl SGBD (postgres). Esperar (x seg)
      await this.productoRepository.save(producto)
      return producto
    } catch (error) {
        return new InternalServerErrorException('Error en BD')
        
    }

 
  }


  findAll() {
    return this.productoRepository.find({});
  }

  findOne(id: string) {
    return this.productoRepository.findOne({
      where: { 
        id 
      },
      relations: {
          cestas: true,
      }
    });
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
