import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual1',
  templateUrl: './individual1.component.html',
  styleUrls: ['./individual1.component.scss'],
})
export class Individual1Component implements OnInit {
  username: string = '';

  constructor() {}

  ngOnInit(): void {}
}
