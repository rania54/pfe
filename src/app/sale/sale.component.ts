import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  cards: Array<any> = [
    { id: 1, title: "produt 21", price: "Appartement à louer , Kantaoui, Sousse s+3 | 130m² 140.000 DT", photo: "/assets/images/im1.jpg" },
    { id: 2, title: "produt 21", price: "100 dt", photo: "/assets/images/im2.jpg" },
    { id: 3, title: "produt 21", price: "100 dt", photo: "/assets/images/im3.jpg" },
    { id: 4, title: "produt 1", price: "100 dt", photo: "/assets/images/im4.jpeg" },
    { id: 5, title: "produt 21", price: "100 dt", photo: "https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2021/08/homebyme-homepage-gallery-2-1.png" },
    { id: 6, title: "produt 51", price: "100 dt", photo: "https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2021/08/homebyme-homepage-gallery-2-1.png" },
    { id: 7, title: "produt 21", price: "100 dt", photo: "https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2021/08/homebyme-homepage-gallery-2-1.png" },
    { id: 8, title: "produt 71", price: "100 dt", photo: "https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2021/08/homebyme-homepage-gallery-2-1.png" },
    { id: 9, title: "produt 21", price: "100 dt", photo: "https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2021/08/homebyme-homepage-gallery-2-1.png" },

  ]

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    console.log(this.cards);

  }
  buttonClicked(id : number) : void {
    this.router.navigate(['/product/'+id])
    console.log(id);

  }

}
