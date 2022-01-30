import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [{type:'server', name:'Testserver', content: 'Just as test!'}];

  constructor() {}

  onServerAdded(serverData: {serverName:string, serverContent:string}) {
    console.log(' Just Server Added ')
    console.log(serverData.serverName);
    console.log(serverData.serverContent);
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
    console.log(this.serverElements);
  }

  onBlueprintAdded(bluepringData: {serverName: string, serverContent:string}) {
    console.log(' Just Blue Print Added');
    console.log(bluepringData.serverName);
    console.log(bluepringData.serverContent);
    this.serverElements.push({
      type: 'blueprint',
      name: bluepringData.serverName,
      content: bluepringData.serverContent
    });
    console.log(this.serverElements);
 }
}
