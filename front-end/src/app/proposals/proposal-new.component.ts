import { Component } from '@angular/core';
import { Proposal } from './proposal.model';

@Component({
  moduleId: module.id,
  selector: 'proposal-new',
  styleUrls: ['./proposal-new.component.css'],
  templateUrl: 'proposal-new.html'
})
export class ProposalNewComponent {
  proposal: Proposal = new Proposal;

  get estimatedTotal() { return this.proposal.hourly_rate * this.proposal.estimated_hours; }
}
