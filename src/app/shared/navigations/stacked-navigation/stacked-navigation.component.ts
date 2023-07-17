import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/configurations/navigation-meniu/menu-item';
import { Menus } from 'src/app/configurations/navigation-meniu/navigation-menus';
import { AccountResponse } from 'src/app/features/accounts-management/core/interfaces/account-response';


@Component({
  selector: 'app-stacked-navigation',
  templateUrl: './stacked-navigation.component.html',
  styleUrls: ['./stacked-navigation.component.scss']
})
export class StackedNavigationComponent {
  @Input() public loggedInUser$ : Observable<AccountResponse> | undefined;
  public menu: MenuItem[] = [];
  
  public constructor() {
    this.menu = Menus.administratorMenuItems;
  }
}
