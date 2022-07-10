import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-buttons',
  templateUrl: './menu-buttons.component.html',
  styleUrls: ['./menu-buttons.component.scss']
})
export class MenuButtonsComponent implements OnInit {

  constructor(
  ) {
  }

  @Input() url: any;
  @Input() label: any;
  @Input() class: any;

  ngOnInit(): void {
  }

}
