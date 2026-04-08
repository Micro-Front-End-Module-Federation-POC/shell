import { Component } from '@angular/core';

@Component({
  selector: 'app-how-to-implement',
  imports: [],
  templateUrl: './how-to-implement.html',
  styleUrl: './how-to-implement.scss',
})
export class HowToImplement {
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
