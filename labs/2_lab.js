// begin lesson code
import { interval } from 'rxjs';
import { filter, mapTo, scan, tap } from 'rxjs/operators';

let initialCount = 10;

//elem refs
const countdown = document.getElementById('countdown');
const message = document.getElementById('message');

// streams
const counter$ = interval(1000);

const countDown$ = counter$
  .pipe(
    mapTo(-1),
    scan((accumulator, current) => accumulator + current, initialCount),
    // tap(console.log),
    filter(value => value >= 0),
  )
  .subscribe((value) => {
    countdown.innerHTML = value;
    if (!value) {
      message.innerHTML = 'Liftoff';
    }
  });
