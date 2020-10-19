interface IHuman {
  name:string;
  eat():void;
}

class Asian implements IHuman {
  name:string;
  age:number;
  constructor (name:string,age:number) {
    this.name = name
    this.age = age
  }
  eat():void {
    console.log(`${this.name}，eat`)
  }
  sleep():void {
    console.log(`${this.name}，sleep`)
  }

}

interface IMan extends IHuman {
  run():void
}

interface IChild {
  cry():void;
}

interface IBoy extends IMan, IChild {
}

interface IPerson1 extends Asian {
  work():void;
}

// 接口可以继承多个接口
// 类可以继承类，只能继承一个父类，可以实现多个接口
// 接口可以继承类，类可以实现接口

let boy:IBoy = {
  name: 'joel',
  run():void {},
  eat():void {},
  cry():void {}
}

// 接口可以继承类，类可以实现接口
let person:IPerson1 = {
  name: 'joel',
  age: 27,
  eat():void {
    console.log('eat')
  },
  sleep():void {
    console.log('sleep')
  },
  work():void {
    console.log('work')
  }
}

// 接口： 1、抽象化 2、约束对象类型
