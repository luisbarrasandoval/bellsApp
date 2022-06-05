const randomRun = () => {
    const run = (Math.random() * 99999999) | 0;
    const dv = (run % 2 === 0) ? '0' : '1';
    return `${run}-${dv}`;
}

const randomDocument = () => {
    const document = (Math.random() * 999999999) | 0;
    return document;
}

export { randomRun, randomDocument };