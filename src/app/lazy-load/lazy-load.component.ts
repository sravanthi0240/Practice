import { Component, HostListener, OnInit } from '@angular/core';
import { LazyloadService } from '../shared/lazyload.service';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.css']
})
export class LazyLoadComponent implements OnInit {
  items: any[] = [];
  page: number = 1;
  loading: boolean = false;
  lastScrollTop: number = 0;

  constructor(private dataService: LazyloadService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    if (this.loading ) return;

    this.loading = true;
    this.dataService.getItems(this.page).subscribe(
      (data) => {
        // console.log('API Response:', data);
        if (data.length > 0) {
          this.items.push(...data);
          this.page++;
        }
        this.loading = false;
      },
      
    );
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = window.scrollY || window.pageYOffset;
    if((window.innerHeight +window.scrollY) >= document.body.offsetHeight){
      this.loadItems();
    }

    if (scrollTop < 100 && scrollTop < this.lastScrollTop) {
      this.loadItems();
    }

    this.lastScrollTop = scrollTop;
  }
}
