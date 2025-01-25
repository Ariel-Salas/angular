import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http'; // Usa withInterceptors
import { CookieService } from 'ngx-cookie-service';
import { SessionGuard } from '@core/guards/session.guard'; // Importa tu guardián
import { injectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers, // Incluir los proveedores existentes de appConfig
    provideHttpClient(
      withInterceptors([injectSessionInterceptor]) // Registra el interceptor aquí
    ),
    CookieService, // Servicio de cookies
    SessionGuard,  // Agregar el guardián como proveedor
  ],
}).catch((err) => console.error(err));

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
