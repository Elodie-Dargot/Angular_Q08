import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  onomatopiaList!: string[];

  ngOnInit(): void {
    this.onomatopiaList = []
  }

  onReceiveNewOnomatopia(event: string): void{
    this.onomatopiaList.push(event);
    console.log(this.onomatopiaList)
  }
}
