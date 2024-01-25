// * Access modifiers

abstract class Animal {
  private name: string;
  protected testProtected: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  public sayName(): void {
    console.log(`This is ${this.name}`);
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);

    console.log(this.testProtected);
  }
}

// * Interfaces

interface Executable {
  execute: (...args: unknown[]) => unknown,
}

class StressTest implements Executable {
  private readonly iterations: number;

  constructor(iterations: number) {
    this.iterations = iterations;
  }

  public execute(): void {
    for (let i = 0; i < this.iterations; i++) {
      console.log(`Iteration ${i + 1}`);
    }
  }
}

class TimerLogger {
  private executable: Executable;
  private readonly message: string;

  constructor(executable: Executable, message: string) {
    this.executable = executable;
    this.message = message;
  }

  public runTimer(): void {
    console.log(this.message);

    const startTime = performance.now();

    this.executable.execute();

    const endTime = performance.now();

    console.log(`End of the test. Elapsed time: ${endTime - startTime}`);
  }
}

const stressTest: StressTest = new StressTest(200);
const timerLogger: TimerLogger = new TimerLogger(stressTest, 'My pretty timer');

timerLogger.runTimer();
