import { Observable, Subscriber } from 'rxjs';

const observer = {
    next: value => console.log('next', value),
    error: value => console.log('error', error),
    complete: value => console.log('complete!'),
}

// Observable.create deprecated
const observable = new Observable(subscriber => {
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
    subscriber.next('Hello2');
    subscriber.next('World2');
});

observable.subscribe(observer);

