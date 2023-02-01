import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual2',
  templateUrl: './individual2.component.html',
  styleUrls: ['./individual2.component.scss'],
})
export class Individual2Component implements OnInit {
  isSecretPasswordDisplayed: boolean = false;
  buttonClicksLog: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  onDisplayDetails() {
    this.isSecretPasswordDisplayed = !this.isSecretPasswordDisplayed;
    const currentTime = new Date().toLocaleString();
    this.buttonClicksLog.push(currentTime.toString());
  }
}
