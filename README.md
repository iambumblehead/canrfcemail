canrfcemail
===========
**(c)[Bumblehead][0], 2014** [MIT-license](#license)

### OVERVIEW:

`canrfcemail( email )` returns `true` for known valid addresses and returns `false` for some invalid email addresses.

 No single email validation scheme works for everyone and each scheme makes compromises. Schemes differ by accuracy, speed and size. Authors of [longer][7] [scripts][8] claim they are more accurate. [Some][9] [authors][10] [write][11] scripts that are mostly accurate but are smaller and faster. Discussion [threads][12] on stackoverflow praise and criticise email validation schemes.

 Links to RFC guidelines are found at the bottom of [this wikipedia page][15].
 
This script has:

 1. **MIT License**

 `canrfcemail` is commercially and freely usable. copy-lefted and un-licensed solutions are ignored. `canrfcemail` does not originate from those and is OK to use in your commercial application.

 2. **Complete Test Suite**

 Test data is taken from [this BSD licensed package][5], by [Dominic Sayers][6]. It includes 138 valid and 96 invalid email addresses. Run the tests and see the results of `canrfcemail`.

 3. **false positive, _OK_. false negative, _NOT OK_.**

 Until a time when this script is 100% accurate, it must return `true` for _all valid_ addresses. A consequence is that it will return `true` for _many invalid_ addresses -considered an acceptable trade-off here and by anyone using this script.

 When committing changes to the script, all tests for valid email addresses must pass.

 4. **ECMAScript Agnostic**

 `canrfcemail` is usable as-is in a browser or node.js script environment.


----------------------------------------------------------------------
## Why

Its useful to show an error to a user that inputs an invalid email address.


----------------------------------------------------------------------
## Help is welcome

**The goal**: return `true` for all valid addresses and return `false` for as many invalid addresses as possible.

**Any contributor to this script will be recognized as a primary author.**

Help improve the results of current tests given below.

Use single commits that address specific parts of the rfc guideline.

This task is not well defined. [Start with this wikipedia page, which includes links to related rfc documents][16] when modifying this script.


----------------------------------------------------------------------
## Valid Emails *139/139, 100%*

Each bold item represents a valid address `canrfcemail` returns `true` for. **More bold items is better. Each item should be bold.**

  1. **canrfcemail('june@bloom.com');**
  1. **canrfcemail('bill.brave+spa@gmail.com');**
  1. **canrfcemail('invalid');**
  1. **canrfcemail('ju^+ne@bloom.com');**
  1. **canrfcemail('first.last@iana.org');**
  1. **canrfcemail('1234567890123456789012345678901234567890123456789012345678901234@iana.org');**
  1. **canrfcemail('"first\"last"@iana.org');**
  1. **canrfcemail('1234567890123456789012345678901234567890123456789012345678@1234567890123456789012345678901234567890123456');**
  1. **canrfcemail('first.last@[12.34.56.78]');**
  1. **canrfcemail('first.last@[IPv6:::12.34.56.78]');**
  1. **canrfcemail('first.last@[IPv6:1111:2222:3333::4444:12.34.56.78]');**
  1. **canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:6666:12.34.56.78]');**
  1. **canrfcemail('first.last@[IPv6:::1111:2222:3333:4444:5555:6666]');**
  1. **canrfcemail('first.last@[IPv6:1111:2222:3333::4444:5555:6666]');**
  1. **canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:6666::]');**
  1. **canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:8888]');**
  1. **canrfcemail('first.last@x23456789012345678901234567890123456789012345678901234567890123.iana.org');**
  1. **canrfcemail('first.last@3com.com');**
  1. **canrfcemail('first.last@123.iana.org');**
  1. **canrfcemail('first.last@[IPv6:1111:2222:3333::4444:5555:12.34.56.78]');**
  1. **canrfcemail('first.last@[IPv6:1111:2222:3333::4444:5555:6666:7777]');**
  1. **canrfcemail('first.last@example.123');**
  1. **canrfcemail('first.last@com');**
  1. **canrfcemail('"Abc\@def"@iana.org');**
  1. **canrfcemail('"Fred\ Bloggs"@iana.org');**
  1. **canrfcemail('"Joe.\Blow"@iana.org');**
  1. **canrfcemail('"Abc@def"@iana.org');**
  1. **canrfcemail('"Fred Bloggs"@iana.org');**
  1. **canrfcemail('user+mailbox@iana.org');**
  1. **canrfcemail('customer/department=shipping@iana.org');**
  1. **canrfcemail('$A12345@iana.org');**
  1. **canrfcemail('!def!xyz%abc@iana.org');**
  1. **canrfcemail('_somename@iana.org');**
  1. **canrfcemail('dclo@us.ibm.com');**
  1. **canrfcemail('peter.piper@iana.org');**
  1. **canrfcemail('"Doug \"Ace\" L."@iana.org');**
  1. **canrfcemail('test@iana.org');**
  1. **canrfcemail('TEST@iana.org');**
  1. **canrfcemail('1234567890@iana.org');**
  1. **canrfcemail('test+test@iana.org');**
  1. **canrfcemail('test-test@iana.org');**
  1. **canrfcemail('t*est@iana.org');**
  1. **canrfcemail('+1~1+@iana.org');**
  1. **canrfcemail('{_test_}@iana.org');**
  1. **canrfcemail('"[[ test ]]"@iana.org');**
  1. **canrfcemail('test.test@iana.org');**
  1. **canrfcemail('"test.test"@iana.org');**
  1. **canrfcemail('test."test"@iana.org');**
  1. **canrfcemail('"test@test"@iana.org');**
  1. **canrfcemail('test@123.123.123.x123');**
  1. **canrfcemail('test@123.123.123.123');**
  1. **canrfcemail('test@[123.123.123.123]');**
  1. **canrfcemail('test@example.iana.org');**
  1. **canrfcemail('test@example.example.iana.org');**
  1. **canrfcemail('"test\test"@iana.org');**
  1. **canrfcemail('test@example');**
  1. **canrfcemail('"test\"blah"@iana.org');**
  1. **canrfcemail('customer/department@iana.org');**
  1. **canrfcemail('_Yosemite.Sam@iana.org');**
  1. **canrfcemail('~@iana.org');**
  1. **canrfcemail('"Austin@Powers"@iana.org');**
  1. **canrfcemail('Ima.Fool@iana.org');**
  1. **canrfcemail('"Ima.Fool"@iana.org');**
  1. **canrfcemail('"Ima Fool"@iana.org');**
  1. **canrfcemail('"first"."last"@iana.org');**
  1. **canrfcemail('"first".middle."last"@iana.org');**
  1. **canrfcemail('"first".last@iana.org');**
  1. **canrfcemail('first."last"@iana.org');**
  1. **canrfcemail('"first"."middle"."last"@iana.org');**
  1. **canrfcemail('"first.middle"."last"@iana.org');**
  1. **canrfcemail('"first.middle.last"@iana.org');**
  1. **canrfcemail('"first..last"@iana.org');**
  1. **canrfcemail('"first\\\"last"@iana.org');**
  1. **canrfcemail('first."mid\dle"."last"@iana.org');**
  1. **canrfcemail('"test blah"@iana.org');**
  1. **canrfcemail('(foo)cal(bar)@(baz)iamcal.com(quux)');**
  1. **canrfcemail('cal@iamcal(woo).(yay)com');**
  1. **canrfcemail('cal(woo(yay)hoopla)@iamcal.com');**
  1. **canrfcemail('cal(foo\@bar)@iamcal.com');**
  1. **canrfcemail('cal(foo\)bar)@iamcal.com');**
  1. **canrfcemail('first().last@iana.org');**
  1. **canrfcemail('pete(his account)@silly.test(his host)');**
  1. **canrfcemail("c@(Chris's host.)public.example");**
  1. **canrfcemail('jdoe@machine(comment). example');**
  1. **canrfcemail('1234 @ local(blah) .machine .example');**
  1. **canrfcemail('first(abc.def).last@iana.org');**
  1. **canrfcemail('first(a"bc.def).last@iana.org');**
  1. **canrfcemail('first.(")middle.last(")@iana.org');**
  1. **canrfcemail('first(abc\(def)@iana.org');**
  1. **canrfcemail('first.last@x(1234567890123456789012345678901234567890123456789012345678901234567890).com');**
  1. **canrfcemail('a(a(b(c)d(e(f))g)h(i)j)@iana.org');**
  1. **canrfcemail('name.lastname@domain.com');**
  1. **canrfcemail('a@b');**
  1. **canrfcemail('a@bar.com');**
  1. **canrfcemail('aaa@[123.123.123.123]');**
  1. **canrfcemail('a@bar');**
  1. **canrfcemail('a-b@bar.com');**
  1. **canrfcemail('+@b.c');**
  1. **canrfcemail('+@b.com');**
  1. **canrfcemail('a@b.co-foo.uk');**
  1. **canrfcemail('"hello my name is"@stutter.com');**
  1. **canrfcemail('"Test \"Fail\" Ing"@iana.org');**
  1. **canrfcemail('valid@about.museum');**
  1. **canrfcemail('shaitan@my-domain.thisisminekthx');**
  1. **canrfcemail('foobar@192.168.0.1');**
  1. **canrfcemail('"Joe\Blow"@iana.org');**
  1. **canrfcemail('HM2Kinsists@(that comments are allowed)this.is.ok');**
  1. **canrfcemail('user%uucp!path@berkeley.edu');**
  1. **canrfcemail('first.last @iana.org');**
  1. **canrfcemail("cdburgess+!#$%&'*-/=?+_{}|~test@gmail.com");**
  1. **canrfcemail('first.last@[IPv6:::a2:a3:a4:b1:b2:b3:b4]');**
  1. **canrfcemail('first.last@[IPv6:a1:a2:a3:a4:b1:b2:b3::]');**
  1. **canrfcemail('first.last@[IPv6:::]');**
  1. **canrfcemail('first.last@[IPv6:::b4]');**
  1. **canrfcemail('first.last@[IPv6:::b3:b4]');**
  1. **canrfcemail('first.last@[IPv6:a1::b4]');**
  1. **canrfcemail('first.last@[IPv6:a1::]');**
  1. **canrfcemail('first.last@[IPv6:a1:a2::]');**
  1. **canrfcemail('first.last@[IPv6:0123:4567:89ab:cdef::]');**
  1. **canrfcemail('first.last@[IPv6:0123:4567:89ab:CDEF::]');**
  1. **canrfcemail('first.last@[IPv6:::a3:a4:b1:ffff:11.22.33.44]');**
  1. **canrfcemail('first.last@[IPv6:::a2:a3:a4:b1:ffff:11.22.33.44]');**
  1. **canrfcemail('"test\blah"@iana.org');**
  1. **canrfcemail('x@x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23');**
  1. **canrfcemail('first.last@[IPv6:a1:a2:a3:a4::11.22.33.44]');**
  1. **canrfcemail('first.last@[IPv6:a1:a2:a3:a4:b1::11.22.33.44]');**
  1. **canrfcemail('first.last@[IPv6:a1::11.22.33.44]');**
  1. **canrfcemail('first.last@[IPv6:a1:a2::11.22.33.44]');**
  1. **canrfcemail('first.last@[IPv6:0123:4567:89ab:cdef::11.22.33.44]');**
  1. **canrfcemail('first.last@[IPv6:0123:4567:89ab:CDEF::11.22.33.44]');**
  1. **canrfcemail('first.last@[IPv6:a1::b2:11.22.33.44]');**
  1. **canrfcemail('test@test.com');**
  1. **canrfcemail('test@xn--example.com');**
  1. **canrfcemail('test@example.com');**
  1. **canrfcemail('"first\last"@iana.org');**
  1. **canrfcemail('first\@last@iana.org');**
  1. **canrfcemail('abc\@def@iana.org');**
  1. **canrfcemail('abc\@iana.org');**


