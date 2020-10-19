class Animal {
  hobby:string;
  // 在构造函数参数前加修饰符，相当于在外面也定义了这个属性
  constructor (public name:string, public age:number) {
    this.name = name;
    this.age = age;
  }
  // 我们可以通过私有化一些属性，通过getter、setter 暴露给外部，并且可以在getter 、setter 做一些逻辑
  // getter
  get Hobby () {
    return this.hobby
  }
  // setter
  set Hobby (val) {
    // something
    this.hobby = val
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
  private static weight1:string;
  public static weight:string;

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
Dog.weight = '30kg' // 静态修饰符static 也可以用public private protected 修饰符修饰


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

class Cat extends Animal {
  public color:string;

  constructor (color:string) {
    super('cat animal', 100) // 关键字 =》 调用父类构造函数
    this.color = color // 在调用this 之前必须先调用super()
  }

  sleep () {
    console.log('cat sleep')
  }
}

// 多态：对象的多态
let cat = new Cat('beige')
let animals:Animal[] = [dog,cat]

animals.forEach(t => {
  t.sleep()
})

// 链式调用
class workFlow {
  step1 () {
    console.log(this, 'workFlow step1')
    return this;
  }
  step2 () {
    console.log(this, 'workFlow step2')
    return this;
  }
}

class myFlow extends workFlow{
  next () {
    console.log(this, 'myflow next')
    return this;
  }
}

// 链式调用
new myFlow().step2().step2().next().step1() // 后面的this 都是指向new myFlow()这个实例







