import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { EpisodePageComponent } from './pages/episode-page/episode-page.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { LoginComponent } from './pages/login/components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'characters',component: CharactersComponent},
  { path: 'locations', component: LocationsComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'characters/:id', component: CharacterPageComponent },
  { path: 'locations/:id', component: LocationPageComponent },
  { path: 'episodes/:id', component: EpisodePageComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
