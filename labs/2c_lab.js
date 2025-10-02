// begin lesson code
import { fromEvent, interval } from 'rxjs';
import { filter, mapTo, scan, tap, takeWhile, takeUntil } from 'rxjs/operators';

let initialCount = 10;

//elem refs
const countdown = document.getElementById('countdown');
const message = document.getElementById('message');
const abortButton = document.getElementById('abort');

// streams
const counter$ = interval(1000);
const abortClick$ = fromEvent(abortButton, 'click');

const countDown$ = counter$
  .pipe(
    mapTo(-1),
    scan((accumulator, current) => accumulator + current, initialCount),
    tap(console.log),
    takeWhile((value) => value >= 0),
    // stop the countdown emit if there is a click
    takeUntil(abortClick$)
    // filter(value => value >= 0),
  )
  .subscribe((value) => {
    countdown.innerHTML = value;
    if (!value) {
      message.innerHTML = 'Liftoff';
    }
  });
