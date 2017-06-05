import { ControlErrors } from './add-developer/control-errors';
import { EmailValidator } from './add-developer/email-validator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common'

import { AppComponent } from './app.component';
import { Home} from './home/home.component';
import { AddDeveloper } from './add-developer/add-developer.component';

const routeModule = RouterModule.forRoot([
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'dev-add',
    component: AddDeveloper
  },
  {
    path: 'add-dev',
    redirectTo: 'dev-add'
  }
], {preloadingStrategy: PreloadAllModules});

@NgModule({
  declarations: [
    AppComponent,
    Home,
    AddDeveloper,
    EmailValidator,
    ControlErrors
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routeModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
