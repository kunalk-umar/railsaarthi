const fs = require('fs');
const c = fs.readFileSync('d:/railways_project/data.js', 'utf8');
const nums = [];
const re = /"num":\s*"(\d+)"/g;
let match;
while ((match = re.exec(c)) !== null) {
  nums.push(match[1]);
}
// Print all numbers sorted
const sorted = [...nums].sort();
console.log(JSON.stringify(sorted));
