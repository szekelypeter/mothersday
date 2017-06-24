import {Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected short = false;

  protected wrong = false;

  protected nameByClick: string;

  constructor(private router: Router) { }


  private sendName(value: string) {
    this.nameByClick = value;
    if (this.nameByClick.toLowerCase() === "székelyné kota edit" || this.nameByClick.toLowerCase() === "kota edit") {
      this.router.navigate(['./box']);
      this.short = false;
      this.wrong = false;
      return;
    }
    else {
      this.wrong = true;
    }
  }

  ngOnInit() {
  }

}
