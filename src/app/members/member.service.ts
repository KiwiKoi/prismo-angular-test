import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Member } from './member';
import { MEMBERS } from './membersdata';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor() {}

  getMembers(): Observable<Member[]> {
    return of(MEMBERS);
  }

  getMember(id: number | string) {
    return this.getMembers().pipe(
      map((members: Member[]) => members.find((member) => member.id === +id))
    );
  }
}