----------------------------------------------------------------------
## Invalid Emails *11/96, ~11%*

Each bold item represents an invalid address `canrfcemail` returns `false` for. **More bold items is better**

  1. canrfcemail('first.last@sub.do,com');
  1. canrfcemail('123456789012345678901234567890123456789012345678901234567890@12345678901234567890123456789012345678901234');
  1. **<strike>canrfcemail('first.last');</strike>**
  1. canrfcemail('12345678901234567890123456789012345678901234567890123456789012345@iana.org');
  1. canrfcemail('.first.last@iana.org');
  1. canrfcemail('first.last.@iana.org');
  1. canrfcemail('first..last@iana.org');
  1. canrfcemail('"first"last"@iana.org');
  1. canrfcemail('"""@iana.org');
  1. canrfcemail('"\"@iana.org');
  1. canrfcemail('""@iana.org');
  1. **<strike>canrfcemail('first.last@');</strike>**
  1. canrfcemail('first.last@[.12.34.56.78]');
  1. canrfcemail('first.last@[12.34.56.789]');
  1. canrfcemail('first.last@[::12.34.56.78]');
  1. canrfcemail('first.last@[IPv5:::12.34.56.78]');
  1. canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:12.34.56.78]');
  1. canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:12.34.56.78]');
  1. canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777]');
  1. canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:8888:9999]');
  1. canrfcemail('first.last@[IPv6:1111:2222::3333::4444:5555:6666]');
  1. canrfcemail('first.last@[IPv6:1111:2222:333x::4444:5555]');
  1. canrfcemail('first.last@[IPv6:1111:2222:33333::4444:5555]');
  1. canrfcemail('first.last@-xample.com');
  1. canrfcemail('first.last@exampl-.com');
  1. canrfcemail('first.last@x234567890123456789012345678901234567890123456789012345678901234.iana.org');
  1. canrfcemail('Doug\ \"Ace\"\ Lovell@iana.org');
  1. canrfcemail('abc@def@iana.org');
  1. **<strike>canrfcemail('@iana.org');</strike>**
  1. **<strike>canrfcemail('doug@');</strike>**
  1. canrfcemail('"qu@iana.org');
  1. canrfcemail('ote"@iana.org');
  1. canrfcemail('.dot@iana.org');
  1. canrfcemail('dot.@iana.org');
  1. canrfcemail('two..dot@iana.org');
  1. canrfcemail('"Doug "Ace" L."@iana.org');
  1. canrfcemail('Doug\ \"Ace\"\ L\.@iana.org');
  1. canrfcemail('hello world@iana.org');
  1. canrfcemail('gatsby@f.sc.ot.t.f.i.tzg.era.l.d.');
  1. **<strike>canrfcemail('test.iana.org');</strike>**
  1. canrfcemail('test.@iana.org');
  1. canrfcemail('test..test@iana.org');
  1. canrfcemail('.test@iana.org');
  1. canrfcemail('test@test@iana.org');
  1. canrfcemail('test@@iana.org');
  1. canrfcemail('-- test --@iana.org');
  1. canrfcemail('[test]@iana.org');
  1. canrfcemail('"test"test"@iana.org');
  1. **<strike>canrfcemail('()[]\;:,>');</strike>**
  1. canrfcemail('test@.');
  1. canrfcemail('test@example.');
  1. canrfcemail('test@.org');
  1. canrfcemail('test@1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890');
  1. canrfcemail('test@[123.123.123.123');
  1. canrfcemail('test@123.123.123.123]');
  1. canrfcemail('NotAnEmail');
  1. **<strike>canrfcemail('@NotAnEmail');</strike>**
  1. canrfcemail('"test"blah"@iana.org');
  1. canrfcemail('.wooly@iana.org');
  1. canrfcemail('wo..oly@iana.org');
  1. canrfcemail('pootietang.@iana.org');
  1. canrfcemail('.@iana.org');
  1. canrfcemail('Ima Fool@iana.org');
  1. canrfcemail('phil.h\@\@ck@haacked.com');
  1. canrfcemail('foo@[\1.2.3.4]');
  1. canrfcemail('first."".last@iana.org');
  1. canrfcemail('first\last@iana.org');
  1. canrfcemail('Abc\@def@iana.org');
  1. canrfcemail('Fred\ Bloggs@iana.org');
  1. canrfcemail('Joe.\Blow@iana.org');
  1. canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:6666:12.34.567.89]');
  1. canrfcemail('{^c\@**Dog^}@cartoon.com');
  1. canrfcemail('"foo"(yay)@(hoopla)[1.2.3.4]');
  1. canrfcemail('cal(foo(bar)@iamcal.com');
  1. canrfcemail('cal(foo)bar)@iamcal.com');
  1. canrfcemail('cal(foo\)@iamcal.com');
  1. canrfcemail('first(12345678901234567890123456789012345678901234567890)last@(123456789012345678901234567890123456789012');
  1. canrfcemail('first(middle)last@iana.org');
  1. canrfcemail('first(abc("def".ghi).mno)middle(abc("def".ghi).mno).last@(abc("def".ghi).mno)example(abc("def".ghi).mno).');
  1. canrfcemail('a(a(b(c)d(e(f))g)(h(i)j)@iana.org');
  1. __<strike>canrfcemail('.@');</strike>__
  1. __<strike>canrfcemail('@bar.com');</strike>__
  1. canrfcemail('@@bar.com');
  1. __<strike>canrfcemail('aaa.com');</strike>__
  1. canrfcemail('aaa@.com');
  1. canrfcemail('aaa@.123');
  1. canrfcemail('aaa@[123.123.123.123]a');
  1. canrfcemail('aaa@[123.123.123.333]');
  1. canrfcemail('a@bar.com.');
  1. canrfcemail('a@-b.com');
  1. canrfcemail('a@b-.com');
  1. canrfcemail('-@..com');
  1. canrfcemail('-@a..com');
  1. canrfcemail('invalid@about.museum-');
  1. canrfcemail('test@...........com');
  1. __<strike>canrfcemail('"Unicode NULL');</strike>__


