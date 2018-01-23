import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";



const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'home/home.module#HomeModule',
    data: {
      title: 'Home'
    }
  }
];
// Here we are exporting our routes
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
