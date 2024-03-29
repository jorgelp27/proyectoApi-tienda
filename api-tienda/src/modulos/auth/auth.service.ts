
import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, LoginUserDto } from './dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { Cliente } from '../clientes/entities/cliente.entity';
import { ClientesService } from '../clientes/clientes.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly clientesService: ClientesService,
    private readonly jwtService: JwtService
  ){}

  async login( loginUserDto: LoginUserDto ){
    try {
      // buscamos el usuario del email
      const { email, password } = loginUserDto;
      const user = await this.userRepository.findOne({ 
        where: { email },
        select: { email: true, password: true, roles: true, fullName: true }
       });

      if ( !user ) 
        throw new UnauthorizedException ('Credenciales no válidas (email)');

      //comparamos las contraseñas 
      if (!bcrypt.compareSync( password, user.password ))
        throw new UnauthorizedException('Credenciales no válidas (email)')
      
      return {
        user: { ...user }, 
        token: this.getJwtToken({ email: user.email })
      }
      
    } catch (error) {
      this.handleDBErrors(error)
    }
  }
  async create(createUserDto: CreateUserDto) {
    try {
      console.log(createUserDto);
      const { password, ...userData } = createUserDto;
      // const cliente = await this.clientesService.findOne(createUserDto.nif);
      // console.log(cliente);
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync( password, 10 )
      });
      // user.cliente = cliente;
      await this.userRepository.save(user);
      // delete user.password;

      return {
        user: { ...user }, 
        token: this.getJwtToken({ email: user.email })
      }

    } catch (error) {
      this.handleDBErrors(error)
    }
  }

  private handleDBErrors (error: any): never{
    if (error.code === '23505')
      throw new BadRequestException(error.detail)
    
    throw new InternalServerErrorException('Please Check Server Error ...')
  }

  private getJwtToken( payload: JwtPayload){
    const token = this.jwtService.sign(payload);
    return token;
  }

  async deleteAllAuth(){
    const query = this.userRepository.createQueryBuilder('user');
    try{
      return await query
              .delete()
              .where({})
              .execute()
    }catch(error){
      this.handleDBErrors( error )
    }
  }

    findOne(id: string) {
    return this.userRepository.findOne({
      where: { 
        id 
      },
      relations: {
          cesta: true,
      }
    });
  }
}






// import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm/repository/Repository';
// import { ClientesService } from '../clientes/clientes.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
// import { User } from './entities/user.entity';
// import * as bcrypt from 'bcrypt';

// @Injectable()
// export class AuthService {
  
//   constructor(
//     @InjectRepository(User)
//     private readonly userRepository: Repository<User>,
//     private readonly clienteService: ClientesService,

//   ){

//   }

//   async create(createUserDto: CreateUserDto) {
//     try {
      
//       const { idCliente,password, ...camposUser } = createUserDto;
//       const user = this.userRepository.create({
//         ...camposUser,
//         password: bcrypt.hashSync( password, 10 )
//       });
//       const cliente = await this.clienteService.findOne(idCliente);
//       user.cliente = cliente;
//       await this.userRepository.save(user);
//       delete user.password;
      
    
//       return user
      
//     }
//     catch (error) {
//     this.handleDBErrors(error)
//     }
//   }
//   private handleDBErrors (error: any): never{
//     if (error.code === '23505')
//       throw new BadRequestException(error.detail)
    
//     throw new InternalServerErrorException('Please Check Server Error ...')
//   }

//   async deleteAllAuth(){
//     const query = this.userRepository.createQueryBuilder('user');
//     try {
//       return await query
//         .delete()
//         .where({})
//         .execute()
  
//     }catch(error){
//       this.handleDBErrors (error)
//     }
//   }

//   findAll() {
//     return this.userRepository.find({
//       relations: {
//         cliente: true
//       }
//     });
//   }

//   findOne(idUser: string) {
//     return this.userRepository.findOne({
//       where: { 
//         idUser 
//       },
//       relations: {
//           cesta: true,
//       }
//     });
//   }
  

//   update(id: number, updateAuthDto: UpdateAuthDto) {
//     return `This action updates a #${id} auth`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} auth`;
//   }
// }
