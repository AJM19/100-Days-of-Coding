import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../api-http-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value = "";

  word: any;
  definition: any;
  phonetics: any;

  constructor(private httpService: ApiHttpService) { }

  ngOnInit(): void {
  }

  searchDictionary() {
    const value = this.httpService.getWord(this.value).subscribe((data: any) => {
      this.word = (data[0].word).toUpperCase();
      this.definition = data[0].meanings.definition
      console.log(data[0].meanings);
    },
      (error: any) => {
        this.word =
          console.log('error caught in component: ', error)
      });
    console.log(value);
  }

}
