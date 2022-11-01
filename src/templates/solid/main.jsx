export default {};
import { createSignal, onCleanup } from 'solid-js';
import { render } from 'solid-js/web';

const CountingComponent = () => {
  const [count, setCount] = createSignal(0);
  const interval = setInterval(() => setCount((c) => c + 1), 1000);
  onCleanup(() => clearInterval(interval));
  return (
    <div>
      <h1>Hello SolidJS</h1>
      Count value is {count()}
    </div>
  );
};

render(() => <CountingComponent />, document.getElementById('app'));
