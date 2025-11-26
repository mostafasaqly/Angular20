import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  selector: 'image-optimized-demo',
  imports: [NgOptimizedImage],
  template: `
    <div class="img-wrapper">
      <img
        ngSrc="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80"
        width="120"
        height="120"
        priority
        alt="Angular logo"
      />
      <p>
        This image uses <code>NgOptimizedImage</code>:
        <code>ngSrc</code>, width/height, lazy loading & preloading.
      </p>
    </div>
  `,
  styles: [
    `
      .img-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      img {
        border-radius: 12px;
      }
    `,
  ],
})
export class ImageOptimizedDemo {}
