import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable,throwError  } from 'rxjs';
import { environment } from 'src/environments/environment';
import { category } from '../models/interfaces/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private BASE_URL = environment.url_api;
  private ITEMS_URL = this.BASE_URL + 'api/categoria';


  constructor(private http: HttpClient) { }


  getAllCategory(): Observable<any> {

    return this.http.get<any>(this.ITEMS_URL);

    }

  }






