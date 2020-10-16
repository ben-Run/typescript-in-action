class Animal {
  hobby:string;
  // 在构造函数参数前加修饰符，相当于在外面也定义了这个属性
  constructor (public name:string, public age:number) {
    this.name = name;
    this.age = age;
  }
  eat () {
    console.log('eat')
  }
  sleep () {
    console.log('sleep')
  }
}

class Dog extends Animal {
  private introduction:string;
  public color:string;

  constructor (color:string, introduction?:string) {
    super('dog animal', 100) // 关键字 =》 调用父类构造函数
    this.color = color // 在调用this 之前必须先调用super()
  }
  sleep () {
    console.log('dog sleep')
  }
  public setIntroduction (value:string = '白色的大狗，爱吃骨头') {
    this.introduction = value
    console.log(this.introduction)
  }
}

const dog = new Dog('white')
dog.hobby = '吃骨头'
dog.eat() // 继承之后拥有父类的东西，也可以重写父类的某个属性或者方法
dog.sleep() // 重写父类sleep 方法

// 修饰符
// public: 公用 实例化的对象或者自己、子类都可以访问，默认是public
// private： 私有 只有在类内部可以访问
// protected： 受保护 只有在类内部或者子类中可以访问，如果用在类上，则这个类不能实例化，只能继承

dog.setIntroduction('白色的大狗，爱吃骨头')
// console.log(dog.introduction) // error

interface IAnimalRun {
  run():void
}

interface IAnimalRun2 {
  run1():void
}

interface IAnimalRun3 {
  run2():void
}
// 抽像类
// 不能实例化，只能继承，可以有具体的实现方法，也可以没有
abstract class Animal1 {
  run ():string {
    return 'abstract class run'
  }
  abstract sleep():string;
}

class Dog1 extends Animal1 {
  constructor () {
    super()
  }
  sleep():string {
    return 'abstract Animal1, this is  dog1'
  }
}
const dog1 = new Dog1()
console.log(dog1.run()) // abstract class run
console.log(dog1.sleep()) // abstract Animal1, this is  dog1

// 一个类可以继承一个父类，实现多个接口
class Dog2 extends Dog implements IAnimalRun,IAnimalRun2,IAnimalRun3 {
  run():void {
    console.log('run')
  }
  run1():void {
    console.log('run1')
  }
  run2():void {
    console.log('run2')
  }
}



