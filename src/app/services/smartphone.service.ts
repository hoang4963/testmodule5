import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Smartphone} from "../models/smartphone";
const API_URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Smartphone[]> {
    return this.httpClient.get<Smartphone[]>(API_URL + `/products`);
  }
  saveSmartphone(smartphone: Smartphone): Observable<Smartphone> {
    return this.httpClient.post<Smartphone>(API_URL + `/products`, smartphone);
  }
  findById(id: number): Observable<Smartphone> {
    return this.httpClient.get<Smartphone>(`${API_URL}/products/${id}`);
  }
  deleteSmartphone(id: number): Observable<Smartphone> {
    return this.httpClient.delete<Smartphone>(`${API_URL}/products/${id}`);
  }
  updateSmartphone(id: number, smartphone: Smartphone): Observable<Smartphone> {
    return this.httpClient.put<Smartphone>(`${API_URL}/products/${id}`, smartphone);
  }
}
