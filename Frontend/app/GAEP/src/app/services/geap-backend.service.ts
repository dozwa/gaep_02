import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Datenmodelle
import { ApiResponse, Reference, ReferenceDetail } from '../models/Response';
import { Request } from '../models/Request';

@Injectable({
  providedIn: 'root',
})
export class GeapBackendService {
  private dummyDataResponse = 'dummyData/JSON_sturcture_im.txt'; // Pfad zu deiner JSON-Datei

  constructor(private http: HttpClient) {}

  getAnswer(userRequest: Request): Observable<ApiResponse> {
    return this.getAnswerDummyData();
  }

  getAnswerDummyData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.dummyDataResponse);
  }
}
