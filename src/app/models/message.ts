export class Message {

id: number;
message = '';

    constructor(values: any = {}) {
      Object.assign(this, values);
    }
}
