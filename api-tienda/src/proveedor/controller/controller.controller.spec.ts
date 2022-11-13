import { Test, TestingModule } from '@nestjs/testing';
import { proveedorController } from './proveedor.controller';

describe('proveedorController', () => {
  let controller: proveedorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [proveedorController],
    }).compile();

    controller = module.get<proveedorController>(proveedorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
