import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Case, Media, Team, TeamAnnouncement } from '../entities';
import { CasesSearchFilter, Page, PageRequest, TeamAnnouncementsSearchFilter } from '../models';
import { TeamVideosSearchFilter } from '../models/search-filters/team-videos-search-filter.model';

import { AbstractCrudService } from './abstract-crud.service';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class TeamsService extends AbstractCrudService<Team, string> {
  private static readonly _endpointSlug: string = 'teams';

  constructor(
    protected environmentService: EnvironmentService,
    protected httpClient: HttpClient
  ) {
    super(httpClient, environmentService, TeamsService._endpointSlug);
  }

  public searchAnnouncements(teamId: string, searchFilter: TeamAnnouncementsSearchFilter, pageRequest: PageRequest): Observable<Page<TeamAnnouncement>> {
    const queryParams: { [key: string]: string } = {
      searchKeywords: searchFilter.searchKeywords || '',
      startDate: searchFilter?.startDate?.toISOString() || '',
      endDate: searchFilter?.endDate?.toISOString() || '',
      size: pageRequest.size.toString(),
      index: pageRequest.index.toString(),
      column: pageRequest?.sort?.column?.toString() || '',
      direction: pageRequest?.sort?.direction?.toString() || ''
    };
    return this.httpClient.get<Page<TeamAnnouncement>>(
      `${this.environmentService.getBaseApiUrl()}/${TeamsService._endpointSlug}/${teamId}/announcements/search`,
      { params: queryParams }
    )
  }

  public searchCases(teamId: string, searchFilter: CasesSearchFilter, pageRequest: PageRequest): Observable<Page<Case>> {
    const queryParams: { [key: string]: string } = {
      searchKeywords: searchFilter.searchKeywords || '',
      startDate: searchFilter?.startDate?.toISOString() || '',
      endDate: searchFilter?.endDate?.toISOString() || '',
      size: pageRequest.size.toString(),
      index: pageRequest.index.toString(),
      column: pageRequest?.sort?.column?.toString() || '',
      direction: pageRequest?.sort?.direction?.toString() || ''
    };
    return this.httpClient.get<Page<Case>>(
      `${this.environmentService.getBaseApiUrl()}/${TeamsService._endpointSlug}/${teamId}/cases/search`,
      { params: queryParams }
    )
  }

  public searchVideos(teamId: string, searchFilter: TeamVideosSearchFilter, pageRequest: PageRequest): Observable<Page<Media>> {
    const queryParams: { [key: string]: string } = {
      searchKeywords: searchFilter.searchKeywords || '',
      startDate: searchFilter?.startDate?.toISOString() || '',
      endDate: searchFilter?.endDate?.toISOString() || '',
      size: pageRequest.size.toString(),
      index: pageRequest.index.toString(),
      column: pageRequest?.sort?.column?.toString() || '',
      direction: pageRequest?.sort?.direction?.toString() || ''
    };
    console.log('searching team videos');
    return this.httpClient.get<Page<Media>>(
      `${this.environmentService.getBaseApiUrl()}/${TeamsService._endpointSlug}/${teamId}/videos/search`,
      { params: queryParams }
    )
  }
}
