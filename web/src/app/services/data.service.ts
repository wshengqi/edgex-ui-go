import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
=======
>>>>>>> d08a9c7... init scaffold

@Injectable({
  providedIn: 'root'
})
export class DataService {

<<<<<<< HEAD
  endpoint: string = "/coredata";

  endpointHealthUrl: string = "/api/v1/ping";

  eventCountUrl: string = "/api/v1/event/count";
  readingCountUrl: string = "/api/v1/reading/count";

  constructor(private http: HttpClient) { }

  endpointHealth(): Observable<string> {
    let url = `${this.endpoint}${this.endpointHealthUrl}`;
    return this.http.get<string>(url)
  }

  eventCount(): Observable<number> {
    let url = `${this.endpoint}${this.eventCountUrl}`;
    return this.http.get<number>(url)
  }

  readingCount(): Observable<number> {
    let url = `${this.endpoint}${this.readingCountUrl}`;
    return this.http.get<number>(url)
  }

=======
  constructor() { }
>>>>>>> d08a9c7... init scaffold
}
