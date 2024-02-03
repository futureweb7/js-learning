
// String length
// There are 3 methods for extracting a part of a string:
// slice(start, end)--------------------- ok
// substring(start, end) --------------------- ok
// substr(start, length) --------------------- ok
// String substr() --------------------- ok
// String replace()  --------------------- ok
// String replaceAll()  --------------------- ok
// String toUpperCase()--------------------- ok
// String toLowerCase()--------------------- ok
// String concat()--------------------- ok
// String trim()--------------------- ok
// String trimStart()--------------------- ok
// String trimEnd()--------------------- ok
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()
// String length
// String charAt()
// String charCodeAt()
// String at()
// String [ ]
// String repeat()

let text = "If you omit the second method, the method will slice out the rest" ;
console.log("🚀 ~ file: test.js:20 ~ slice:", text.slice(0,10))
console.log("🚀 ~ file: test.js:20 ~ substring:", text.substring(0,10))
console.log("🚀 ~ file: test.js:20 ~ substr:", text.substr(-4))
console.log("🚀 ~ file: test.js:20 ~ replace:", text.replace("method", "robin"))
console.log("🚀 ~ file: test.js:20 ~ replace:", text.replace(/method/g, "robin"))
console.log("🚀 ~ file: test.js:20 ~ replaceAll:", text.replaceAll("method", "robin"))
console.log("🚀 ~ file: test.js:20 ~ text:", text.toLocaleLowerCase())
console.log("🚀 ~ file: test.js:20 ~ text:", text.toUpperCase())
console.log("🚀 ~ file: test.js:20 ~ text:", text.concat(",", "BY ROBIN"))
console.log("🚀 ~ file: test.js:20 ~ text:", text.trim())
console.log("🚀 ~ file: test.js:20 ~ split:", text.split(' '))
console.log("🚀 ~ file: test.js:13 ~ text:", text.length)

