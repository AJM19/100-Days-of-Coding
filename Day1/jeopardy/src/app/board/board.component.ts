import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  qA: any;
  categories: any;
  points: any;

  constructor(private myService: QuestionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.myService.getQA().subscribe((res: any) => {
      this.getCategories(res.categories)
      this.getPoints(res.points)
    })
  }
  getCategories(categoriesArray: any) {
    this.categories = categoriesArray
    console.log("Categories: ", this.categories);
  }
  getPoints(pointsArray: any) {
    this.points = pointsArray
    console.log("Points: ", this.points);
  }

  openSportsDialog(value: any) {
    console.log("Sports Clicked");
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { "value": value, "category": "Sports" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openHistoryDialog(value: any) {
    console.log("History Clicked");
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { "value": value, "category": "History" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openPopCultureDialog(value: any) {
    console.log("Pop-Culture Clicked");
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { "value": value, "category": "PopCulture" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openFoodDialog(value: any) {
    console.log("Food Clicked");
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { "value": value, "category": "Food" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openScienceDialog(value: any) {
    console.log("Science Clicked");
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { "value": value, "category": "Science" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
