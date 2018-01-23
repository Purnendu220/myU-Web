import { HomeComponent } from './home.component';
import { RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
     data: {
        title: 'Classes List'
      }
  }
];

export const homeRouting = RouterModule.forChild(routes);
