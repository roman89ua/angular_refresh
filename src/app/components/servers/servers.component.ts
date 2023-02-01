import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  servers = ['Server #1', 'Server #2'];
  serverCreationStatus: string = 'No server created';
  serverName: string = '';

  wasServerCreated: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onCreateServer() {
    this.wasServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created. Server name - ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    const target = event.target as HTMLInputElement;
    this.serverName = target.value;
  }
}
