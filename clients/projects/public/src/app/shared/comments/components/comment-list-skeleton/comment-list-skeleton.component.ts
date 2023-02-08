import { NgFor, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';

import { CommentSkeletonComponent } from '../comment-skeleton/comment-skeleton.component';

@Component({
  selector: 'vsp-comment-list-skeleton',
  templateUrl: './comment-list-skeleton.component.html',
  styleUrls: ['./comment-list-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommentSkeletonComponent,
    NgFor,
    NgIf,
    NzGridModule,
  ]
})
export class CommentListSkeletonComponent { }
