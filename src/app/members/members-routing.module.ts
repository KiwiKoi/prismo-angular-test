import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberListComponent } from './member-list/member-list.component';
import { MemberComponent } from './member/member.component';
import { FormComponent } from '../form/form.component';

const membersRoutes: Routes = [
  {
    path: 'members-list',
    component: MemberListComponent,
    data: { animation: 'members' },
  },
  {
    path: 'member/:id',
    component: MemberComponent,
    data: { animation: 'member' },
  },
  {
    path: 'create-member',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(membersRoutes)],
  exports: [RouterModule],
})
export class MembersRoutingModule {}