[0]: http://www.bumblehead.com                            "bumblehead"
[1]: http://www.regular-expressions.info/email.html
[2]: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
[3]: https://tools.ietf.org/html/rfc2822#section-3.4.1
[4]: http://blog.stackoverflow.com/2008/05/now-licensed-under-creative-commons/
[5]: https://code.google.com/p/isemail/downloads/detail?name=is_email-3.01.zip&can=2&q=
[6]: http://isemail.info/about
[7]: https://github.com/snoj/email-validation/blob/master/lib/email-validation.js
[8]: https://github.com/umakantp/is_email.js/blob/master/is_email.js
[9]: https://github.com/johnhenry/valid-email/blob/master/lib/valid-email.js
[10]: https://github.com/Sembiance/email-validator/blob/master/index.js
[11]: http://regular-expressions.info/email.html
[12]: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
[13]: http://tools.ietf.org/html/rfc3696
[14]: http://code.iamcal.com/php/rfc822/ "cal henderson"
[15]: http://fightingforalostcause.net/content/misc/2006/compare-email-regex.php "validation re discussion"
[16]: http://en.wikipedia.org/wiki/Email_address "start-here"

---------------------------------------------------------
#### <a id="install"></a>Install:

`canrfcemail` may be downloaded directly or installed through `npm`.

 * **npm**

 ```bash
 $ npm install canrfcemail
 ```

 * **Direct Download**
 
 ```bash
 $ git clone https://github.com/iambumblehead/canrfcemail.git
 ```

---------------------------------------------------------
#### <a id="test"></a>Test:

 to run tests, use `npm test` from a shell.

 ```bash
 $ npm test
 ```

---------------------------------------------------------
#### <a id="license">License:

![scrounge](http://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2014 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


(The BSD License), [Here][18]


[18]: http://opensource.org/licenses/bsd-license.php  "bsd-license"
