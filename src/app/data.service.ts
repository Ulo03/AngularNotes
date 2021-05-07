import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Note } from "./note";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  subject = new Subject();
  observable = this.subject.asObservable();
  url = "http://localhost:2403/notes/";

  constructor(public http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url);
  }

  getNote(id: string): Observable<Note> {
    return this.http.get<Note>(this.url + id);
  }

  deleteNote(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  createNote(title: string, body: string): Observable<any> {
    return this.http.post(this.url, { title, body })
  }

  updateNote(id:string, title: string, body: string): Observable<any> {
    return this.http.put(this.url + id, { title, body })
  }

  refreshAll(): void {
    this.subject.next({ cmd: "refreshAll" });
  }
}
