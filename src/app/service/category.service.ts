import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { category } from '../models/interfaces/categoria';
import { environment } from './../../../././src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategory (){
    return this.http.get<category[]>(`${environment.url_api}/categoria`);  
  }



}


