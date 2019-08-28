import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";
import {ShareButtonsModule, ShareButtonsService} from "ng2-sharebuttons";
import { CommonModule } from "@angular/common";
import {PuzzleService} from "./puzzle/puzzle.service";

import {AppComponent} from './app.component';
import {BoardComponent} from './board/board.component';
import {StoreModule} from "@ngrx/store";
import {stateReducer} from "./store/state.reducer";
import {MenuComponent} from './menu/menu.component';
import {GalleryComponent} from './gallery/gallery.component';
import {HomeComponent} from './home/home.component';
import {GameComponent} from './game/game.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    BoardComponent,
    MenuComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent}
    ]),
    StoreModule.forRoot({state: stateReducer}),
    ShareButtonsModule.forRoot()
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    PuzzleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
