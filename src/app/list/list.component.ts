import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Note } from '../note';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  notes: Note[] = [];
  filter = "";
  constructor(private ds: DataService) { }

  refreshNotes(): void {
    this.ds.getNotes().subscribe((data) => {
      this.notes = data.filter((e) => { return (this.filter) ? e.title.toLowerCase().includes(this.filter.toLowerCase()) : 1 });
    });
  }

  ngOnInit(): void {
    this.refreshNotes();
    this.ds.observable.subscribe((data: any) => {
      if (data.cmd === "refreshAll") {
        this.refreshNotes();
      }
    });
  }

}
