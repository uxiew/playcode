import style from './style.css?inline';

export default {
  title: 'Tailwind CSS Playground',
  icon: 'tailwindcss',
  packages: [],
  files: [
    {
      name: 'index',
      value:
        '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    \x3c!-- Tailwind docs: https://tailwindcss.com/docs/installation/play-cdn --\x3e\n    <script src="https://cdn.tailwindcss.com"></script>\n    <script>\n      tailwind.config = {\n        theme: {\n          extend: {\n            colors: {\n              clifford: \'#da373d\',\n            }\n          }\n        }\n      }\n    </script>\n    <link rel="stylesheet" href="src/style.css" >\n  </head>\n\n  <body class="py-5 px-5 bg-blue-500">\n    <h1 class="text-3xl font-bold underline text-clifford">\n      Hello Tailwind CSS\n    </h1>\n    <h2 class="mt-4 bg-sky-500">\n      Start editing to see some magic happen!\n    </h2>\n\n    <script src="src/script.js"></script>\n  </body>\n</html>\n',
      active: !0,
      extension: '.html'
    },
    {
      name: 'style',
      value: style,
      active: !1,
      extension: '.css'
    }
  ]
};
