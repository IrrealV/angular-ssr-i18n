import {
  afterNextRender,
  afterRender,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { IfStmt } from '@angular/compiler';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-ssr-i18n';

  constructor() {
    const platform = inject(PLATFORM_ID);

    /* if (isPlatformBrowser(platform)) {
      console.log(localStorage.getItem('test'));
    } */

    afterNextRender(() => {
      console.log(localStorage.getItem('test'));
    });

    if (isPlatformServer(platform)) {
      console.log('Estoy en el server');
    }
  }
}
