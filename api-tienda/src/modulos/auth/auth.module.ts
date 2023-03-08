import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ClientesModule } from '../clientes/clientes.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [ 
    ClientesModule,
    ConfigModule,
    TypeOrmModule.forFeature( [ User ]),
    PassportModule.register({ defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      imports: [ ConfigModule ],
      inject: [ ConfigService ],
      useFactory: ( configService: ConfigService ) => {
        console.log ('JWT Secret --> ', configService.get('JWT_SECRET'));
        // console.log ('JWT: ', process.env.JWT_SECRET);
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
              expiresIn: '2h'
          }
        }
      }
    })
  ],
  exports: [ TypeOrmModule, AuthService, JwtStrategy, PassportModule, JwtModule ]
})
export class AuthModule {}


// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ClientesModule } from '../clientes/clientes.module';
// import { User } from './entities/user.entity';

// @Module({
//   controllers: [AuthController],
//   providers: [AuthService],
//   imports: [
//     TypeOrmModule.forFeature([ User ]),
//     ClientesModule
  
//   ],
//   exports: [ AuthService ]
// })
// export class AuthModule {}
