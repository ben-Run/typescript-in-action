// reference 文件内容与当前文件内容合并，
/// <reference path="./b.ts" />
// 如果名称空间是export 那么久没有必要使用reference，直接使用import即可

import {
  Person as Person_b
} from './b'

import {
  toolbarSys
} from './c'

 namespace Person {
  export class man {
    run():void {
    }
  }
}

const p = new Person.man()

// b.ts 中CommonMethod的名称空间
console.log(Person)
Person_b.say()
// Person_b.say1() // 报错，因为在b.ts 中say1 没有导出

// c.ts的名称空间
toolbarSys.todoList()