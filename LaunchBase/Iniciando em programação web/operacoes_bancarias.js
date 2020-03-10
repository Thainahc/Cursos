const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

function isCredit(type) {
    return type == "credit"
}

function isDebit(type) {
    return type == "debit"
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (isCredit(transaction.type)) {
        user.balance += transaction.value
    }
    else if (isDebit(transaction.type)) {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(type) {
    let higherValue = 0

    for (transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
        }
    }

    return higherValue;
}

function getAverageTransactionValue() {
    let sum = 0

    for (let transaction of user.transactions) {
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let credit = 0
    let debit = 0

    for (transaction of user.transactions) {
        if (isCredit(transaction.type)) {
            credit++
        }
        else if (isDebit(transaction.type)) {
            debit++
        }
    }

    return { credit, debit }
}

createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })

console.log(user.balance)

getHigherTransactionByType("credit")
getHigherTransactionByType("debit")
getAverageTransactionValue()
getTransactionsCount()