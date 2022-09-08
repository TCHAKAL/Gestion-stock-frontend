import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent implements OnInit {

  @Input()
  isNouveauVisible: boolean = true;
  @Input()
  isImporterVisible: boolean = true;
  @Input()
  isExporterVisible: boolean = true;
  @Output()
  clickEnvent = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  bouttonNouveauClick(): void {
    this.clickEnvent.emit();
  }

}
