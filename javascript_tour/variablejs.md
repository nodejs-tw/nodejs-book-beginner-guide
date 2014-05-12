#JS 基本解說，變數型別，宣告

在進入 node.js 開發之前，還是必須要說， node.js 雖然稱為 node.js ，不過本質在開發上還是在寫 JavaScript。對於 JavaScript 的基本認知還是要有。
##基本型態

JavaScript 有以下幾種基本型態。

* Boolean
* Number
* String
* null
* undefined

變數宣告的方式，就是使用 var，結尾使用『;』，如果需要連續宣告變數，可以使用 『,』 做為連結符號。

    // 宣告 x 為 123, 數字型態
    var x=123;

    // 宣告 a 為456, b 為 'abc' 字串型態
    var a=456,
    b='abc';

##布林值

布林，就只有兩種數值, true, false

    var a=true,
        b=false;

##數字型別

Number 數字型別，可以分為整數，浮點數兩種，

    var a=123,
        b=123.456;

##字串型別

字串，可以是一個字，或者是一連串的字，可以使用 ‘’ 或 “” 做為字串的值。
    var a="a",
        a='abc';

##運算子

基本介紹就是 +, -, *, /
邏輯運算就是 && (and), || (or), ^ (xor),
比較式就是 >, <, !=, !==, ==, ===, >=, <=

##判斷式

這邊突然離題，加入判斷式來插花，判斷就是 if，整個架構就是，

    if (判斷a) {
        // 判斷a 成立的話，執行此區域指令
    } else if (判斷b) {
        // 判斷a 不成立，但是 判斷b 成立，執行此區域指令
    } else {
        // 其餘的事情在這邊處理
    }

整體架構就如上面描述，非 a 即 b的狀態，會掉進去任何一個區域裡面。
整體的判斷能夠成立，只要判斷轉型成 Boolean 之後為 true，就會成立。
大家可以這樣子測試，

    Boolean(判斷);

##應用

會突然講 if 判斷式，因為，前面有提到 Number, String 兩種型態，但是如果我們測試一下，新增一個 test.js

    var a=123,
        b='123';

    if (a == b) {
        console.log('ok');
    }

編輯 test.js 完成之後，執行底下指令

    node test.js
    // print: ok

輸出結果為 ok。
這個結果是有點迥異， a 為 Number, b 為 String 型態，兩者相比較，應該是為 false 才對，到底發生什麼事情？
這其中原因是，在判斷式中使用了 == ， JavaScript 編譯器，會自動去轉換變數型態，再進行比對，因此 a == b 就會成立，如果不希望轉型產生，就必須要使用 === 做為判斷。

    if (a === b) {
        console.log('ok);
    } else {
        console.log('not ok');
    }
    // print: not ok

##轉型

如果今天需要將字串，轉換成 Number 的時候，可以使用 parseInt, parseFloat 的方法來進行轉換，

    var a='123';

    console.log(typeof parseInt(a, 10));

使用 typeof 方法取得資料經過轉換後的結果，會取得，

##number

要注意的是，記得 parseInt 後面要加上進位符號，以免造成遺憾，在這邊使用的是 10 進位。

在本篇中，先講解變數的宣告，以及 Boolean, Number, String 幾種形態，以及 if 判斷式怎麼使用，在 JavaScript 這種弱型態的語言當中，有些時候會因為自動轉型造成 debug 的麻煩，因此也稍微提到在實際開發可能會遇到的問題。
前面基本型態有提到 null, undefined ，明天我們繼續聊聊這兩種在 JavaScript 型別中，難以判定的型態。
