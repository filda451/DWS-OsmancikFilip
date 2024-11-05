let button1 = document.getElementById('button1')

button1.addEventListener('click', function(){
    alert("Vyskočil mi alert.")
})

const button2 = document.getElementById('button2')

button2.addEventListener('click', function(){
    button2.textContent="New Text"
})

const NADPIS2 = document.getElementById('NADPIS2')

NADPIS2.addEventListener('click', function(){
    NADPIS.textContent="Nový nadpis"
})

const NOTHING2 = document.getElementById('NOTHING2')

NOTHING2.addEventListener('click', function(){
    NOTHING.textContent="NIC"
})

function hellouser(){
    let user = document.getElementById('user').value
    alert('Vítám tě na mojí webové stránce' + user)
}

const hoverText = document.getElementById('hoverText')

hoverText.addEventListener('mouseover', function() {
    hoverText.textContent = 'Už se ti změnil text!'
})

hoverText.addEventListener('mouseout', function () {
    hoverText.textContent = 'Zde dej myš!'
})

document.getElementById('buttontime').onclick = function () {
    document.getElementById('time').textContent = new Date().getTime()

}
document.getElementById('buttondate').onclick = function () {
    document.getElementById('date').textContent = new Date().toLocaleDateString()
}

document.getElementById('pridanitlacitka').addEventListener('click', function() {
    let vstup = document.getElementById('vstup').value
    let result = parseInt(vstup) + 3
    document.getElementById('vysledek').textContent = "Výsledek: " + result
})

document.getElementById('tlacitko').addEventListener('click', function() {
    let vstup1 = parseInt(document.getElementById('vstup1').value)
    let vstup2 = parseInt(document.getElementById('vstup2').value)
    let result2 = vstup1 + vstup2
    document.getElementById('vysledek11').textContent = "Výsledek: " + result2
})