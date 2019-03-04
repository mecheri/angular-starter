import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  routeParams;

  /**
   * Creates an instance of ErrorComponent.
   * @param {Router} router
   * @param {ActivatedRoute} activatedRoute
   * @memberof ErrorComponent
   */
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routeParams = this.activatedRoute.snapshot.queryParams;
  }

  home() {
    this.router.navigate(['home']);
  }
}
