import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home-section/home/home';
import { Nav } from './components/home-section/nav/nav';
import { Catoegories } from './components/home-section/category/category';
import { MainComponent } from './components/home-section/main-component/main-component';
import { Items } from './components/items-section/items/items';
import { NewItems } from './components/items-section/new-items/new-items';
import { Collections } from './components/items-section/collections/collections';
import { About } from './components/about-section/about/about';
import { Footer } from './components/footer-section/footer/footer';

@NgModule({
  declarations: [
    App,
    Home,
    Nav,
    Catoegories,
    MainComponent,
    Items,
    NewItems,
    Collections,
    About,
    Footer,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
