import { Component, OnInit } from '@angular/core';
import { Document } from './documents.model';
import { DocumentsService } from './documents.service';
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'documents-cmp',
  styleUrls: ['./documents.css'],
  templateUrl: './documents.html'
})
export class DocumentsComponent {
  pageTitle: string  = 'Document Dashboard';
  documents: Document[];

  constructor(private documentsService: DocumentsService) {
    documentsService.getDocuments().subscribe((documents) => {
      this.documents = documents;
    });
  }

  ngOnInit() {
    let timer = Observable.timer(0, 5000)
    timer.subscribe(_ => this.getDocuments());
  }

  getDocuments(): void {
    this.documentsService.getDocuments().subscribe((documents) => {
      this.documents = documents;
    })
  }
}
