interface IHuman {
  name:string;
  eat():void;
}

// 接口定义属性、方法等约束
interface SearchFunc {    
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {   
  return source.search(subString) !== -1;
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

// 索引签名：支持两种索引签名 字符串、数字，可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 
// 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 
// 用number的索引匹配ISomeArray 会得到一个string
// 用string的索引匹配ISomeArray 会得到一个string

interface ISomeArray {
  [index:number]:string;
  [index:string]:string;
}

// 比如我们想要一个包含约束的属性，但是还可以包含其他任意属性
interface IAnimalDemo {
  name:string;
  age:number;
  [index:string]:any
}

let animalDemo: IAnimalDemo = {
  name: 'joel',
  age: 27,
  color: 'dsd'  // 报错，加上索引签名后不报错
}

