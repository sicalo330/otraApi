import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://rickandmortyapi.com/api/character'

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ConexionService {
  dataApi:any

  constructor(private http:HttpClient) { }

  getElements() {
    return this.http.get(url)
  }


}
