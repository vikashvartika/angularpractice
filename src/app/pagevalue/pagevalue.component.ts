import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pagevalue',
  templateUrl: './pagevalue.component.html',
  styleUrls: ['./pagevalue.component.css']
})
export class PagevalueComponent implements OnInit {

  details: { year: number; part: string; greeting: string | null }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.details = {
      part: this.route.snapshot.queryParams['part'],
      year: this.route.snapshot.queryParams['year'],
      greeting: this.route.snapshot.fragment
    }
  }

}
