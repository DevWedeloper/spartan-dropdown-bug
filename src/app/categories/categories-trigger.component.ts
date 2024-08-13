import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import { HlmMenuComponent } from '@spartan-ng/ui-menu-helm';
import { CategoriesComponent } from './categories.component';

export type CategoryWithSubcategories = {
  id: number;
  name: string;
  parentCategoryId: number | null;
  subcategories: CategoryWithSubcategories[];
};

@Component({
  selector: 'app-categories-trigger',
  standalone: true,
  imports: [
    BrnMenuTriggerDirective,
    HlmButtonDirective,
    HlmMenuComponent,
    CategoriesComponent,
  ],
  template: `
    <button
      size="sm"
      variant="ghost"
      [brnMenuTriggerFor]="categoriesTpl"
      hlmBtn
    >
      Categories
    </button>
    <ng-template #categoriesTpl>
      <hlm-menu class="w-40">
        <app-categories [categories]="categories" />
      </hlm-menu>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesTriggerComponent {
  protected categories = [
    {
      id: 1,
      name: 'Electronics',
      parentCategoryId: null,
      subcategories: [
        {
          id: 3,
          name: 'Smartphones',
          parentCategoryId: 1,
          subcategories: [],
        },
        {
          id: 4,
          name: 'Laptops',
          parentCategoryId: 1,
          subcategories: [],
        },
      ],
    },
    {
      id: 2,
      name: 'Home Appliances',
      parentCategoryId: null,
      subcategories: [
        {
          id: 5,
          name: 'Refrigerators',
          parentCategoryId: 2,
          subcategories: [],
        },
        {
          id: 6,
          name: 'Washing Machines',
          parentCategoryId: 2,
          subcategories: [],
        },
      ],
    },
  ];
}
