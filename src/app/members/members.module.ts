import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MemberListComponent } from './member-list/member-list.component';
import { MemberComponent } from './member/member.component';

import { MembersRoutingModule } from './members-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, MembersRoutingModule],
  declarations: [MemberListComponent, MemberComponent],
})
export class MembersModule {}
