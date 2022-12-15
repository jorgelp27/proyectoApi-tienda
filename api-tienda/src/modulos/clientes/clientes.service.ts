import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {

  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>
  ) {

  }
  async create(createClienteDto: CreateClienteDto) {
    try {
      //crea la instancia del producto con sus propiedades
      const cliente = this.clienteRepository.create(createClienteDto);
      // Lo graba e impacta en la BD
      await this.clienteRepository.save(cliente);
      return cliente;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda!')
    }
 
  }
 

  findAll() {
    return this.clienteRepository.find({});
  }

  findOne(id: string) {
    return this.clienteRepository.findOne({
      where: { 
        id 
      },
      relations: {
          productos: true,
      }
    });
  }


  update(id: number, updateUserDto: UpdateClienteDto) {
    return this.clienteRepository.update(id, updateUserDto);
  }
  
  // update(id: number, updateClienteDto: UpdateClienteDto) {
  //   return `This action updates a #${id} cliente`;
  // }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
