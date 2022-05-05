import { Component, OnInit, Query } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  array:Array<any> = [
    {   photo: "/assets/images/im1.jpg" },
    {  photo: "/assets/images/im2.jpg" },
    {  photo: "/assets/images/im3.jpg" },
    { photo: "/assets/images/im4.jpeg" },
  ];
  array1:Array<any> = [
    {  photo: "/assets/images/plans.png",text:"location: Sousse,Kantaoui" },
    {  photo: "/assets/images/home.png",text:"Surface: 130m²" },
    {  photo: "/assets/images/plans.png",text:"pices: 5 rooms" },


  ];

idParams: any
  constructor(private parms:ActivatedRoute) {
    this.parms.params.subscribe(query=> {
      return this.idParams=query['id']
  }

)}
  ngOnInit(): void {

  }


}
