import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { MeteoComponent } from './meteo/meteo.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: 'meteo', component: MeteoComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'cats', component: CatComponent},
  {
    path: '',
    redirectTo: 'meteo',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
