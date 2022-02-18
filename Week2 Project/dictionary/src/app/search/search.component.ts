import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../api-http-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private httpService: ApiHttpService) { }

  ngOnInit(): void {
    const value = this.httpService.getWord("kloperlit").subscribe((data: any) => {
      console.log(data);
    },
      (error: any) => {
        console.log('error caught in component: ', error)
      });
    console.log(value);
  }

}
