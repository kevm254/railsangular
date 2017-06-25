import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Proposal } from './proposal.model';

@Component({
  moduleId: module.id,
  selector: 'proposal-show',
  styleUrls: ['./proposal-show.component.css'],
  templateUrl: 'proposal-show.html'
})
export class ProposalShowComponent implements OnInit {
  id: number;
  routeId: any;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeId = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
}
