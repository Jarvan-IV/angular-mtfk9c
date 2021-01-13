import {minxins} from './minxins';
import {FooModal} from './foo.modal';

function testable(target) {
  target.isTestable = true;
}

function second(name, methodName?) {
  return function(target) {
    target.testname = name;
    target.testname1 = methodName;
  };
}

const Foo = {
  foo() { return 'foofff'}
};

@testable
@second('aaa', 'ff')
@minxins(Foo)
export class MyTestableClass {

}

