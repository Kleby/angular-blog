import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  photoCover: string = "";
  @Input()
  bigCardTitle: string = "";
  @Input()
  bigCardDescription: string = "";
  @Input()
  bigCardDate: string = "";
  @Input()
  id: string = "";
  
  
  constructor(){}

  acrescentarZero(n: number): string{
    if(n < 10) return (`0${n.toString()}`)
    return (`${n.toString()}`)
  }

  ngOnInit(): void{
    const data = new Date();
    const dia = this.acrescentarZero(data.getDate());
    const mes = data.toLocaleString('default', { month: 'long' });
    const ano = data.getFullYear();
    
    this.bigCardDate = `${dia} de ${mes} de ${ano}`
  }
}
