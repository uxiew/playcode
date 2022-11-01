import { fromEvent, scan } from 'rxjs';

fromEvent(document, 'click')
  .pipe(scan((count) => count + 1, 0))
  .subscribe((count) => console.log('Clicked ' + count + ' times'));

console.log('Click to WEBSITE VIEW panel');
