import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  serverCreationStatus = "No server  was created";
  serverName = "Test server";
  userName = "";
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];


  class = 'class="rounded-md bg-indigo-400 cursor-not-allowed m-3  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"';
  // class = 'class="rounded-md bg-indigo-600 cursor-not-allowed  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"';
  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
      if (this.serverName !== "") {
        this.class = 'class="rounded-md bg-indigo-600 m-3  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"';
      }
    }, 2000)
  }

  ngOnInit() {

  }

  onCreateServer() {

    this.serverCreationStatus = "Server was created. Name is " + this.serverName + '. Created by ' + this.userName;
    this.serverCreated = true;
    this.servers.push(this.serverName);


  }

  onUpdateServreName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
