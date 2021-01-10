import {Injectable} from '@angular/core';

@Injectable()
export class HeroesService {
    private heroes : Hero[] = [
        {
            name: "Aquaman",
            bio: "A half-Atlantean, half-human who is reluctant to be king of the undersea nation " +
                    "of Atlantis. He possesses superhuman strength and the ability to manipulate the " +
                    "tides, communicate with sea creatures and swim at supersonic speeds.",
            img: "assets/img/aquaman.png",
            appearance: "1941-11-01",
            house: "DC"
        }, {
            name: "Batman",
            bio: "Batman has been Gotham City's protector for decades, CEO of Wayne Enterprises, P" +
                    "atriarch of the Bat Family and veteran member of the Justice League. Batman is t" +
                    "he secret identity of Bruce Wayne. Witnessing the murder of his parents as a chi" +
                    "ld leads him to train himself to physical and intellectual perfection and don a " +
                    "bat-themed costume in order to fight crime. Batman operates in the Batcave, bene" +
                    "ath Wayne Manor assisted by his butler Alfred Pennyworth",
            img: "assets/img/batman.png",
            appearance: "1939-05-01",
            house: "DC"
        }, {
            name: "Daredevil",
            bio: "Blinded in a childhood accident, attorney-at-law Matt Murdock protects Hell's Ki" +
                    "tchen as the masked vigilante, Daredevil. As a boy, Matt Murdock lost his sight—" +
                    "and gained superhuman senses—in an accident that taught him to live without fear" +
                    ".",
            img: "assets/img/daredevil.png",
            appearance: "1964-01-01",
            house: "Marvel"
        }, {
            name: "Hulk",
            bio: "When Bruce Banner changes into the Hulk, he becomes an unstoppable beast of near" +
                    " unlimited strength, power, and destruction. The Hulk’s strength is probably the" +
                    " greatest in the Marvel universe, with many foes falling to his thunderous attac" +
                    "ks. The Hulk is also able to leap great distances traveling for miles before bou" +
                    "nding upwards again.",
            img: "assets/img/hulk.png",
            appearance: "1962-05-01",
            house: "Marvel"
        }, {
            name: "Green Lantern",
            bio: "The Green Lantern name refers to multiple DC super heroes that all gained their " +
                    "powers from an alien ring. The ring grants the wearer the ability to create what" +
                    "ever construct they can imagine in the form of light energy along with the power" +
                    " of flight and a protective aura.",
            img: "assets/img/linterna-verde.png",
            appearance: "1940-06-01",
            house: "DC"
        }, {
            name: "Spider-Man",
            bio: "Peter Parker becomes Spider-man after he is bitten by a radioactive spider. Pete" +
                    "r Parker was simply a high school student living with his Aunt May and Uncle Ben" +
                    ". Once bitten by the spider Peter develops superhero strength and the ability to" +
                    " cling to ceilings and walls like a spider. He also invents his own webbing tool" +
                    "s. After failing to stop the thief that would go on to rob and kill his Uncle Be" +
                    "n, Peter Parker decides it is his responsibility to use his power for good.",
            img: "assets/img/spiderman.png",
            appearance: "1962-08-01",
            house: "Marvel"
        }, {
            name: "Wolverine",
            bio: "He is a mutant who possesses animal-keen senses, enhanced physical capabilities," +
                    " a powerful regenerative ability known as a healing factor, and three retractabl" +
                    "e claws in each hand. Wolverine has been depicted variously as a member of the X" +
                    "-Men, Alpha Flight, and the Avengers.",
            img: "assets/img/wolverine.png",
            appearance: "1974-11-01",
            house: "Marvel"
        }
    ];

    constructor() {}

    public getHeroes() : Hero[] {
        return this.heroes
    }

    public getHero(index : number) : object{
        return this.heroes[index]
    }

    public searchHero(term: string): Hero[]{
        const heroesArr: Hero[] = []
        term = term.toLowerCase();
        
        for (let hero of this.heroes){
            let name = hero.name.toLowerCase();
            if(name.indexOf(term) >= 0){
                heroesArr.push(hero)
            }
        }
        return heroesArr
    }
}

export interface Hero {
    name : string,
    bio : string,
    img : string,
    appearance : string,
    house : string
}