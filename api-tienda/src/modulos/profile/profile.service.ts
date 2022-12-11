import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientesService } from '../clientes/clientes.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    private readonly clienteService: ClientesService
  ){

  }

  async create(createProfileDto: CreateProfileDto) {
    try {
      //console.log(createProfileDto);
      const { idCliente, ...camposProfile } = createProfileDto;
      const profile = this.profileRepository.create({...camposProfile});
      const cliente = await this.clienteService.findOne(idCliente);
      profile.cliente = cliente;
      await this.profileRepository.save(profile);
      
      // cliente.profile = profile;
      // await this.clienteService.create(cliente);

      return profile
    } catch(error){
        return new InternalServerErrorException('Error en BD')
    }
    
  }


  findAll() {
    return this.profileRepository.find({});
  }

  findOne(id: string) {
    return this.profileRepository.findOne({
      where: { 
        id 
      },
      relations: {
          cesta: true,
      }
    });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
