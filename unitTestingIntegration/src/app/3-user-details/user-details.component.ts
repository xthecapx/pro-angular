import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === 0)
        this.router.navigate(['not-found']);
    });
  }

  // 1. Check if navigate is call with the right arguments
  // 2. Ensure that you have a property route
  // Use a real router object: Feels like you are testing the router core
  // 1. Not recommended
  save() {
    this.router.navigate(['users']);
  }
}

