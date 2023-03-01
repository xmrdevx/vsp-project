import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

import { BaseComment } from '@vsp/core';

@Component({
  selector: 'vsp-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule
  ]
})
export class CommentFormComponent {
  @Output()
  public submitComment: EventEmitter<BaseComment> = new EventEmitter<BaseComment>;

  public commentForm: UntypedFormGroup = new UntypedFormGroup({
    message: new FormControl('', [Validators.required]) 
  });

  public submit(comment: BaseComment): void {
    if (this.commentForm.invalid) return;
    this.submitComment.emit(comment);
    this.commentForm.reset();
  }
}
