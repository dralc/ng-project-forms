import {
  Component,
  OnInit
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(f: NgForm) {
    if (f.invalid) { return; }

    const val = f.value;
    const newIngredient = new Ingredient(val.name, val.amount);
    this.slService.addIngredient(newIngredient);
  }

}
