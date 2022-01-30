import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

   @Input() element: { type: string, name: string, content: string };

  constructor() {
   }

  ngOnInit() {
    console.log('This is the server element Component');
    console.log(this.element.name);
    console.log(this.element.content);
  }

}
