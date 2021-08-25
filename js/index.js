const btnClick = document.querySelectorAll('.btn')

let data = {}
let { valueTotal, porcentageTip, totalPerson } = data

//Setar o resultado final do cálculo
document.getElementById('totalTip').innerHTML = '$' + 0
document.getElementById('totalCont').innerHTML = '$' + 0

//Salvar o valor do input da conta final
let inputValueTotal = document.getElementById('valueTotal')

inputValueTotal.addEventListener('input', () => {
  valueTotal = inputValueTotal.value
  calcular(data)
})

//Salvar porcentagem da gorjeta
for (i = 0; i < btnClick.length; i++) {
  btnClick[i].addEventListener('click', function () {
    cleanBtn()
    this.classList.add('btn-active')
    porcentageTip = this.getAttribute('value')
    calcular(data)
  })
}

//Limpar os buttons
function cleanBtn() {
  for (i = 0; i < btnClick.length; i++) {
    if (btnClick[i].classList.contains('btn-active')) {
      btnClick[i].classList.remove('btn-active')
    }
  }
}

//Se o input custom estiver com valor
let valueCustom = document.getElementById('custom')

valueCustom.addEventListener('click', () => {
  cleanBtn()
})

valueCustom.addEventListener('input', () => {
  porcentageTip = valueCustom.value
  calcular(data)
})

//Valor do input de quantidade de pessoas
let totalPersonInput = document.getElementById('totalPerson')

totalPersonInput.addEventListener('input', () => {
  totalPerson = totalPersonInput.value
  calcular(data)
})

//Calcular
function calcular(dataReceived) {
  let result = 0

  //Se o campo estiver 0, a div vai add a classe error
  if (valueTotal == 0) {
    inputValueTotal.classList.add('input-error')
    document.getElementById('errorTip').style.display = 'inline-block'
  } else {
    inputValueTotal.classList.remove('input-error')
    document.getElementById('errorTip').style.display = 'none'
  }

  if (totalPerson == 0) {
    totalPersonInput.classList.add('input-error')
    document.getElementById('error').style.display = 'inline-block'
  } else {
    totalPersonInput.classList.remove('input-error')
    document.getElementById('error').style.display = 'none'
  }

  //Cálculo tatal
  if (valueTotal !== '' && totalPerson) {
    console.log(porcentageTip)
    //Calcular Porcentagem
    if (porcentageTip === undefined) {
      document.getElementById('totalTip').innerHTML = '$' + 0
    } else {
      result = (porcentageTip / 100) * valueTotal

      result = result / totalPerson

      document.getElementById('totalTip').innerHTML = '$' + result.toFixed(2)
    }

    //Divisão da Conta
    let finishResult = valueTotal / totalPerson + result

    document.getElementById('totalCont').innerHTML =
      '$' + finishResult.toFixed(2)
  }
}

//Limpar Calculadora
let clearCalc = document.getElementById('reset')

clearCalc.addEventListener('click', () => {
  window.location.reload()
})
