import { makeEnvironmentProviders } from '@angular/core';

import { EnvironmentSettings, VSP_CORE_CONFIGURATION } from './vsp-core-configuration.model';

import { EnvironmentService } from './services/environment.service';
import { CACHE_SERVICE } from './services/cache-service.interface';
import { SessionCacheService } from './services/session-cache.service';
import { MissingService } from './services/missing.service';
import { TeamsService } from './services/teams.service';
import { OffendersService } from './services/offenders.service';
import { MediaService } from './services/media.service';
import { GeocodingService } from './services/geocoding.service';

export const provideVspCoreProviders = (environment: EnvironmentSettings) => makeEnvironmentProviders([
  EnvironmentService,
  GeocodingService,
  MediaService,
  OffendersService,
  TeamsService,
  MissingService,
  {
    provide: VSP_CORE_CONFIGURATION,
    useValue: environment
  },
  {
    provide: CACHE_SERVICE,
    useClass: SessionCacheService
  }
]);
