import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MemberListComponent } from './member-list/member-list.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { MembersRoutingModule } from './members-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, MembersRoutingModule],
  declarations: [MemberListComponent, MemberCardComponent],
})
export class MembersModule {}
