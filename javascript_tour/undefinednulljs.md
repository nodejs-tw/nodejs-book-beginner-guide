# null & undefined 介紹

空無是一種很奇妙的狀態，在 JavaScript 裡面，null, undefined 是一種奇妙的東西。今天來探討什麼是 null ，什麼是 undefined.

## null

變數要經過宣告，賦予 null ，才會形成 null 型態。

```javascript
var a = null;
```

null 在 JavaScript 中表示一個空值。

## undefined

從字面上就表示目前未定義，只要一個變數在初始的時候未給予任何值的時候，就會產生 undefined

```javascript
var a;
console.log(a);
// print : undefined
```

這個時候 a 就是屬於 undefined 的狀態。另外一種狀況就是當 Object 被刪除的時候。

```javascript
var a = {};
delete a;
console.log(a);
//print: undefined.
```

Object 在之後會介紹，先記住有這個東西。而使用 delete 的時候，就可以讓這個 Object 被刪除，就會得到結果為 undefined.

兩者比較

null, undefined 在本質上差異並不大，不過實質上兩者並不同，如果硬是要比較，建議使用 === 來做為判斷標準，避免 null, undefined 這兩者被強制轉型。

```javascript
var a = null,
  b;

if (a === b) {
  console.log('same');
} else {
  console.log('different');
}

//print: different
```

從 typeof 也可以看到兩者本質上的差異，

```javascript
typeof null;
//print: 'object'

typeof undefined;
//print: 'undefined'
```

null 本質上是屬於 object, 而 undefined 本質上屬於 undefined ，意味著在 undefined 的狀態下，都是屬於未定義。

如果用判斷式來決定，會發現另外一種狀態

```javascript
Boolean(null);
// false

Boolean(undefined);
// false
```

可以觀察到，如果一個變數值為 null, undefined 的狀態下，都是屬於 false。

這樣說明應該幫助到大家了解，其實要判斷一個物件、屬性是否存在，只需要使用 if

```javascript
var a;

if (!a) {
  console.log('a is not existed');
}

//print: a is not existed
```

a 為 undefined 由判斷式來決定，是屬於 False 的狀態。

在 Node.js 開發中比較少會碰到 null, undeinfed 的狀況，只要判斷都是使用 === ，不用偷工減料，讓前後端判斷標準一致，就可以完整判斷目前的數值型態為何。在這邊提出 null, undefined 是為了讓大家更為了解 JavaScript 本身的一些謬誤。
