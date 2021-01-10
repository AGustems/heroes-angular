import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Hero, HeroesService} from '../../services/heroes.service'
import {Router} from '@angular/router'

@Component({selector: 'app-searcher', templateUrl: './searcher.component.html'})
export class SearcherComponent implements OnInit {
    heroes : any[] = []
    term : string = '';
    originalHeroes: Hero[] = this._heroesService.getHeroes();

    constructor(private _activatedRoute : ActivatedRoute, private _heroesService : HeroesService, private router : Router) {}

    ngOnInit() : void {
        this
            ._activatedRoute
            .params
            .subscribe(params => {
                this.heroes = this
                    ._heroesService
                    .searchHero(params['term'])
                this.term = params['term']
            })
    }

    public seeHero(name : string) {
      let index;
      this.originalHeroes.forEach( hero => {
        if(hero.name === name){
          index = this.originalHeroes.indexOf(hero)
        }
      });
      this.router.navigate(['/hero', index])
    }
}
