// Filename: canrfcemail.spec.js  
// Timestamp: 2014.04.20-17:32:48 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var canrfcemail = require('../canrfcemail');

describe("valid email address canrfcemail", function () {

  it("should return `true` for `june@bloom.com`", function () {
    expect( canrfcemail('june@bloom.com') ).toBe(true);
  });

  it("should return `true` for `bill.brave+spa@gmail.com`", function () {
    expect( canrfcemail('bill.brave+spa@gmail.com') ).toBe(true);
  });

  it("should return `true` for `invalid`", function () {
    expect( canrfcemail('invalid') ).toBe(true);
  });

  it("should return `true` for `ju^+ne@bloom.com`", function () {
    expect( canrfcemail('ju^+ne@bloom.com') ).toBe(true);
  });

  it("should return `true` for `first.last@iana.org`", function () {
    expect( canrfcemail('first.last@iana.org') ).toBe(true);
  });

  it("should return `true` for `1234567890123456789012345678901234567890123456789012345678901234@iana.org`", function () {
    expect( canrfcemail('1234567890123456789012345678901234567890123456789012345678901234@iana.org') ).toBe(true);
  });

  it('should return `true` for `"first\"last"@iana.org`', function () {
    expect( canrfcemail('"first\"last"@iana.org') ).toBe(true);
  });

  it("should return `true` for `1234567890123456789012345678901234567890123456789012345678@1234567890123456789012345678901234567890123456`", function () {
    expect( canrfcemail('1234567890123456789012345678901234567890123456789012345678@1234567890123456789012345678901234567890123456') ).toBe(true);
  });

  it("should return `true` for `first.last@[12.34.56.78]`", function () {
    expect( canrfcemail('first.last@[12.34.56.78]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:::12.34.56.78]`", function () {
    expect( canrfcemail('first.last@[IPv6:::12.34.56.78]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:1111:2222:3333::4444:12.34.56.78]`", function () {
    expect( canrfcemail('first.last@[IPv6:1111:2222:3333::4444:12.34.56.78]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:1111:2222:3333:4444:5555:6666:12.34.56.78]`", function () {
    expect( canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:6666:12.34.56.78]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:::1111:2222:3333:4444:5555:6666]`", function () {
    expect( canrfcemail('first.last@[IPv6:::1111:2222:3333:4444:5555:6666]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:1111:2222:3333::4444:5555:6666]`", function () {
    expect( canrfcemail('first.last@[IPv6:1111:2222:3333::4444:5555:6666]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:1111:2222:3333:4444:5555:6666::]`", function () {
    expect( canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:6666::]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:8888]`", function () {
    expect( canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:8888]') ).toBe(true);
  });

  it("should return `true` for `first.last@x23456789012345678901234567890123456789012345678901234567890123.iana.org`", function () {
    expect( canrfcemail('first.last@x23456789012345678901234567890123456789012345678901234567890123.iana.org') ).toBe(true);
  });

  it("should return `true` for `first.last@3com.com`", function () {
    expect( canrfcemail('first.last@3com.com') ).toBe(true);
  });

  it("should return `true` for `first.last@123.iana.org`", function () {
    expect( canrfcemail('first.last@123.iana.org') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:1111:2222:3333::4444:5555:12.34.56.78]`", function () {
    expect( canrfcemail('first.last@[IPv6:1111:2222:3333::4444:5555:12.34.56.78]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:1111:2222:3333::4444:5555:6666:7777]`", function () {
    expect( canrfcemail('first.last@[IPv6:1111:2222:3333::4444:5555:6666:7777]') ).toBe(true);
  });

  it("should return `true` for `first.last@example.123`", function () {
    expect( canrfcemail('first.last@example.123') ).toBe(true);
  });

  it("should return `true` for `first.last@com`", function () {
    expect( canrfcemail('first.last@com') ).toBe(true);
  });

  it('should return `true` for `"Abc\@def"@iana.org`', function () {
    expect( canrfcemail('"Abc\@def"@iana.org') ).toBe(true);
  });

  it('should return `true` for `"Fred\ Bloggs"@iana.org`', function () {
    expect( canrfcemail('"Fred\ Bloggs"@iana.org') ).toBe(true);
  });

  it('should return `true` for `"Joe.\Blow"@iana.org`', function () {
    expect( canrfcemail('"Joe.\Blow"@iana.org') ).toBe(true);
  });

  it('should return `true` for `"Abc@def"@iana.org`', function () {
    expect( canrfcemail('"Abc@def"@iana.org') ).toBe(true);
  });

  it('should return `true` for `"Fred Bloggs"@iana.org`', function () {
    expect( canrfcemail('"Fred Bloggs"@iana.org') ).toBe(true);
  });

  it("should return `true` for `user+mailbox@iana.org`", function () {
    expect( canrfcemail('user+mailbox@iana.org') ).toBe(true);
  });

  it("should return `true` for `customer/department=shipping@iana.org`", function () {
    expect( canrfcemail('customer/department=shipping@iana.org') ).toBe(true);
  });

  it("should return `true` for `$A12345@iana.org`", function () {
    expect( canrfcemail('$A12345@iana.org') ).toBe(true);
  });

  it("should return `true` for `!def!xyz%abc@iana.org`", function () {
    expect( canrfcemail('!def!xyz%abc@iana.org') ).toBe(true);
  });

  it("should return `true` for `_somename@iana.org`", function () {
    expect( canrfcemail('_somename@iana.org') ).toBe(true);
  });

  it("should return `true` for `dclo@us.ibm.com`", function () {
    expect( canrfcemail('dclo@us.ibm.com') ).toBe(true);
  });

  it("should return `true` for `peter.piper@iana.org`", function () {
    expect( canrfcemail('peter.piper@iana.org') ).toBe(true);
  });

  it('should return `true` for `"Doug \"Ace\" L."@iana.org`', function () {
    expect( canrfcemail('"Doug \"Ace\" L."@iana.org') ).toBe(true);
  });

  it("should return `true` for `test@iana.org`", function () {
    expect( canrfcemail('test@iana.org') ).toBe(true);
  });

  it("should return `true` for `TEST@iana.org`", function () {
    expect( canrfcemail('TEST@iana.org') ).toBe(true);
  });

  it("should return `true` for `1234567890@iana.org`", function () {
    expect( canrfcemail('1234567890@iana.org') ).toBe(true);
  });

  it("should return `true` for `test+test@iana.org`", function () {
    expect( canrfcemail('test+test@iana.org') ).toBe(true);
  });

  it("should return `true` for `test-test@iana.org`", function () {
    expect( canrfcemail('test-test@iana.org') ).toBe(true);
  });

  it("should return `true` for `t*est@iana.org`", function () {
    expect( canrfcemail('t*est@iana.org') ).toBe(true);
  });

  it("should return `true` for `+1~1+@iana.org`", function () {
    expect( canrfcemail('+1~1+@iana.org') ).toBe(true);
  });

  it("should return `true` for `{_test_}@iana.org`", function () {
    expect( canrfcemail('{_test_}@iana.org') ).toBe(true);
  });

  it('should return `true` for `"[[ test ]]"@iana.org`', function () {
    expect( canrfcemail('"[[ test ]]"@iana.org') ).toBe(true);
  });

  it("should return `true` for `test.test@iana.org`", function () {
    expect( canrfcemail('test.test@iana.org') ).toBe(true);
  });

  it('should return `true` for `"test.test"@iana.org`', function () {
    expect( canrfcemail('"test.test"@iana.org') ).toBe(true);
  });

  it('should return `true` for `test."test"@iana.org`', function () {
    expect( canrfcemail('test."test"@iana.org') ).toBe(true);
  });

  it('should return `true` for `"test@test"@iana.org`', function () {
    expect( canrfcemail('"test@test"@iana.org') ).toBe(true);
  });

  it("should return `true` for `test@123.123.123.x123`", function () {
    expect( canrfcemail('test@123.123.123.x123') ).toBe(true);
  });

  it("should return `true` for `test@123.123.123.123`", function () {
    expect( canrfcemail('test@123.123.123.123') ).toBe(true);
  });

  it("should return `true` for `test@[123.123.123.123]`", function () {
    expect( canrfcemail('test@[123.123.123.123]') ).toBe(true);
  });

  it("should return `true` for `test@example.iana.org`", function () {
    expect( canrfcemail('test@example.iana.org') ).toBe(true);
  });

  it("should return `true` for `test@example.example.iana.org`", function () {
    expect( canrfcemail('test@example.example.iana.org') ).toBe(true);
  });

  it('should return `true` for `"test\test"@iana.org`', function () {
    expect( canrfcemail('"test\test"@iana.org') ).toBe(true);
  });

  it("should return `true` for `test@example`", function () {
    expect( canrfcemail('test@example') ).toBe(true);
  });

  it('should return `true` for `"test\"blah"@iana.org`', function () {
    expect( canrfcemail('"test\"blah"@iana.org') ).toBe(true);
  });

  it("should return `true` for `customer/department@iana.org`", function () {
    expect( canrfcemail('customer/department@iana.org') ).toBe(true);
  });

  it("should return `true` for `_Yosemite.Sam@iana.org`", function () {
    expect( canrfcemail('_Yosemite.Sam@iana.org') ).toBe(true);
  });

  it("should return `true` for `~@iana.org`", function () {
    expect( canrfcemail('~@iana.org') ).toBe(true);
  });

  it('should return `true` for `"Austin@Powers"@iana.org`', function () {
    expect( canrfcemail('"Austin@Powers"@iana.org') ).toBe(true);
  });

  it("should return `true` for `Ima.Fool@iana.org`", function () {
    expect( canrfcemail('Ima.Fool@iana.org') ).toBe(true);
  });

  it('should return `true` for `"Ima.Fool"@iana.org`', function () {
    expect( canrfcemail('"Ima.Fool"@iana.org') ).toBe(true);
  });

  it('should return `true` for `"Ima Fool"@iana.org`', function () {
    expect( canrfcemail('"Ima Fool"@iana.org') ).toBe(true);
  });

  it('should return `true` for `"first"."last"@iana.org`', function () {
    expect( canrfcemail('"first"."last"@iana.org') ).toBe(true);
  });

  it('should return `true` for `"first".middle."last"@iana.org`', function () {
    expect( canrfcemail('"first".middle."last"@iana.org') ).toBe(true);
  });

  it('should return `true` for `"first".last@iana.org`', function () {
    expect( canrfcemail('"first".last@iana.org') ).toBe(true);
  });

  it('should return `true` for `first."last"@iana.org`', function () {
    expect( canrfcemail('first."last"@iana.org') ).toBe(true);
  });

  it('should return `true` for `"first"."middle"."last"@iana.org`', function () {
    expect( canrfcemail('"first"."middle"."last"@iana.org') ).toBe(true);
  });

  it('should return `true` for `"first.middle"."last"@iana.org`', function () {
    expect( canrfcemail('"first.middle"."last"@iana.org') ).toBe(true);
  });

  it('should return `true` for `"first.middle.last"@iana.org`', function () {
    expect( canrfcemail('"first.middle.last"@iana.org') ).toBe(true);
  });

  it('should return `true` for `"first..last"@iana.org`', function () {
    expect( canrfcemail('"first..last"@iana.org') ).toBe(true);
  });

  it('should return `true` for `"first\\\"last"@iana.org`', function () {
    expect( canrfcemail('"first\\\"last"@iana.org') ).toBe(true);
  });

  it('should return `true` for `first."mid\dle"."last"@iana.org`', function () {
    expect( canrfcemail('first."mid\dle"."last"@iana.org') ).toBe(true);
  });

  it('should return `true` for `"test blah"@iana.org`', function () {
    expect( canrfcemail('"test blah"@iana.org') ).toBe(true);
  });

  it("should return `true` for `(foo)cal(bar)@(baz)iamcal.com(quux)`", function () {
    expect( canrfcemail('(foo)cal(bar)@(baz)iamcal.com(quux)') ).toBe(true);
  });

  it("should return `true` for `cal@iamcal(woo).(yay)com`", function () {
    expect( canrfcemail('cal@iamcal(woo).(yay)com') ).toBe(true);
  });

  it("should return `true` for `cal(woo(yay)hoopla)@iamcal.com`", function () {
    expect( canrfcemail('cal(woo(yay)hoopla)@iamcal.com') ).toBe(true);
  });

  it("should return `true` for `cal(foo\@bar)@iamcal.com`", function () {
    expect( canrfcemail('cal(foo\@bar)@iamcal.com') ).toBe(true);
  });

  it("should return `true` for `cal(foo\)bar)@iamcal.com`", function () {
    expect( canrfcemail('cal(foo\)bar)@iamcal.com') ).toBe(true);
  });

  it("should return `true` for `first().last@iana.org`", function () {
    expect( canrfcemail('first().last@iana.org') ).toBe(true);
  });

  it("should return `true` for `pete(his account)@silly.test(his host)`", function () {
    expect( canrfcemail('pete(his account)@silly.test(his host)') ).toBe(true);
  });

  it("should return `true` for `c@(Chris's host.)public.example`", function () {
    expect( canrfcemail("c@(Chris's host.)public.example") ).toBe(true);
  });

  it("should return `true` for `jdoe@machine(comment). example`", function () {
    expect( canrfcemail('jdoe@machine(comment). example') ).toBe(true);
  });

  it("should return `true` for `1234 @ local(blah) .machine .example`", function () {
    expect( canrfcemail('1234 @ local(blah) .machine .example') ).toBe(true);
  });

  it("should return `true` for `first(abc.def).last@iana.org`", function () {
    expect( canrfcemail('first(abc.def).last@iana.org') ).toBe(true);
  });

  it('should return `true` for `first(a"bc.def).last@iana.org`', function () {
    expect( canrfcemail('first(a"bc.def).last@iana.org') ).toBe(true);
  });

  it("should return `true` for `first.(\")middle.last(\")@iana.org`", function () {
    expect( canrfcemail('first.(")middle.last(")@iana.org') ).toBe(true);
  });

  it("should return `true` for `first(abc\(def)@iana.org`", function () {
    expect( canrfcemail('first(abc\(def)@iana.org') ).toBe(true);
  });

  it("should return `true` for `first.last@x(1234567890123456789012345678901234567890123456789012345678901234567890).com`", function () {
    expect( canrfcemail('first.last@x(1234567890123456789012345678901234567890123456789012345678901234567890).com') ).toBe(true);
  });

  it("should return `true` for `a(a(b(c)d(e(f))g)h(i)j)@iana.org`", function () {
    expect( canrfcemail('a(a(b(c)d(e(f))g)h(i)j)@iana.org') ).toBe(true);
  });

  it("should return `true` for `name.lastname@domain.com`", function () {
    expect( canrfcemail('name.lastname@domain.com') ).toBe(true);
  });

  it("should return `true` for `a@b`", function () {
    expect( canrfcemail('a@b') ).toBe(true);
  });

  it("should return `true` for `a@bar.com`", function () {
    expect( canrfcemail('a@bar.com') ).toBe(true);
  });

  it("should return `true` for `aaa@[123.123.123.123]`", function () {
    expect( canrfcemail('aaa@[123.123.123.123]') ).toBe(true);
  });

  it("should return `true` for `a@bar`", function () {
    expect( canrfcemail('a@bar') ).toBe(true);
  });

  it("should return `true` for `a-b@bar.com`", function () {
    expect( canrfcemail('a-b@bar.com') ).toBe(true);
  });

  it("should return `true` for `+@b.c`", function () {
    expect( canrfcemail('+@b.c') ).toBe(true);
  });

  it("should return `true` for `+@b.com`", function () {
    expect( canrfcemail('+@b.com') ).toBe(true);
  });

  it("should return `true` for `a@b.co-foo.uk`", function () {
    expect( canrfcemail('a@b.co-foo.uk') ).toBe(true);
  });

  it('should return `true` for `"hello my name is"@stutter.com`', function () {
    expect( canrfcemail('"hello my name is"@stutter.com') ).toBe(true);
  });

  it('should return `true` for `"Test \"Fail\" Ing"@iana.org`', function () {
    expect( canrfcemail('"Test \"Fail\" Ing"@iana.org') ).toBe(true);
  });

  it("should return `true` for `valid@about.museum`", function () {
    expect( canrfcemail('valid@about.museum') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('shaitan@my-domain.thisisminekthx') ).toBe(true);
  });

  it("should return `true` for `foobar@192.168.0.1`", function () {
    expect( canrfcemail('foobar@192.168.0.1') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('"Joe\Blow"@iana.org') ).toBe(true);
  });

  it("should return `true` for `HM2Kinsists@(that comments are allowed)this.is.ok`", function () {
    expect( canrfcemail('HM2Kinsists@(that comments are allowed)this.is.ok') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('user%uucp!path@berkeley.edu') ).toBe(true);
  });

  it("should return `true` for `first.last @iana.org`", function () {
    expect( canrfcemail('first.last @iana.org') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail("cdburgess+!#$%&'*-/=?+_{}|~test@gmail.com") ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:::a2:a3:a4:b1:b2:b3:b4]`", function () {
    expect( canrfcemail('first.last@[IPv6:::a2:a3:a4:b1:b2:b3:b4]') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('first.last@[IPv6:a1:a2:a3:a4:b1:b2:b3::]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:::]`", function () {
    expect( canrfcemail('first.last@[IPv6:::]') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('first.last@[IPv6:::b4]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:::b3:b4]`", function () {
    expect( canrfcemail('first.last@[IPv6:::b3:b4]') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('first.last@[IPv6:a1::b4]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:a1::]`", function () {
    expect( canrfcemail('first.last@[IPv6:a1::]') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('first.last@[IPv6:a1:a2::]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:0123:4567:89ab:cdef::]`", function () {
    expect( canrfcemail('first.last@[IPv6:0123:4567:89ab:cdef::]') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('first.last@[IPv6:0123:4567:89ab:CDEF::]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:::a3:a4:b1:ffff:11.22.33.44]`", function () {
    expect( canrfcemail('first.last@[IPv6:::a3:a4:b1:ffff:11.22.33.44]') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('first.last@[IPv6:::a2:a3:a4:b1:ffff:11.22.33.44]') ).toBe(true);
  });

  it('should return `true` for `"test\blah"@iana.org`', function () {
    expect( canrfcemail('"test\blah"@iana.org') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('x@x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:a1:a2:a3:a4::11.22.33.44]`", function () {
    expect( canrfcemail('first.last@[IPv6:a1:a2:a3:a4::11.22.33.44]') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('first.last@[IPv6:a1:a2:a3:a4:b1::11.22.33.44]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:a1::11.22.33.44]`", function () {
    expect( canrfcemail('first.last@[IPv6:a1::11.22.33.44]') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('first.last@[IPv6:a1:a2::11.22.33.44]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:0123:4567:89ab:cdef::11.22.33.44]`", function () {
    expect( canrfcemail('first.last@[IPv6:0123:4567:89ab:cdef::11.22.33.44]') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('first.last@[IPv6:0123:4567:89ab:CDEF::11.22.33.44]') ).toBe(true);
  });

  it("should return `true` for `first.last@[IPv6:a1::b2:11.22.33.44]`", function () {
    expect( canrfcemail('first.last@[IPv6:a1::b2:11.22.33.44]') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('test@test.com') ).toBe(true);
  });

  it("should return `true` for `test@xn--example.com`", function () {
    expect( canrfcemail('test@xn--example.com') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('test@example.com') ).toBe(true);
  });

  it('should return `true` for `"first\last"@iana.org`', function () {
    expect( canrfcemail('"first\last"@iana.org') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('first\@last@iana.org') ).toBe(true);
  });

  it("should return `true` for `abc\@def@iana.org`", function () {
    expect( canrfcemail('abc\@def@iana.org') ).toBe(true);
  });

  it("should return `true` for `:val`", function () {
    expect( canrfcemail('abc\@iana.org') ).toBe(true);
  });

});

describe("invalid email address canrfc", function () {
  /*
  it("should return `false` for `first.last@sub.do,com`", function () {
    expect( canrfcemail('first.last@sub.do,com') ).toBe(false);
  });

  it("should return `false` for `123456789012345678901234567890123456789012345678901234567890@12345678901234567890123456789012345678901234`", function () {
    expect( canrfcemail('123456789012345678901234567890123456789012345678901234567890@12345678901234567890123456789012345678901234') ).toBe(false);
  });
   */

  it("should return `false` `first.last`", function () {
    expect( canrfcemail('first.last') ).toBe(false);
  });
  /*
  it("should return `false` for `12345678901234567890123456789012345678901234567890123456789012345@iana.org`", function () {
    expect( canrfcemail('12345678901234567890123456789012345678901234567890123456789012345@iana.org') ).toBe(false);
  });

  it("should return `false` for `.first.last@iana.org`", function () {
    expect( canrfcemail('.first.last@iana.org') ).toBe(false);
  });

  it("should return `false` for `first.last.@iana.org`", function () {
    expect( canrfcemail('first.last.@iana.org') ).toBe(false);
  });

  it("should return `false` for `first..last@iana.org`", function () {
    expect( canrfcemail('first..last@iana.org') ).toBe(false);
  });

  it('should return `false` for `"first"last"@iana.org`', function () {
    expect( canrfcemail('"first"last"@iana.org') ).toBe(false);
  });

  it('should return `false` for `"""@iana.org`', function () {
    expect( canrfcemail('"""@iana.org') ).toBe(false);
  });

  it('should return `false` for `"\"@iana.org`', function () {
    expect( canrfcemail('"\"@iana.org') ).toBe(false);
  });

  it('should return `false` for `""@iana.org`', function () {
    expect( canrfcemail('""@iana.org') ).toBe(false);
  });
   */
  it("should return `false` for `first.last@`", function () {
    expect( canrfcemail('first.last@') ).toBe(false);
  });
  /*
  it("should return `false` for `first.last@[.12.34.56.78]`", function () {
    expect( canrfcemail('first.last@[.12.34.56.78]') ).toBe(false);
  });

  it("should return `false` for `first.last@[12.34.56.789]`", function () {
    expect( canrfcemail('first.last@[12.34.56.789]') ).toBe(false);
  });

  it("should return `false` for `first.last@[::12.34.56.78]`", function () {
    expect( canrfcemail('first.last@[::12.34.56.78]') ).toBe(false);
  });

  it("should return `false` for `first.last@[IPv5:::12.34.56.78]`", function () {
    expect( canrfcemail('first.last@[IPv5:::12.34.56.78]') ).toBe(false);
  });

  it("should return `false` for `first.last@[IPv6:1111:2222:3333:4444:5555:12.34.56.78]`", function () {
    expect( canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:12.34.56.78]') ).toBe(false);
  });

  it("should return `false` for `first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:12.34.56.78]`", function () {
    expect( canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:12.34.56.78]') ).toBe(false);
  });

  it("should return `false` for `first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777]`", function () {
    expect( canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777]') ).toBe(false);
  });

  it("should return `false` for `first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:8888:9999]`", function () {
    expect( canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:8888:9999]') ).toBe(false);
  });

  it("should return `false` for `first.last@[IPv6:1111:2222::3333::4444:5555:6666]`", function () {
    expect( canrfcemail('first.last@[IPv6:1111:2222::3333::4444:5555:6666]') ).toBe(false);
  });

  it("should return `false` for `first.last@[IPv6:1111:2222:333x::4444:5555]`", function () {
    expect( canrfcemail('first.last@[IPv6:1111:2222:333x::4444:5555]') ).toBe(false);
  });

  it("should return `false` for `first.last@[IPv6:1111:2222:33333::4444:5555]`", function () {
    expect( canrfcemail('first.last@[IPv6:1111:2222:33333::4444:5555]') ).toBe(false);
  });

  it("should return `false` for `first.last@-xample.com`", function () {
    expect( canrfcemail('first.last@-xample.com') ).toBe(false);
  });

  it("should return `false` for `first.last@exampl-.com`", function () {
    expect( canrfcemail('first.last@exampl-.com') ).toBe(false);
  });

  it("should return `false` for `first.last@x234567890123456789012345678901234567890123456789012345678901234.iana.org`", function () {
    expect( canrfcemail('first.last@x234567890123456789012345678901234567890123456789012345678901234.iana.org') ).toBe(false);
  });

  it("should return `false` for `Doug\ \"Ace\"\ Lovell@iana.org`", function () {
    expect( canrfcemail('Doug\ \"Ace\"\ Lovell@iana.org') ).toBe(false);
  });

  it("should return `false` for `abc@def@iana.org`", function () {
    expect( canrfcemail('abc@def@iana.org') ).toBe(false);
  });
   */
  it("should return `false` for `@iana.org", function () {
    expect( canrfcemail('@iana.org') ).toBe(false);
  });

  it("should return `false` for `doug@`", function () {
    expect( canrfcemail('doug@') ).toBe(false);
  });
  /*
  it('should return `false` for `"qu@iana.org`', function () {
    expect( canrfcemail('"qu@iana.org') ).toBe(false);
  });

  it('should return `false` for `ote"@iana.org`', function () {
    expect( canrfcemail('ote"@iana.org') ).toBe(false);
  });

  it("should return `false` for `.dot@iana.org`", function () {
    expect( canrfcemail('.dot@iana.org') ).toBe(false);
  });

  it("should return `false` for `dot.@iana.org`", function () {
    expect( canrfcemail('dot.@iana.org') ).toBe(false);
  });

  it("should return `false` for `two..dot@iana.org`", function () {
    expect( canrfcemail('two..dot@iana.org') ).toBe(false);
  });

  it('should return `false` for `"Doug "Ace" L."@iana.org`', function () {
    expect( canrfcemail('"Doug "Ace" L."@iana.org') ).toBe(false);
  });

  it("should return `false` for `Doug\ \"Ace\"\ L\.@iana.org`", function () {
    expect( canrfcemail('Doug\ \"Ace\"\ L\.@iana.org') ).toBe(false);
  });

  it("should return `false` for `hello world@iana.org`", function () {
    expect( canrfcemail('hello world@iana.org') ).toBe(false);
  });

  it("should return `false` for `gatsby@f.sc.ot.t.f.i.tzg.era.l.d.`", function () {
    expect( canrfcemail('gatsby@f.sc.ot.t.f.i.tzg.era.l.d.') ).toBe(false);
  });
   */
  it("should return `false` for `test.iana.org`", function () {
    expect( canrfcemail('test.iana.org') ).toBe(false);
  });
  /*
  it("should return `false` for `test.@iana.org`", function () {
    expect( canrfcemail('test.@iana.org') ).toBe(false);
  });

  it("should return `false` for `test..test@iana.org`", function () {
    expect( canrfcemail('test..test@iana.org') ).toBe(false);
  });

  it("should return `false` for `.test@iana.org`", function () {
    expect( canrfcemail('.test@iana.org') ).toBe(false);
  });

  it("should return `false` for `test@test@iana.org`", function () {
    expect( canrfcemail('test@test@iana.org') ).toBe(false);
  });

  it("should return `false` for `test@@iana.org`", function () {
    expect( canrfcemail('test@@iana.org') ).toBe(false);
  });

  it("should return `false` for `-- test --@iana.org`", function () {
    expect( canrfcemail('-- test --@iana.org') ).toBe(false);
  });

  it("should return `false` for `[test]@iana.org`", function () {
    expect( canrfcemail('[test]@iana.org') ).toBe(false);
  });

  it('should return `false` for `"test"test"@iana.org`', function () {
    expect( canrfcemail('"test"test"@iana.org') ).toBe(false);
  });
   */
  it("should return `false` for `()[]\;:,>`", function () {
    expect( canrfcemail('()[]\;:,>') ).toBe(false);
  });
  /*
  it("should return `false` for `test@.`", function () {
    expect( canrfcemail('test@.') ).toBe(false);
  });

  it("should return `false` for `test@example.`", function () {
    expect( canrfcemail('test@example.') ).toBe(false);
  });

  it("should return `false` for `test@.org`", function () {
    expect( canrfcemail('test@.org') ).toBe(false);
  });

  it("should return `false` for `test@1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890`", function () {
    expect( canrfcemail('test@1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890') ).toBe(false);
  });

  it("should return `false` for `test@[123.123.123.123`", function () {
    expect( canrfcemail('test@[123.123.123.123') ).toBe(false);
  });

  it("should return `false` for `test@123.123.123.123]`", function () {
    expect( canrfcemail('test@123.123.123.123]') ).toBe(false);
  });
   */
  it("should return `false` for `NotAnEmail`", function () {
    expect( canrfcemail('NotAnEmail') ).toBe(false);
  });
  /*
  it('should return `false` for `"test"blah"@iana.org`', function () {
    expect( canrfcemail('"test"blah"@iana.org') ).toBe(false);
  });

  it("should return `false` for `.wooly@iana.org`", function () {
    expect( canrfcemail('.wooly@iana.org') ).toBe(false);
  });

  it("should return `false` for `wo..oly@iana.org`", function () {
    expect( canrfcemail('wo..oly@iana.org') ).toBe(false);
  });

  it("should return `false` for `pootietang.@iana.org`", function () {
    expect( canrfcemail('pootietang.@iana.org') ).toBe(false);
  });

  it("should return `false` for `.@iana.org`", function () {
    expect( canrfcemail('.@iana.org') ).toBe(false);
  });

  it("should return `false` for `Ima Fool@iana.org`", function () {
    expect( canrfcemail('Ima Fool@iana.org') ).toBe(false);
  });

  it("should return `false` for `phil.h\@\@ck@haacked.com`", function () {
    expect( canrfcemail('phil.h\@\@ck@haacked.com') ).toBe(false);
  });

  it("should return `false` for `foo@[\1.2.3.4]`", function () {
    expect( canrfcemail('foo@[\1.2.3.4]') ).toBe(false);
  });

  it('should return `false` for `first."".last@iana.org`', function () {
    expect( canrfcemail('first."".last@iana.org') ).toBe(false);
  });

  it("should return `false` for `first\last@iana.org`", function () {
    expect( canrfcemail('first\last@iana.org') ).toBe(false);
  });

  it("should return `false` for `Abc\@def@iana.org`", function () {
    expect( canrfcemail('Abc\@def@iana.org') ).toBe(false);
  });

  it("should return `false` for `Fred\ Bloggs@iana.org`", function () {
    expect( canrfcemail('Fred\ Bloggs@iana.org') ).toBe(false);
  });

  it("should return `false` for `Joe.\Blow@iana.org`", function () {
    expect( canrfcemail('Joe.\Blow@iana.org') ).toBe(false);
  });

  it("should return `false` for `first.last@[IPv6:1111:2222:3333:4444:5555:6666:12.34.567.89]`", function () {
    expect( canrfcemail('first.last@[IPv6:1111:2222:3333:4444:5555:6666:12.34.567.89]') ).toBe(false);
  });

  it("should return `false` for `{^c\@**Dog^}@cartoon.com`", function () {
    expect( canrfcemail('{^c\@**Dog^}@cartoon.com') ).toBe(false);
  });

  it('should return `false` for `"foo"(yay)@(hoopla)[1.2.3.4]`', function () {
    expect( canrfcemail('"foo"(yay)@(hoopla)[1.2.3.4]') ).toBe(false);
  });

  it("should return `false` for `cal(foo(bar)@iamcal.com`", function () {
    expect( canrfcemail('cal(foo(bar)@iamcal.com') ).toBe(false);
  });

  it("should return `false` for `cal(foo)bar)@iamcal.com`", function () {
    expect( canrfcemail('cal(foo)bar)@iamcal.com') ).toBe(false);
  });

  it("should return `false` for `cal(foo\)@iamcal.com`", function () {
    expect( canrfcemail('cal(foo\)@iamcal.com') ).toBe(false);
  });

  it("should return `false` for `first(12345678901234567890123456789012345678901234567890)last@(123456789012345678901234567890123456789012`", function () {
    expect( canrfcemail('first(12345678901234567890123456789012345678901234567890)last@(123456789012345678901234567890123456789012') ).toBe(false);
  });

  it("should return `false` for `first(middle)last@iana.org`", function () {
    expect( canrfcemail('first(middle)last@iana.org') ).toBe(false);
  });

  it('should return `false` for `first(abc("def".ghi).mno)middle(abc("def".ghi).mno).last@(abc("def".ghi).mno)example(abc("def".ghi).mno).`', function () {
    expect( canrfcemail('first(abc("def".ghi).mno)middle(abc("def".ghi).mno).last@(abc("def".ghi).mno)example(abc("def".ghi).mno).') ).toBe(false);
  });

  it("should return `false` for `a(a(b(c)d(e(f))g)(h(i)j)@iana.org`", function () {
    expect( canrfcemail('a(a(b(c)d(e(f))g)(h(i)j)@iana.org') ).toBe(false);
  });
   */
  it("should return `false` for `.@`", function () {
    expect( canrfcemail('.@') ).toBe(false);
  });

  it("should return `false` for `@bar.com`", function () {
    expect( canrfcemail('@bar.com') ).toBe(false);
  });
  /*
  it("should return `false` for `@@bar.com`", function () {
    expect( canrfcemail('@@bar.com') ).toBe(false);
  });
   */
  it("should return `false` for `aaa.com`", function () {
    expect( canrfcemail('aaa.com') ).toBe(false);
  });
  /*
  it("should return `false` for `aaa@.com`", function () {
    expect( canrfcemail('aaa@.com') ).toBe(false);
  });

  it("should return `false` for `aaa@.123`", function () {
    expect( canrfcemail('aaa@.123') ).toBe(false);
  });

  it("should return `false` for `aaa@[123.123.123.123]a`", function () {
    expect( canrfcemail('aaa@[123.123.123.123]a') ).toBe(false);
  });

  it("should return `false` for `aaa@[123.123.123.333]`", function () {
    expect( canrfcemail('aaa@[123.123.123.333]') ).toBe(false);
  });

  it("should return `false` for `a@bar.com.`", function () {
    expect( canrfcemail('a@bar.com.') ).toBe(false);
  });

  it("should return `false` for `a@-b.com`", function () {
    expect( canrfcemail('a@-b.com') ).toBe(false);
  });

  it("should return `false` for `a@b-.com`", function () {
    expect( canrfcemail('a@b-.com') ).toBe(false);
  });

  it("should return `false` for `-@..com`", function () {
    expect( canrfcemail('-@..com') ).toBe(false);
  });

  it("should return `false` for `-@a..com`", function () {
    expect( canrfcemail('-@a..com') ).toBe(false);
  });

  it("should return `false` for `invalid@about.museum-`", function () {
    expect( canrfcemail('invalid@about.museum-') ).toBe(false);
  });

  it("should return `false` for `test@...........com`", function () {
    expect( canrfcemail('test@...........com') ).toBe(false);
  });
   */
  it('should return `false` for `"Unicode NULL`', function () {
    expect( canrfcemail('"Unicode NULL') ).toBe(false);
  });

});

