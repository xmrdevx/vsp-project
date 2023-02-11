import { EnrichBodyWithTenantInterceptor } from './enrich-body-with-tenant.interceptor';

describe('EnrichBodyWithTenantInterceptor', () => {
  it('should be defined', () => {
    expect(new EnrichBodyWithTenantInterceptor()).toBeDefined();
  });
});
