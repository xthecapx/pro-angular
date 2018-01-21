import { Observable, Subject } from "rxjs/Rx";

interface Message {
  channel: string;
  data: any;
}

export class Store {
  private data$: Subject<Message>;

  constructor() {
    this.data$ = new Subject<Message>();
  }

  public publish<T>(message: T): void {
    const channel = (<any>message.constructor).name;
    this.data$.next({ channel: channel, data: message });
  }

  public of<T>(messageType: { new (...args: any[]): T }): Observable<T> {
    const channel = (<any>messageType).name;
    return this.data$.filter(m => m.channel === channel).map(m => m.data);
  }
}
