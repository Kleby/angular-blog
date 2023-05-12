import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/data-fake'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor( private route: ActivatedRoute){}

  @Input()
  contentPhotoCover: string = "";
  
  @Input()
  contentTitle: string = "";

  @Input()
  contentSubTitle: string = ""

  @Input()
  contentDescription: string = "";

  private id: string | null = ""

  setValuesToComponent( id:string | null){
    const res = dataFake.filter( data => data.id === id )[0];

    try {
      this.contentPhotoCover = res.photoCover;
      this.contentTitle = res.title;
      this.contentDescription = res.description;
      this.contentSubTitle= res.subTitle
    } catch (error) {
      console.error("Não é possível capturar os dados. "+error);
    
    }
  }
  
  ngOnInit(): void{
    this.route.paramMap.subscribe((value:any) => this.id = value.get("id"));
    this.setValuesToComponent(this.id);
  }
}
