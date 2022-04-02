import { newStub } from '../test/stubs/new.stub';

export const NewsService = jest.fn().mockReturnValue({
	getAll: jest.fn().mockResolvedValue([newStub()]),
	get: jest.fn().mockResolvedValue(newStub()),
	create: jest.fn().mockResolvedValue(new Boolean()),
	update: jest.fn().mockResolvedValue(new Boolean()),
	delete: jest.fn().mockResolvedValue(new Boolean())
});
