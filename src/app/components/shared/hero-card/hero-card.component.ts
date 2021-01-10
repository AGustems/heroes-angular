import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit {
  
  @Input() hero: any = {};
  @Input() index: number = 0;
  @Output() selectedHero: EventEmitter<number>;

  constructor(private router: Router) {
    this.selectedHero = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public seeHero(){
    this.selectedHero.emit(this.index);
  }
}
