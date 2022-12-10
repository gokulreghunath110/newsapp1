import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }

  fetchNews=()=>{

return this.http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9b6ac262eea44bcbbf80ae1b064f631d")

  }
}
