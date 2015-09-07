var test = require('tape');
var subTemplate = require('../index.js');

test('Doesn\'t change normal string', function (t) {
  var str = 'Lorem ipsum dolor sit amet';
  t.equal(subTemplate(str), str);
  t.end();
});

test('Doesn\'t escape tag without {{}}', function (t) {
  var str = 'Lorem <br> ipsum dolor sit amet';
  t.equal(subTemplate(str), str);
  t.end();
});

test('Escapes tag with {{}}', function (t) {
  var str = 'Lorem {{<br>}} ipsum dolor sit amet';
  t.equal(subTemplate(str), 'Lorem &lt;br&gt; ipsum dolor sit amet');
  t.end();
});

test('Doesn\'t trim without {{!}}', function (t) {
  var str = 'Lorem{{ <br> }}ipsum dolor sit amet';
  t.equal(subTemplate(str), 'Lorem &lt;br&gt; ipsum dolor sit amet');
  t.end();
});

test('Trims with {{!}}', function (t) {
  var str = 'Lorem{{! <br> }}ipsum dolor sit amet';
  t.equal(subTemplate(str), 'Lorem&lt;br&gt;ipsum dolor sit amet');
  t.end();
});

test('Works with multiple tags', function (t) {
  var str = '<br>{{<span>}}{{! <script> }}<script';
  t.equal(subTemplate(str), '<br>&lt;span&gt;&lt;script&gt;<script');
  t.end();
});
