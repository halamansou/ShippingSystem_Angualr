import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LayoutComponent } from './Components/layout/layout.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));