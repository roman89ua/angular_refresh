import { Component } from '@angular/core';
import { style } from '@angular/animations';

enum ServerStatusEnum {
  offline = 'offline',
  online = 'online',
}

@Component({
  selector: '.app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: ServerStatusEnum;
  serverTitle: string = 'server component';

  constructor() {
    this.serverStatus =
      Math.random() > 0.5 ? ServerStatusEnum.offline : ServerStatusEnum.online;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getServerStatusColor() {
    return this.serverStatus === ServerStatusEnum.online ? 'green' : 'red';
  }

  getServerStatusClass() {
    return this.serverStatus === ServerStatusEnum.online
      ? 'server-available'
      : 'server-not-available';
  }
}
