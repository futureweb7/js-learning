// String Search Methods

// String indexOf() -------------------------------0k
// String lastIndexOf() -------------------------------0k
// String search()  -------------------------------0k
// String match()  -------------------------------0k
// String matchAll()  -------------------------------0k
// String includes()
// String startsWith()
// String endsWith()

let text = "Lorem ipsum dolor sit amet, consectetur dolor adipiscing elit."
console.log("🚀 ~ file: StringSearch.js:13 ~ indexOf:", text.indexOf("dolor", 30))
// indexOf method cannot take powerful search values (regular expressions).
console.log("🚀 ~ file: StringSearch.js:13 ~ lastIndexOf:", text.lastIndexOf("polor"))
console.log("🚀 ~ file: StringSearch.js:13 ~ search:", text.search("dolor"))
// search method cannot take a second start position argument.
console.log("🚀 ~ file: StringSearch.js:13 ~ /search/:", text.search(/dolor/))
console.log("🚀 ~ file: StringSearch.js:13 ~ match:", text.match("do"))
console.log("🚀 ~ file: StringSearch.js:13 ~ match:", text.match(/do/g))
console.log("🚀 ~ file: StringSearch.js:13 ~ match:", text.match(/Do/gi))
console.log("🚀 ~  ~ matchAll:",Array.from(text.matchAll("dolor")))
console.log("🚀 ~ file: StringSearch.js:13 ~ includes:", text.includes("dolor"))
console.log("🚀 ~ file: StringSearch.js:13 ~ includes:", text.includes("dolor", 20))
