const crypto = require("crypto");

function showError(res, msg) {
    res.json({
        status: 404,
        message: msg
    });
}

function showSucess(res, msg) {
    res.json({
        status: 200,
        message: msg
    });
}

function isNull(obj) {
    if (obj == null) {
        return true;
    }
    else if (obj == undefined) {
        return true;
    }
    else if (obj == "") {
        return true;
    }
    else {
        return false;
    }
}

function makeKey() {
    let prime_length = 250;
    let diffHell = crypto.createDiffieHellman(prime_length);
    diffHell.generateKeys('base64');
    let secret = diffHell.getPrivateKey('hex');
    return secret;
}

module.exports = {
    isNull, showError, showSucess,makeKey
}