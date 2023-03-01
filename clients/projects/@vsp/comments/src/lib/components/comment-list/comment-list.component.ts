import { NgFor, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { FlattenPageCollectionPipe } from '@vsp/pipes';
import { BaseComment, Page } from '@vsp/core';

import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'vsp-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommentComponent,
    FlattenPageCollectionPipe,
    NgFor,
    NgIf,
    NzCardModule,
    NzEmptyModule,
    NzGridModule,
  ]
})
export class CommentListComponent {
  @Input()
  public loadedPages: Page<BaseComment>[] | null = null;
}
