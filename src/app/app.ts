import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppState, SharedStateService } from '@mfe/shared-state';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly sharedStateValue = signal<AppState | null>(null);
  constructor(private sharedState: SharedStateService) {
  }

  ngOnInit(): void {
    this.sharedState.state$.subscribe(value => {
      this.sharedStateValue.set(value);
    });
  }

}
