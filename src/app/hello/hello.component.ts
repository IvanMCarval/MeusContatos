import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit{

  @Input() name: string = 'CDFs';

  constructor () {}

  ngOnInit(): void {
  }

  clicked (): void {
    window.alert('Opa, você me clicou!');
  }

}
