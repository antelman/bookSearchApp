import { UsernameGuard } from './core/guards/username.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome-page'
  },
  {
    path: 'welcome-page',
    loadChildren: () => import('./pages/welcome-page/welcome-page.module').then((m) => m.WelcomePageModule),
  },
  {
    path: 'search-page',
    loadChildren: () => import('./pages/search-page/search-page.module').then(m => m.SearchPageModule),
    canActivate: [UsernameGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
