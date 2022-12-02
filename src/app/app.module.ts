import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { foodComponent } from './food/food.component';
import { AadFoodComponent } from './aad-food/aad-food.component';
import { FormsModule } from '@angular/forms';
import { UpdateFoodComponent} from './update-food/update-food.component';
import { HttpClientModule} from '@angular/common/http';
import { RechercheParChoixComponent } from './recherche-par-choix/recherche-par-choix.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import{Ng2SearchPipeModule}from'ng2-search-filter';
import { ListeChoixComponent } from './liste-choix/liste-choix.component';
import { UpdateChoixComponent } from './update-choix/update-choix.component';

@NgModule({
  declarations: [
    AppComponent,
    foodComponent,
    AadFoodComponent,
    UpdateFoodComponent,
    RechercheParChoixComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeChoixComponent,
    UpdateChoixComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
