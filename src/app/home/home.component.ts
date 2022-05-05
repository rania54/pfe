import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formatDistance } from 'date-fns';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }
  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  likeCount = 100;
  isLiked = false;

  likeTheButton(i: number) {
    this.isLiked = !this.isLiked;
  }
  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  };
  inputValue = '';

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: formatDistance(new Date(), new Date()),
        },
      ].map((e) => ({
        ...e,
        displayTime: formatDistance(new Date(), e.datetime),
      }));
    }, 800);
  }

  constructor(private router: Router) {}

  gotopagesale(): void {
    this.router.navigate(['/sale']);
  }
  navigate: Array<any> = [
    { text: 'Sale' },
    { text: 'Rent' },
    { text: 'New real estate' },
    { text: 'Vacation real estate' },
  ];
  cards: Array<any> = [
    {
      id: 1,
      title: 'New S2 for rent in kantaoui',
      detail: 'apartment for rent , Kantaoui, Sousse s+2 | 130m² 140.000 DT',
      photo: '/assets/images/im1.jpg',
      iko: 'app-registration',
    },
    {
      id: 2,
      title: 'produt 21',
      detail: '100 dt',
      photo: '/assets/images/im2.jpg',
      iko: 'app-registration',
    },
    {
      id: 3,
      title: 'produt 21',
      detail: '100 dt',
      photo: '/assets/images/im3.jpg',
      iko: 'app-registration',
    },
    {
      id: 4,
      title: 'produt 1',
      detail: '100 dt',
      photo: '/assets/images/im4.jpeg',
      iko: 'app-registration',
    },
    {
      id: 5,
      title: 'produt 21',
      detail: '100 dt',
      photo:
        'https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2021/08/homebyme-homepage-gallery-2-1.png',
    },
    {
      id: 6,
      title: 'produt 51',
      detail: '100 dt',
      photo:
        'https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2021/08/homebyme-homepage-gallery-2-1.png',
      iko: 'app-registration',
    },
    {
      id: 7,
      title: 'produt 21',
      detail: '100 dt',
      photo:
        'https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2021/08/homebyme-homepage-gallery-2-1.png',
    },
    {
      id: 8,
      title: 'produt 71',
      detail: '100 dt',
      photo:
        'https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2021/08/homebyme-homepage-gallery-2-1.png',
    },
    {
      id: 9,
      title: 'produt 21',
      detail: '100 dt',
      photo:
        'https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2021/08/homebyme-homepage-gallery-2-1.png',
    },
  ];

  ngOnInit(): void {
    console.log(this.cards);
    let index = this.cards.findIndex((el: any) => el.id === 1);
    console.log(this.cards[index]);
  }

  buttonClicked(id: number): void {
    this.router.navigate(['/product/' + id]);
    console.log(id);
  }
}
