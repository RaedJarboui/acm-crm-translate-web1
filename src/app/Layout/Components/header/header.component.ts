import {Component, HostBinding} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {ThemeOptions} from '../../../theme-options';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  faEllipsisV = faEllipsisV;

  constructor(public globals: ThemeOptions,public translate: TranslateService) {
  }

  // @HostBinding('class.isActive')
  // get isActiveAsGetter() {
  //   return this.isActive;
  // }

  // isActive: boolean;

  // @select('config') public config$: Observable<any>;

  // toggleSidebarMobile() {
  //   this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  // }

  // toggleHeaderMobile() {
  //   this.globals.toggleHeaderMobile = !this.globals.toggleHeaderMobile;
  // }


  @HostBinding('class.isActive')
  get isActiveAsGetter() {
    return this.isActive;
  }

  isActive: boolean;

  @select('config') public config$: Observable<any>;

  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  }

  toggleHeaderMobile() {
    this.globals.toggleHeaderMobile = !this.globals.toggleHeaderMobile;
  }

}
