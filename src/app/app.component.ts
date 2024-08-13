import { Component } from '@angular/core';
import { CategoriesTriggerComponent } from './categories/categories-trigger.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CategoriesTriggerComponent],
  template: ` <app-categories-trigger /> `,
})
export class AppComponent {}
