import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from "./users/users.component";
import { UserDetailComponent } from "./users/user-detail/user-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: UsersComponent },
  { path: 'list/:id', component: UserDetailComponent }
];

export const routing = RouterModule.forRoot(routes);