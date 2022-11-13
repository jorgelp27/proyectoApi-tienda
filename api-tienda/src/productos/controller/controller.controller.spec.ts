import { Test, TestingModule } from '@nestjs/testing';
import { productosController } from './productos.controller';

describe('ControllerController', () => {
  let controller: productosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [productosController],
    }).compile();

    controller = module.get<productosController>(productosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
