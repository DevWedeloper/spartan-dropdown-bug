import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import {
  HlmMenuItemDirective,
  HlmSubMenuComponent,
} from '@spartan-ng/ui-menu-helm';
import { CategoryWithSubcategories } from './categories-trigger.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [BrnMenuTriggerDirective, HlmSubMenuComponent, HlmMenuItemDirective],
  template: `
    @for (category of categories(); track $index) { 
      @if (category.subcategories.length > 0) {
      <button hlmMenuItem [brnMenuTriggerFor]="subcategory">
        {{ category.name }}
      </button>
      } @else {
        <button hlmMenuItem (click)="redirectToCategory(category.id)">
          {{ category.name }}
        </button>
      }
    <ng-template #subcategory>
      <hlm-sub-menu>
        <app-categories [categories]="category.subcategories" />
      </hlm-sub-menu>
    </ng-template>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  categories = input.required<CategoryWithSubcategories[]>();

  protected redirectToCategory(id: number) {
    console.log(id);
  }
}
