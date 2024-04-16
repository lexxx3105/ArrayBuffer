import getBuffer from './getBuffer';
import ArrayBufferConverter from './ArrayBufferConverter';

const arrayBufferConverter = new ArrayBufferConverter();

arrayBufferConverter.load(getBuffer());

arrayBufferConverter.toString();