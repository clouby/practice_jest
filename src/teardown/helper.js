function createNameDatabase() {
    const data = ['carlos', 'karina', 'zoraida'];

    const isName = name => data.includes(name);

    const clearNameDatabase = () => data.length = 0;

    return {
        isName,
        clearNameDatabase
    }
}

module.exports = {
    createNameDatabase
}