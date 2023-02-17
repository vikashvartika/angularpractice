import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  //data.sessionID = gs.getSessionID();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateFunction() {
    this.router.navigateByUrl('/rawvalue');
  }

}
