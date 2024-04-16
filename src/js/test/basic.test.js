import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('класс "ArrayBufferConverter" существует', () => {
  expect(new ArrayBufferConverter()).toBeDefined();
});

const arrayBufferConverter = new ArrayBufferConverter();

test('класс "ArrayBufferConverter" имеет методы "load" и "toString"', () => {
  expect(arrayBufferConverter.load).toBeDefined();
  expect(arrayBufferConverter.toString).toBeDefined();

  arrayBufferConverter.load();

  expect(arrayBufferConverter.buffer).not.toBeDefined();

  arrayBufferConverter.load(getBuffer());

  expect(arrayBufferConverter.buffer instanceof ArrayBuffer).toBeTruthy();

  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(arrayBufferConverter.toString()).toBe(result);
});