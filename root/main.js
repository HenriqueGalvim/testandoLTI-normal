var timestamp = Math.round(Date.now() / 1000);
let teste = document.getElementById("oauth-timestamp").value = timestamp
let teste2 = document.getElementById("oauth_nonce").value = btoa(timestamp)

console.log(teste)
console.log(teste2)