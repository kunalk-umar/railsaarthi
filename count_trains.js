const fs = require('fs');
const c = fs.readFileSync('d:/railways_project/data.js', 'utf8');

// Extract all train numbers
const nums = [];
const re = /"num":\s*"(\d+)"/g;
let match;
while ((match = re.exec(c)) !== null) {
  nums.push(match[1]);
}
console.log('Total trains:', nums.length);

// Find duplicates
const seen = new Map();
const dupes = [];
for (const n of nums) {
  if (seen.has(n)) {
    dupes.push(n);
  }
  seen.set(n, (seen.get(n) || 0) + 1);
}
console.log('Duplicate train numbers:', dupes);

// Count by type
const typeRe = /"type":\s*"(\w+)"/g;
const types = {};
while ((match = typeRe.exec(c)) !== null) {
  types[match[1]] = (types[match[1]] || 0) + 1;
}
console.log('By type:', JSON.stringify(types, null, 2));

// Print first 10 and last 10 train numbers
console.log('First 10:', nums.slice(0, 10));
console.log('Last 10:', nums.slice(-10));
