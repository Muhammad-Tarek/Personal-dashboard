import { Component, OnInit } from '@angular/core';
import { faBookmark, faCheck, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  faBookmark = faBookmark;
  faCheck = faCheck;
  faBars = faBars;

  constructor() {}

  ngOnInit(): void {}
}
