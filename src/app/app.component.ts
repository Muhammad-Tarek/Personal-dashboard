import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { timer } from 'rxjs';

const baseStyles = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition(':increment', [
        style({ position: 'relative', overflow: 'hidden' }),

        query(':enter, :leave', [baseStyles], { optional: true }),

        group([
          query(
            ':leave',
            [
              animate(
                '200ms ease-in',
                style({
                  opacity: 0,
                  transform: 'translateX(-50px)',
                })
              ),
            ],
            { optional: true }
          ),

          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateX(50px)',
              }),
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: 1,
                  transform: 'translateX(0)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),

      transition(':decrement', [
        style({ position: 'relative', overflow: 'hidden' }),

        query(':enter, :leave', [baseStyles], { optional: true }),

        group([
          query(
            ':leave',
            [
              animate(
                '200ms ease-in',
                style({
                  opacity: 0,
                  transform: 'translateX(50px)',
                })
              ),
            ],
            { optional: true }
          ),

          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateX(-50px)',
              }),
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: 1,
                  transform: 'translateX(0)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),

      transition('* => secondary', [
        style({ position: 'relative' }),

        query(':enter, :leave', [baseStyles], { optional: true }),

        group([
          query(
            ':leave',
            [
              animate(
                '200ms ease-in',
                style({
                  opacity: 0,
                  transform: 'scale(0.8)',
                })
              ),
            ],
            { optional: true }
          ),

          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'scale(1.2)',
              }),
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: 1,
                  transform: 'scale(1)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),

      transition('secondary => *', [
        style({ position: 'relative' }),

        query(':enter, :leave', [baseStyles], { optional: true }),

        group([
          query(
            ':leave',
            [
              animate(
                '200ms ease-in',
                style({
                  opacity: 0,
                  transform: 'scale(1.25)',
                })
              ),
            ],
            { optional: true }
          ),

          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'scale(0.8)',
              }),
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: 1,
                  transform: 'scale(1)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),

    trigger('bgAnim', [
      transition(':leave', [
        animate(
          1000,
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),

    trigger('fadeAnim', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(
          250,
          style({
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        animate(
          250,
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  faRedoAlt = faRedoAlt;

  backgrounds: string[] = [
    'https://images.unsplash.com/photo-1601885823844-051c9ca3c5a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920',
  ];

  loadingBGImage: boolean;

  dateTime: Date;

  ngOnInit() {
    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date();
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      const tab = outlet.activatedRouteData['tab'];
      if (!tab) return 'secondary';
      return tab;
    }
  }

  async changeBGImage() {
    this.loadingBGImage = true;
    const result = await fetch('https://source.unsplash.com/random/1920x1080', {
      method: 'HEAD',
    });

    const alreadyGot = this.backgrounds.includes(result.url);

    if (alreadyGot) return this.changeBGImage();
    this.backgrounds.push(result.url);
  }

  onBGImageLoad(imgEvent: Event) {
    const imgElement = imgEvent.target as HTMLImageElement;
    const src = imgElement.src;
    this.backgrounds = this.backgrounds.filter((b) => b === src);
    this.loadingBGImage = false;
  }
}
