import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable,throwError  } from 'rxjs';
import { category } from '../models/interfaces/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private REST_API_SERVER ="/api/categoria";
  constructor(private http: HttpClient) { }


  getAllCategory() {

    return this.http.get<any>(this.REST_API_SERVER);
   
    }


   

  }






