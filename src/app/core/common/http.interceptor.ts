import {  Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';


import {  Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpCache } from './httpCache';




@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private cache: HttpCache) {}
  intercept(request: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {

    const customReq = request.clone({
      headers: request.headers.set('app-language', 'it').set('Accept', 'text/plain').set('Content-Type', 'application/json')
    });

    let haveCachedResponse: Observable < HttpEvent < any >> = Observable.empty();
    if (request.method === 'GET') {
      const cachedResponse = this.cache.get(request);
      if (cachedResponse) {
        haveCachedResponse = Observable.of(cachedResponse);
      }
    }

    const networkResponse = next.handle(customReq)
      .do((ev: HttpEvent < any > ) => {
        if (ev instanceof HttpResponse) {
          console.log('processing response', ev);
        }
      }).catch(response => {
        if (response instanceof HttpErrorResponse) {
          console.log('Processing http error', response);
        }
        return Observable.throw(response);
      });

    if (request.method !== 'GET') {
      return networkResponse;
    } else {
      networkResponse.do((ev: HttpEvent < any > ) => {
        this.cache.put(request, ev);
      });
      return Observable.concat(haveCachedResponse, networkResponse);
    }
  }
}
