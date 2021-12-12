## highlightjs for Pine Script V5
- Syntax highlighting for pine script V5

## Static website or simple usage

- Simply load the module after loading Highlight.js. You'll use the minified version found in the `dist` directory. This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.
```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/pine.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```
## With Node
- If you're using Node, simply require the language module with npm install jeyllani/highlightjs-pine, then register it with Highlight.js.

```javascript
var hljs = require('highlight.js');
var hljsPine = require('highlightjs-pine');

hljs.registerLanguage("pine", hljsPine);
```
## License
- Highlight.js is released under version 2 of the GPL. See LICENSE file for details.
