
export const dataService = {
    getAllTrades,
}
const gTrades = [
    {
        id: 1,
        at: '2021-01-06 01:55:20',
        side: 'SELL',
        product: 'BTC-USD',
        quantity: 0.3,
        price: 1235.35,
        cParty: 'Cumberland',
        provPrice: 0.226,
        sales: 0.0054,
        type: 'hedge',
        execution: 'REST API',
        status: true
    }
    , {
        id: 2,
        at: '2021-01-06 01:55:20',
        side: 'BUY',
        product: 'BTC-USD',
        quantity: 0.3,
        price: 1235.35,
        cParty: 'Cumberland',
        provPrice: 0.226,
        sales: 0.0054,
        type: 'hedge',
        execution: 'REST API',
        status: false
    }, {
        id: 3,
        at: '2021-01-06 01:55:20',
        side: 'SELL',
        product: 'BTC-USD',
        quantity: 0.3,
        price: 1235.35,
        cParty: 'Cumberland',
        provPrice: 0.226,
        sales: 0.0054,
        type: 'hedge',
        execution: 'REST API',
        status: true
    },
    {
        id: 4,
        at: '2021-01-06 01:55:20',
        side: 'BUY',
        product: 'BTC-USD',
        quantity: 0.3,
        price: 1235.35,
        cParty: 'Cumberland',
        provPrice: 0.226,
        sales: 0.0054,
        type: 'hedge',
        execution: 'REST API',
        status: false
    }

]
async function getAllTrades() {
    return gTrades
}





