import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
import { Proveedor } from './entities/proveedor.entity';

@Injectable()
export class ProveedorService {
 
  constructor(
    @InjectRepository(Proveedor)
    private readonly proveedorRepository: Repository<Proveedor>
  ){
    
  }

  async create(createProveedorDto: CreateProveedorDto) {
    try {
      const proveedor = this.proveedorRepository.create(createProveedorDto);
      console.log(proveedor);
      await this.proveedorRepository.save(proveedor);
      return proveedor;

    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }



  findAll() {
    return this.proveedorRepository.find({});
  }

  findOne(id: string) {
    return this.proveedorRepository.findOne({
      where: { 
        id 
      },
      relations: {
          productos: true,
      }
    });
  }

  update(id: number, updateProveedorDto: UpdateProveedorDto) {
    return `This action updates a #${id} proveedor`;
  }

  remove(id: number) {
    return `This action removes a #${id} proveedor`;
  }
}
