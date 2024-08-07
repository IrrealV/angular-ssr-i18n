import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { IfStmt } from '@angular/compiler';
import {
  afterNextRender,
  afterRender,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  public locales = [
    { value: 'es', name: 'Español' },
    { value: 'en', name: 'English' },
  ];

  constructor(private translateService: TranslateService) {}

  changeLanguage(event: Event) {
    if (event.target) {
      const changeEvent = event.target as HTMLInputElement;
      this.translateService.use(changeEvent.value);
    }
  }
}
