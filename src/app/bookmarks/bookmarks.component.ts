import { Component, OnInit } from '@angular/core';
import { faPlus, faCog } from '@fortawesome/free-solid-svg-icons';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent implements OnInit {
  faPlus = faPlus;
  faCog = faCog;

  bookmarks: Bookmark[];

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit() {
    this.bookmarks = this.bookmarkService.getBookmarks();
  }
}
