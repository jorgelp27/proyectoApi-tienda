import { Injectable } from '@nestjs/common';
import { ClientesService } from '../clientes/clientes.service';
import dataClientes from '../seed/data/clientes.json';

@Injectable()
export class SeedService {
  
  constructor (
     private readonly clientesService: ClientesService 
   ){}
   
   insercionData(){
     this.clientesService.deleteAllClientes()
    //  this.insertNewClientes()
    //  this.userService.deleteAllUsers();
     this.insertNewClientes();
     return dataClientes;
   }
     
    
  
      private async insertNewClientes(){
        const insertPromises = [];
        dataClientes.forEach( cliente => {
          insertPromises.push(this.clientesService.create(cliente))
        })
        await Promise.all(insertPromises);
      }

}
