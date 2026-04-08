import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { getManifest } from '@angular-architects/module-federation';

@Component({
  selector: 'app-demo',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
})
export class Demo {
  productsUrl = this.baseUrl('mfe-products');
  cartUrl = this.baseUrl('mfe-cart');

  private baseUrl(remote: string): string {
    const manifest = getManifest();
    const value = manifest?.[remote];
    const entry: string = typeof value === 'string'
      ? value
      : (value as any)?.remoteEntry ?? '';
    return entry.replace(/\/remoteEntry\.js$/, '');
  }
}
