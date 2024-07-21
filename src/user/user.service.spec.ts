import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserService } from './user.service';
import { User } from './user.schema';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

describe('UserService', () => {
  let service: UserService;
  let model: Model<User>;

  // Mock data
  const mockUser = {
    _id: '608c2570a28f7a1b88b3f5a7',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    address: '123 Main St',
    phone: '555-555-5555',
    password: 'password123',
  };

  // Mock Mongoose model
  const mockUserModel = {
    find: jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue([mockUser]),
    }),
    findById: jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockUser),
    }),
    create: jest.fn().mockResolvedValue(mockUser),
    findByIdAndUpdate: jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockUser),
    }),
    findByIdAndDelete: jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockUser),
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken(User.name),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    model = module.get<Model<User>>(getModelToken(User.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const createUserDto: CreateUserDto = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      address: '123 Main St',
      phone: '555-555-5555',
      password: 'password123',
    };

    const result = await service.create(createUserDto);
    expect(result).toEqual(mockUser);
    expect(model.create).toHaveBeenCalledWith(createUserDto);
  });

  it('should return all users', async () => {
    const result = await service.findAll();
    expect(result).toEqual([mockUser]);
    expect(model.find).toHaveBeenCalled();
  });

  it('should return a user by id', async () => {
    const result = await service.findById('608c2570a28f7a1b88b3f5a7');
    expect(result).toEqual(mockUser);
    expect(model.findById).toHaveBeenCalledWith('608c2570a28f7a1b88b3f5a7');
  });

  it('should update a user', async () => {
    const updateUserDto: UpdateUserDto = {
      firstName: 'Jane',
    };

    const result = await service.update(
      '608c2570a28f7a1b88b3f5a7',
      updateUserDto,
    );
    expect(result).toEqual(mockUser);
    expect(model.findByIdAndUpdate).toHaveBeenCalledWith(
      '608c2570a28f7a1b88b3f5a7',
      updateUserDto,
      { new: true },
    );
  });

  it('should delete a user', async () => {
    const result = await service.delete('608c2570a28f7a1b88b3f5a7');
    expect(result).toEqual(mockUser);
    expect(model.findByIdAndDelete).toHaveBeenCalledWith(
      '608c2570a28f7a1b88b3f5a7',
    );
  });
});
