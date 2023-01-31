import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any>(`${environment.urlApi}song`)
  }

  store(data:any){
    console.log(data);
    return this.http.post<any>(`${environment.urlApi}song`, data);
  }

  eliminar(id:number){
    return this.http.delete<any>(`${environment.urlApi}song/${id}`);
  }
}
