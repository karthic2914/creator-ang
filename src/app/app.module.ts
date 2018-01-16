import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreatorComponent } from './creator/creator.component';
import { MakerService } from './maker.service';
import { RouterModule }   from '@angular/router';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorComponent,
    DetailsComponent
  ],
  imports: [
    RouterModule.forRoot([
 {
   path: '',
   redirectTo: 'markers',
   pathMatch: 'full'
 },
 {
   path: 'markers',
   component: CreatorComponent
 } ,
 {
   path: 'details/:id' ,
   component: DetailsComponent
 }
]),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MakerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
