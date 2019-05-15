import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alunos-app';
  values = '';

  onKey(event: any) {// without type info}
    this.values += event.target.value + ' | ';
  }
}
