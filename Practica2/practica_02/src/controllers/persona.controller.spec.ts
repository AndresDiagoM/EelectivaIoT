import { Test, TestingModule } from '@nestjs/testing';
import { PersonController } from './persona.controller';
import { PersonService } from '../services/persona.service';

describe('AppController', () => {
  let appController: PersonController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PersonController],
      providers: [PersonService],
    }).compile();

    appController = app.get<PersonController>(PersonController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
