import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/data-fake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input()
  photoCover: string = ""
  
  @Input()
  smallCardTitle : string = ""

  @Input()
  smallCardSubTitle: string = "";

  @Input()
  id: string | null = ""
  
  @Input()
  smallCardReleaseDate: string = ""

}
