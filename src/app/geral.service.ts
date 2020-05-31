import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable()
export class GeralService {

  url = environment.URL;

  httpClient: HttpClient;
  headers: HttpHeaders;

  constructor(httpClient: HttpClient, private _router: Router) {
    this.httpClient = httpClient;
  }
}
