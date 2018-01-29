import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// Pages
import { AppComponent } from './app.component';

// Layout
import { FooterComponent } from './layout/footer/footer.component';

// Shared
import { ButtonComponent } from './shared/button/button.component';

// Services
import { GlobalService } from './services/global.service';

// Useful
import { UseNgScrollComponent } from './useful/use-ng-scroll/use-ng-scroll.component';
import { UseLanguageSwitchComponent } from './useful/use-language-switch/use-language-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    UseNgScrollComponent,
    UseLanguageSwitchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot()
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
