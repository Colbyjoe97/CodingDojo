import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { InfoComponent } from './info/info.component';
import { QuoteComponent } from './quote/quote.component';


const routes: Routes = [
  { path: 'new/author', component: CreateComponent },
  { path: 'edit/author/:id', component: EditComponent },
  { path: 'author/:id', component: InfoComponent},
  { path: 'new/quote/:id', component: QuoteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
