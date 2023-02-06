import { HasRolesGuard } from './has-roles.guard';

describe('HasRolesGuard', () => {
  it('should be defined', () => {
    expect(new HasRolesGuard()).toBeDefined();
  });
});
