import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  public heroNames: string[] = ['spiderman', 'zorro', 'mujer Maravilla', 'Thor'];
  public borrado?: string = "";

  removeLastHero():void {
    this.borrado = this.heroNames.pop();
  }

}
