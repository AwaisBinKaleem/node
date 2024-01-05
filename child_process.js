const { promisify } = require('util');
const exec = promisify(require('child_process').exec)

const script = 'ls';

async function get () {
    const res = await exec(script)
    console.log(res)
}

get()
