import { HttpInterceptorFn } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const injectSessionInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService); // Inyecta el servicio de cookies

  try {
    const token = cookieService.get('token'); // Obtén el token de las cookies
    const newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`, // Agrega el token al encabezado
      },
    });

    return next(newReq); // Pasa la solicitud clonada al siguiente manejador
  } catch (e) {
    console.error('🔴 Error en el interceptor:', e);
    return next(req); // En caso de error, pasa la solicitud original
  }
};
