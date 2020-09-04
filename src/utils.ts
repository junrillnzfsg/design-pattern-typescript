import beautify from 'json-beautify';

export function format(data) {
  return beautify(data, null, 2, 100);
}
