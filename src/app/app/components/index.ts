import {HeaderComponent} from './header/header.component'
import { NotFoundComponent} from './not-found/not-found.component';
import { SidenavListComponent} from './sidenav-list/sidenav-list.component';


export const components: any[] = [
    HeaderComponent,
    NotFoundComponent,
    SidenavListComponent
];

export * from './header/header.component';
export * from './not-found/not-found.component';
export * from './sidenav-list/sidenav-list.component';
