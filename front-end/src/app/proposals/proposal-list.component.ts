import { Component } from '@angular/core';
import { Proposal } from './proposal.model';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  styleUrls: ['./proposal-list.component.css'],
  templateUrl: 'proposal-list.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(1234, 'Jim Stevens', 'http://www.yahoo.com', 40, 50, 2, 'abc@abc.com');
  proposalTwo: Proposal = new Proposal(1234, 'Jim Stevens', 'http://www.yahoo.com', 40, 50, 2, 'abc@abc.com');
  proposalThree: Proposal = new Proposal(1234, 'Jim Stevens', 'http://www.yahoo.com', 40, 50, 2, 'abc@abc.com');
  proposalFour: Proposal = new Proposal(1234, 'Jim Stevens', 'http://www.yahoo.com', 40, 50, 2, 'abc@abc.com');
  proposalFive: Proposal = new Proposal(1234, 'Jim Stevens', 'http://www.yahoo.com', 40, 50, 2, 'abc@abc.com');
  proposals: Proposal[] = [];

  constructor() {
    this.proposals.push(this.proposalOne, this.proposalTwo, this.proposalThree, this.proposalFour, this.proposalFive);
  }
}
