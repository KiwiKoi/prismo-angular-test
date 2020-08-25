import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberListComponent } from './member-list/member-list.component';

const membersRoutes: Routes = [
  {
    path: 'members-list',
    component: MemberListComponent,
    data: { animation: 'members' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(membersRoutes)],
  exports: [RouterModule],
})
export class MembersRoutingModule {}
