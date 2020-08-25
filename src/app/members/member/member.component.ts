import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { MemberService } from '../member.service';
import { Member } from '../member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  member$: Observable<Member>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MemberService
  ) {}

  ngOnInit() {
    this.member$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getMember(params.get('id')))
    );
  }

  gotoMembers(member: Member) {
    const memberId = member ? member.id : null;
    this.router.navigate(['/members-list', { id: memberId, foo: 'foo' }]);
  }
}
