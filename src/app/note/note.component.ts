import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note!: Note;
  constructor(private ds: DataService) { }

  deleteNote(id: string): void {
    this.ds.deleteNote(id).subscribe(() => {
      this.ds.refreshAll();
    });
  }

  ngOnInit(): void {
  }

}
