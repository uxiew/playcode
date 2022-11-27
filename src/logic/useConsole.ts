import { Console, DataAPI, Encode, Table } from 'vue-console-feed';
import 'vue-console-feed/style.css';

const el = document.createElement('div');
el.style.color = 'red';
el.dir = 'ltr';
el.innerHTML = 'hkhkjhhu op<span>Hello<Span>jkfiwoejgoijerokg</span></span>';
// el.innerHTML = "xss"
const uint = new Uint8Array([312, 432, 5435]);
const pro = Promise.resolve();
const date = new Date();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(date as unknown as any).status = 'ok';
const tt = {
  el,
  nl: el.childNodes,
  r: /script/,
  aep: new Array(99),
  pro,
  uint,
  // @ts-ignore
  // eslint-disable-next-line functional/functional-parameters, @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  asn: async function asn(v, vv, ...vvv) {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  *iwjfgew() {},
  cvv: () => {
    // eslint-disable-next-line no-unused-expressions
    alert;
    // eslint-disable-next-line no-unused-expressions
    window;
  },
  gttt: () => 12423543,
  buffer: uint.buffer,
  view: new DataView(uint.buffer),
  date,
  [Symbol('aafe')]: [3124],
  e: new WeakMap(),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  c: new Map([
    [45, [789, 89]],
    ['user', { name: 'Shin' }]
  ]),
  s: new Set([2, 54, 65, [123], () => 2]),
  ae: [
    /script/,
    new WeakMap(),
    new Map([[45, [789, 89]]]),
    1,
    3,
    alert,
    [43, 5, 76, 23],
    { a: 34 },
    1,
    3,
    { a: 34 },
    1,
    3,
    { a: 34 },
    1,
    3,
    { a: 34 },
    1,
    3,
    { a: 34 },
    1,
    3,
    { a: 34 },
    1,
    3,
    { a: 34 },
    1,
    3,
    { a: 34 },
    1,
    3,
    { a: 34 },
    1,
    3,
    { a: 34 },
    1,
    3,
    { a: 34 },
    1,
    3,
    { a: 34 },
    1,
    3,
    { a: 34 },
    1,
    3,
    { a: 34 }
  ],
  foo: { x: 245, y: 843 },
  year: 10,
  name: 'Shin',
  b: 129n,
  err: new Error('this message error'),
  sym: Symbol('a'),
  map: new Map([[45, [789, 89]]]),
  get lusa() {
    return this.year ** 2;
  },
  matcher: /<script\s+>/,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  increment: function increment(value = 56) {
    this.year++;
  },
  abort: new AbortController()
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(pro as unknown as any).asjfiopeg = tt;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(tt as unknown as any).tt = tt;

// eslint-disable-next-line functional/no-let
let a;
try {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  // eslint-disable-next-line no-undef
  foeojgr();
} catch (err) {
  a = err;
}
const anchor = 'a';
Object.assign(window, { tt });

// @ts-ignore
import { reactive, readonly } from 'vue';

const data = reactive({
  '@key': readonly(Encode('console.group')),
  '@items': [
    {
      data: Encode('hello world'),
      count: 1,
      type: 'log'
    },
    {
      data: Encode('hello world'),
      count: 1,
      type: 'log'
    },
    {
      '@key': Encode(tt),
      '@items': [
        {
          data: Encode('hello world'),
          count: 1,
          type: 'log'
        },
        {
          data: Encode('hello world'),
          count: 1,
          type: 'log'
        }
      ]
    }
  ]
});

Object.assign(window, { data });

const ConsoleApi = new DataAPI(false, 0);

// Object.assign(window, {
//   ConsoleApi,
//   Encode
// });

// api.log('window', window);

export { Console, ConsoleApi, Encode };
