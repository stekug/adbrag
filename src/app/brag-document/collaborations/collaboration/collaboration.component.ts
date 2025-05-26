import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Collaboration } from '../../../models/brag-document.model';
import { UiIconComponent } from '../../../shared/ui-icon/ui-icon.component';

@Component({
  selector: 'app-collaboration',
  imports: [DatePipe, UiIconComponent],
  template: `
    <li
      class="rounded-md bg-primary-grey drop-shadow-md/30 grid grid-cols-[1.2fr_2.5fr_1fr] min-h-30"
    >
      <div class="flex items-center gap-2 p-4 bg-primary-adblue rounded-l-md">
        <app-ui-icon
          [iconName]="getIconName()"
          size="large"
          class="p-2"
          color="var(--color-primary-white)"
        />
        <strong class="text-primary-white font-bold text-lg">{{ collaboration().type }}</strong>
      </div>
      <p class="bg-primary-white p-4">{{ collaboration().description }}</p>
      <div class="p-4 flex flex-col justify-between bg-primary-adblue text-primary-white">
        <p class="date">{{ collaboration().date | date : 'longDate' }}</p>
        <p class="font-bold">{{ collaboration().relatedTo }}</p>
      </div>
    </li>
  `,
  styles: ``,
})
export class CollaborationComponent {
  collaboration = input.required<Collaboration>();

  getIconName() {
    switch (this.collaboration().type) {
      case 'Code Review':
        return 'material-symbols:share-reviews';
      case 'Internal Talk':
        return 'ri:kakao-talk-fill';
      case 'Mentoring':
        return 'material-symbols:school-rounded';
      case 'Monitoring Improvement':
        return 'streamline:group-meeting-call-solid';
      case 'Meeting Notes':
        return 'material-symbols-light:speaker-notes-rounded';
      case 'Answered Questions':
        return 'ic:twotone-question-answer';
      default:
        return 'fluent:table-default-32-filled';
    }
  }
}
