import { Component,OnInit } from '@angular/core';
import { formatDistance } from 'date-fns';


@Component({
  selector: 'app-likebutton',
  templateUrl: './likebutton.component.html',
  styleUrls: ['./likebutton.component.css']
})
export class LikebuttonComponent  {

  likeCount= 100;
  isLiked = false;

  likeTheButton = () => {
    if(this.isLiked)
    this.likeCount--;
    else
    this.likeCount++;

    this.isLiked = !this.isLiked
  }
  ngOnInit(): void {}
  url="/assets/images/avatar.png"
onselectFile(e:any){
  if(e.target.files) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    }

  }
}
isVisible = false;
showModal(): void {
  this.isVisible = true;
}
handleCancel(): void {
  console.log('Button cancel clicked!');
  this.isVisible = false;
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
}

