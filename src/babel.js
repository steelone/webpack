async function start() {
    return await Promise.resolve('async is working')
}

start().then(console.log)

class Util {
    static id = Date.now()
}

console.log("Util Id:", Util.id);

const unused = 42
import('lodash').then(_ => {
    console.log('Lodash', _.random(0, 42, true));
})
console.log("--------unused:", unused);
