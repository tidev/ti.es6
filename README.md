<p align="center">
	<img src="https://github.com/appcelerator/ti.es6/raw/master/icon.png" height="128 " width="358">
	<h1 align="center">ti.es6</h1>
	<h5 align="center">ES6 wrapper for the Titanium API</h6>
</p>

### Usage
###### tiapp.xml
```XML
...
  <plugins>
    ...
    <plugin>ti.es6</plugin>
    ...
  </plugins>
...
```

#### Example
```JS
import { Window, Label, View, Animation, _2DMatrix } from './Titanium/UI';

let win = new Window({
      title: 'ES6',
      layout: 'vertical',
      backgroundColor: 'gray'
    }),
    lbl = new Label({
      color: 'white',
      font: {
        fontSize: '32'
      },
      text: 'ES6!'
    }),
    view = new View({
      backgroundColor: 'red',
      width: 100,
      height: 100
    }),
    matrix = new _2DMatrix({
      rotate: 90
    }),
    animation = new Animation({
      transform: matrix,
      duration: 3000
    });


win.addEventListener('postlayout', async () => {
  await view.animate(animation);
  view.backgroundColor = 'orange';
  alert('DONE ANIMATION!');
});

win.add([lbl, view]);
win.open();
```
##### NOTE
You can also specify sub-modules like so:
```JS
import _Titanium from './Titanium';

const { UI } = _Titanium;
const { Window, Label, View, Animation, _2DMatrix } = UI;
```

#### Author
Gary Mathews