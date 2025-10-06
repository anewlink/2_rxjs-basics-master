// begin lesson code
import { fromEvent } from 'rxjs';
import { map, tap, throttleTime } from 'rxjs/operators';

//helpers
function calculateScrollPercent(element) {
  const { scrollTop, scrollHeight, clientHeight } = element;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// elems
const progressBar = document.querySelector('.progress-bar');

//streams
const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
  throttleTime(20),
  // percentage progress
  map(({ target }) => calculateScrollPercent(target.scrollingElement)),
  tap(console.log)
);
progress$.subscribe(percent => {
    progressBar.style.width = `${percent}%`;
});
