import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public onPushImg(e) {
    console.log(e.target.files);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      console.log('end load');
      reader.result;
      console.log(reader.result);
    };
  }
}
