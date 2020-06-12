// Richiesta: chiedere all'utente nome, cognome, colore preferito e creare una password molto insicura

// Chiedere all'utente il suo nome
var nome = prompt("Qual'è il tuo nome?");

// Chiedere all'utente il suo cognome
var cognome = prompt("Qual'è il tuo cognome?");

// Chiedere all'utente il suo colore preferito
var colorePreferito = prompt("Qual'è il tuo colore preferito?");

// Output per l'utente
document.getElementById('password').innerHTML = "La tua nuova password è: " + nome + cognome + colorePreferito + "19";
