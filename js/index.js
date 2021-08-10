const btnClick = document.querySelectorAll('.btn')

let dados = {}

//Setar o resultado final do cálculo
document.getElementById('totalTip').innerHTML = '$' + 0
document.getElementById('totalCont').innerHTML = '$' + 0

//Salvar o valor do input da conta final
let inputValueTotal = document.getElementById('valueTotal')

inputValueTotal.addEventListener('input', function (e) {
  dados.valueTotal = inputValueTotal.value
  e.preventDefault()
  calcular(dados)
})

//Salvar porcentagem da gorjeta
for (i = 0; i < btnClick.length; i++) {
  btnClick[i].addEventListener('click', function (e) {
    cleanBtn()
    this.classList.add('btn-active')
    dados.porcentageTip = this.getAttribute('value')
    e.preventDefault()
    calcular(dados)
  })
}

//Limpar os buttons
function cleanBtn() {
  for (i = 0; i < btnClick.length; i++) {
    if (btnClick[i].classList.contains('btn-active') == true) {
      btnClick[i].classList.remove('btn-active')
    }
  }
}

//Se o input custom estiver com valor
let valueCustom = document.getElementById('custom')

valueCustom.addEventListener('click', function () {
  cleanBtn()
})

valueCustom.addEventListener('input', function () {
  dados.porcentageTip = valueCustom.value
  calcular(dados)
})

//Valor do input de quantidade de pessoas
let totalPerson = document.getElementById('totalPerson')

totalPerson.addEventListener('input', function () {
  dados.totalPerson = totalPerson.value
  calcular(dados)
})

//Calcular
function calcular(dados) {
  let result = 0

  //Se o campo estiver 0, a div vai add a classe error
  if (dados.valueTotal == 0) {
    inputValueTotal.classList.add('input-error')
    document.getElementById('errorTip').style.display = 'inline-block'
  } else {
    inputValueTotal.classList.remove('input-error')
    document.getElementById('errorTip').style.display = 'none'
  }

  if (dados.totalPerson == 0) {
    totalPerson.classList.add('input-error')
    document.getElementById('error').style.display = 'inline-block'
  } else {
    totalPerson.classList.remove('input-error')
    document.getElementById('error').style.display = 'none'
  }

  //Cálculo tatal
  if (dados.valueTotal != '' && dados.totalPerson) {
    console.log(dados.porcentageTip)
    //Calcular Porcentagem
    if (dados.porcentageTip == undefined) {
      document.getElementById('totalTip').innerHTML = '$' + 0
    } else {
      result = (dados.porcentageTip / 100) * dados.valueTotal

      result = result / dados.totalPerson

      document.getElementById('totalTip').innerHTML = '$' + result.toFixed(2)
    }

    //Divisão da Conta
    let finishResult = dados.valueTotal / dados.totalPerson + result

    document.getElementById('totalCont').innerHTML =
      '$' + finishResult.toFixed(2)
  }
}

//Limpar Calculadora
let clearCalc = document.getElementById('reset')

clearCalc.addEventListener('click', function () {
  window.location.reload()
})
