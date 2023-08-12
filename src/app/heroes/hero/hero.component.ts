import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "Ironman";
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  toString() {
    return this.name + '-' + this.age;
    //return `${this.name}-${this.age}`;
  }

  changeName(): void {
    this.name = "Laura";
  }
  changeAge(): void {
    this.age = 55;
  }
  reset(): void {
    this.name="Ironman";
    this.age = 45;
  }



}
