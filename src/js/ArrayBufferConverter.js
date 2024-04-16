export default class ArrayBufferConverter {
  load(buffer) {
    if (buffer instanceof ArrayBuffer) {
      this.buffer = buffer;
    }
  }

  toString() {
    const uint16array = new Uint16Array(this.buffer);

    let str = '';

    uint16array.forEach((number) => {
      str += String.fromCharCode(number);
    });

    return str;
  }
}