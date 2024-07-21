import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { User } from './user.schema';
import { CreateUserInput, UpdateUserInput } from './inputs/user.input';
import { toGraphQLUser } from './user.mapper';

describe('UserResolver', () => {
  let resolver: UserResolver;
  let service: UserService;

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

  const mockUserGraphQL = toGraphQLUser(mockUser as User);

  // Mock UserService
  const mockUserService = {
    findAll: jest.fn().mockResolvedValue([mockUser]),
    findById: jest.fn().mockResolvedValue(mockUser),
    create: jest.fn().mockResolvedValue(mockUser),
    update: jest.fn().mockResolvedValue(mockUser),
    delete: jest.fn().mockResolvedValue(mockUser),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return all users', async () => {
    const result = await resolver.getAllUsers();
    expect(result).toEqual([mockUserGraphQL]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a user by id', async () => {
    const result = await resolver.getUserById('608c2570a28f7a1b88b3f5a7');
    expect(result).toEqual(mockUserGraphQL);
    expect(service.findById).toHaveBeenCalledWith('608c2570a28f7a1b88b3f5a7');
  });

  it('should create a user', async () => {
    const createUserInput: CreateUserInput = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      address: '123 Main St',
      phone: '555-555-5555',
      password: 'password123',
    };

    const result = await resolver.createUser(createUserInput);
    expect(result).toEqual(mockUserGraphQL);
    expect(service.create).toHaveBeenCalledWith(createUserInput);
  });

  it('should update a user', async () => {
    const updateUserInput: UpdateUserInput = {
      firstName: 'Jane',
    };

    const result = await resolver.updateUser(
      '608c2570a28f7a1b88b3f5a7',
      updateUserInput,
    );
    expect(result).toEqual(mockUserGraphQL);
    expect(service.update).toHaveBeenCalledWith(
      '608c2570a28f7a1b88b3f5a7',
      updateUserInput,
    );
  });

  it('should delete a user', async () => {
    const result = await resolver.deleteUser('608c2570a28f7a1b88b3f5a7');
    expect(result).toEqual(mockUserGraphQL);
    expect(service.delete).toHaveBeenCalledWith('608c2570a28f7a1b88b3f5a7');
  });
});
