import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  qA: any;
  categories: any;
  data: any;

  constructor(private myService: QuestionService) { }

  ngOnInit(): void {
    this.myService.getQA().subscribe((res: any) => {
      this.getQsAndAs(res.questions);
      this.getCategories(res.categories)
    })
  }

  getQsAndAs(questionsArray: any) {
    this.qA = questionsArray
    console.log("QAs: ", this.qA);
  }
  getCategories(categoriesArray: any) {
    this.categories = categoriesArray
    console.log("Categories: ", this.categories);
  }

}
