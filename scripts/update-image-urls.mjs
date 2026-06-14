import { readFileSync, writeFileSync } from 'fs';

const content = readFileSync('assets/data/images.js', 'utf8');

// 鎶婃湰鍦拌矾寰勬敼鎴愯繙绋?URL
const updated = content.replace(
  /"path": "images\//g,
  '"path": "https://nevertoday.github.io/zhongguo-traditional-colors/images/'
);

writeFileSync('assets/data/images.js', updated);
console.log('Image paths updated to remote URLs!');