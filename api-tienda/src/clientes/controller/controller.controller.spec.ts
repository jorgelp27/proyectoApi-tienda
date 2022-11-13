import { Test, TestingModule } from '@nestjs/testing';
import { clientesController } from './clientes.controller';

describe('ControllerController', () => {
  let controller: clientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [clientesController],
    }).compile();

    controller = module.get<clientesController>(clientesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
