function calculateMoney(ticketSale) {
    if (ticketSale >= 0) {
        const remainingMoney = ((ticketSale * 120) - (500 + (8 * 50)));
        return remainingMoney;
    }
    else {
        return ("Invalid Ticket Number : Must be Positive Number");
    }

}

function checkName(name) {
    if (typeof name === "string") {
        const chosenName = name.toLowerCase().split('');
        const lastLetter = chosenName.pop();
        if (goodName = lastLetter.includes("a") || lastLetter.includes("y") || lastLetter.includes("i") || lastLetter.includes("e") || lastLetter.includes("o") || lastLetter.includes("u") || lastLetter.includes("w")) {
            return ("Good Name");
        }
        else {
            return ("Bad Name");
        }
    }
    else {
        return ("invalid")
    }
}

function deleteInvalids(array) {
    if (Array.isArray(array)) {
        const newArray = [];
        for (const arrayItem of array) {
            if (typeof arrayItem === "number" && !isNaN(arrayItem)) {
                newArray.push(arrayItem);
            }
        }
        return (newArray);
    }
    else {
        return ("Invalid Array");
    }
}

function password(obj) {

    if (obj.siteName === undefined || obj.birthYear === undefined || obj.siteName === undefined) {
        return ("invalid");
    }
    else if (obj.birthYear !== null) {
        checkLength = obj.birthYear.toString().split('').length;
        if (checkLength < 4) {
            return ("invalid");
        }
        else if (checkLength > 4) {
            return ("invalid");
        }
        else {
            let websiteName = obj.siteName;
            websiteName = websiteName.charAt(0).toUpperCase() + websiteName.slice(1);
            const newPassword = websiteName + "#" + obj.name + "@" + obj.birthYear;
            return (newPassword);
        }
    }
}

function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) && typeof livingCost === "number") {
        let savings = 0;
        for (const pay of arr) {
            if (pay >= 3000) {
                savings = savings + (pay - ((pay * 20) / 100));
            }
            else {
                savings += pay;
            }
        }
        savings = savings - livingCost;
        if (savings >= 0) {
            return savings;
        }
        else {
            return ("earn more");
        }
    }
    else {
        return ("invalid input");
    }
}
