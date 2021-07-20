import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';


const routes: Routes = [
  { path: 'seattle', component: SeattleComponent },
  { path: 'sanjose', component: SanjoseComponent },
  { path: 'burbank', component: BurbankComponent },
  { path: 'dallas', component: DallasComponent},
  { path: 'dc', component: DcComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: "", pathMatch: 'full', redirectTo: "/seattle"}
  // redirects to seattle if nothing comes after localhost:8000
  // { path: "**", component: PageNotFoundComponent }
  // redirects to page not found on any route other than what's listed above

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
