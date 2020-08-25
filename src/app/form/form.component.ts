import { Component } from '@angular/core';
import { Member } from '../members/member-class';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  model = new Member('', '', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newMember() {
    this.model = new Member('', '', '', '');
  }
}
