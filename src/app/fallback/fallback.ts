import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fallback',
  imports: [CommonModule],
  templateUrl: './fallback.html',
  styleUrl: './fallback.scss',
})
export class Fallback implements OnInit {
  private router = inject(Router);

  isIntentional = signal(false);
  mfeName = signal('Remote MFE');

  ngOnInit() {
    const url = this.router.url;
    if (url.includes('checkout')) {
      this.isIntentional.set(true);
      this.mfeName.set('mfe-checkout');
    } else if (url.includes('products')) {
      this.mfeName.set('mfe-products');
    } else if (url.includes('cart')) {
      this.mfeName.set('mfe-cart');
    }
  }
}
