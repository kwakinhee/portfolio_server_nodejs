export interface Listener<T> {
  (event: T): any;
}

export interface Disposable {
  dispose();
}

export class TypedEvent<T> {
  private _listeners: Listener<T>[] = [];
  private _listenersOncer: Listener<T>[] = [];

  clear() {
    this._listeners = null;
    this._listenersOncer = null;

    this._listeners = [];
    this._listenersOncer = [];
  }

  on(listener: Listener<T>): Disposable {
    this._listeners.push(listener);
    return {
      dispose: () => this.off(listener),
    };
  }

  once(listener: Listener<T>): void {
    this._listenersOncer.push(listener);
  }

  off(listener: Listener<T>) {
    var callbackIndex = this._listeners.indexOf(listener);
    if (callbackIndex > -1) this._listeners.splice(callbackIndex, 1);
  }

  emit(event: T) {
    /** Update any general listeners */
    this._listeners.forEach((listener) => listener(event));

    /** Clear the `once` queue */
    if (this._listenersOncer.length > 0) {
      const toCall = this._listenersOncer;
      this._listenersOncer = [];
      toCall.forEach((listener) => listener(event));
    }
  }

  pipe(te: TypedEvent<T>): Disposable {
    return this.on((e) => te.emit(e));
  }
}
