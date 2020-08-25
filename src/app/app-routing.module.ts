import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { MemberListComponent } from './members/member-list/member-list.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'members-list',
    component: MemberListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
