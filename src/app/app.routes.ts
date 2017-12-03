import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPage} from './dashboard/dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
export const routedComponents: any[] = [
  DashboardPage,
];
