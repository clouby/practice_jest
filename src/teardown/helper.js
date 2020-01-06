function createNameDatabase() {
    const data = ['carlos', 'karina', 'zoraida'];

    const isName = name => data.includes(name);

    const clearNameDatabase = () => data.length = 0;

    return {
        isName,
        clearNameDatabase
    }
}


function initializeFoodDatabase(...foods) {
    let connected = false;
    const database = [];

    const connectDatabaseFoods = () => new Promise(resolve => {
        setTimeout(() => {
            connected = !connected;
            database.push(...foods);
            resolve(connected);
        }, 3000);
    });

    const killConnection = () => new Promise(resolve => {
        setTimeout(() => {
            connected = false;
            resolve(connected);
        }, 3000);
    })

    const isFoodExist = (name) => {
        if (!connected) throw new Error('DB: Not connected.');

        return database.includes(name);
    }

    return {
        connectDatabaseFoods,
        killConnection,
        isFoodExist
    }
}

module.exports = {
    createNameDatabase,
    initializeFoodDatabase
}