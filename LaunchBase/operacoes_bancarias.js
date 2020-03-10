const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type == "credit") {
        user.balance += transaction.value
    }
    else if (transaction.type == "debit") {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(type) {
}

function getAverageTransactionValue() {
    let sum = 0

    for (let transaction of user.transactions) {
        sum += transaction.value
    }

    const average = sum / user.transactions.length

    console.log(average)

    return average
}

function getTransactionsCount() {
    let credit = 0
    let debit = 0

    for (transaction of user.transactions) {
        if (transaction.type == "credit") {
            credit++
        }
        else if (transaction.type == "debit") {
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

getHigherTransactionByType()
getAverageTransactionValue()
console.log(getTransactionsCount())