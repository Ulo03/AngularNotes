import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Note } from '../note';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  note!: Note;
  constructor(private ds: DataService, private route: ActivatedRoute) { }

  updateNote() {
    this.ds.updateNote(this.note.id, this.note.title, this.note.body).subscribe(() => {
      this.ds.refreshAll();
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      if (data.id) {
        this.ds.getNote(data.id).subscribe((data) => {
          this.note = data;
        });
      }
    });
  }

}
