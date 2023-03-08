class Observable {
    constructor(subscribe) {
      this._subscribe = subscribe;
    }
  
    subscribe(observer) {
      return this._subscribe(observer);
    }
  
    static from(iterable) {
      return new Observable((observer) => {
        for (let item of iterable) {
          observer.next(item);
        }
  
        observer.complete();
      });
    }
  }
  
  class Observer {
    constructor(handlers) {
      this.handlers = handlers;
    }
  
    next(data) {
      this.handlers.next(data);
    }
  
    error(error) {
      this.handlers.error(error);
    }
  
    complete() {
      this.handlers.complete();
    }
  }
  
  // Create an observable that emits a sequence of numbers
  const numberObservable = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  });
  
  // Create an observer that logs the emitted numbers
  const numberObserver = new Observer({
    next: (number) => console.log(number),
    error: (error) => console.error(error),
    complete: () => console.log('Observable complete')
  });
  
  // Subscribe to the observable with the observer
  numberObservable.subscribe(numberObserver);
  