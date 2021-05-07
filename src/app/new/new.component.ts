import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  title = "";
  body = "";
  constructor(private ds: DataService) { }

  addNote(): void {
    if (this.title && this.body) {
      this.ds.createNote(this.title, this.body).subscribe(() => {
        this.ds.refreshAll();
      });
    }
  }

  ngOnInit(): void {
  }

}
