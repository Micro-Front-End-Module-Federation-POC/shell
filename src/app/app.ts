import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Course, SharedStateService } from '@micro-front-end-module-federation-poc/shared-state';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly sharedStateValue = signal<number | null>(null);
  constructor(private sharedState: SharedStateService) {
  }

  ngOnInit(): void {
    this.sharedState.state$.subscribe(value => {
      this.sharedStateValue.set(value.length);
    });
  }

}
