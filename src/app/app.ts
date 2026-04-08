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
  protected menuOpen = signal(false);

  constructor(private sharedState: SharedStateService) {}

  ngOnInit(): void {
    this.sharedState.state$.subscribe((value: Course[]) => {
      this.sharedStateValue.set(value.length);
    });
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
