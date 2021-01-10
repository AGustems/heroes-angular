import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './components/home/home.component'
import {AboutComponent} from './components/about/about.component'
import { HeroesComponent } from './components/heroes/heroes.component'

const APP_ROUTES: Routes = [
    // Routes inside the app
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    // Default route if a route is not found
    {path: '**', pathMatch: 'full', redirectTo: ''}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true})