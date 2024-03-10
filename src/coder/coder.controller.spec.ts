import { Test, TestingModule } from '@nestjs/testing';
import { CoderController } from './coder.controller';

describe('CoderController', () => {
  let controller: CoderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoderController],
    }).compile();

    controller = module.get<CoderController>(CoderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
