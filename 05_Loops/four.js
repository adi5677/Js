//For in


const myObject = {
    js: 'javascript',
    css: 'css',
    html: 'html',
    swift: 'swift'
}

for (const key in myObject) {
    // console.log(`${key} shourtcut is for ${myObject[key]}`);
}

const programming = ["js", "css", "html", "swift"];
for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN ', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')
map.set('AU', 'Australia')
map.set('CA', 'Canada')

for (const key in map) {
    console.log(key);
}