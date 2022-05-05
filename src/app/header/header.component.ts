import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  array:Array<any> = [
    {   text: "villa" },
    {  text :"apartment" },
    {  text: "office" },
    { text: "garage" },
  ];
  isVisible = false;
  constructor(private router: Router) {}
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  gotopageprofil(): void {
    this.router.navigate(['/profil']);
  }
  gotopagefavoris(): void {
    this.router.navigate(['/favoris']);
  }
  gotopagemessages(): void {
    this.router.navigate(['/messages']);
  }

  navigator(route : string): void {
    this.router.navigate([route]);
    this.isVisible = false;

  }


  ngOnInit(): void {}
}
