const btnClick = document.querySelectorAll('.btn')

let data = {}

//Setar o resultado final do cálculo
document.getElementById('totalTip').innerHTML = '$' + 0
document.getElementById('totalCont').innerHTML = '$' + 0

//Salvar o valor do input da conta final
let inputValueTotal = document.getElementById('valueTotal')

inputValueTotal.addEventListener('input', () => {
  data.valueTotal = inputValueTotal.value
  calcular()
})

//Salvar porcentagem da gorjeta
for (i = 0; i < btnClick.length; i++) {
  btnClick[i].addEventListener('click', event => {
    cleanBtn()
    event.target.classList.add('btn-active')
    data.porcentageTip = event.target.getAttribute('value')
    calcular()
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
  data.porcentageTip = valueCustom.value
  calcular()
})

//Valor do input de quantidade de pessoas
let totalPersonInput = document.getElementById('totalPerson')

totalPersonInput.addEventListener('input', () => {
  data.totalPerson = totalPersonInput.value
  calcular()
})

//Calcular
function calcular() {
  let result = 0

  //Se o campo estiver 0, a div vai add a classe error
  if (data.valueTotal == 0) {
    inputValueTotal.classList.add('input-error')
    document.getElementById('errorTip').style.display = 'inline-block'
  } else {
    inputValueTotal.classList.remove('input-error')
    document.getElementById('errorTip').style.display = 'none'
  }

  if (data.totalPerson == 0) {
    totalPersonInput.classList.add('input-error')
    document.getElementById('error').style.display = 'inline-block'
  } else {
    totalPersonInput.classList.remove('input-error')
    document.getElementById('error').style.display = 'none'
  }

  //Cálculo tatal
  if (data.valueTotal !== '' && data.totalPerson) {
    //Calcular Porcentagem
    if (data.porcentageTip === undefined) {
      document.getElementById('totalTip').innerHTML = '$' + 0
    } else {
      result = (data.porcentageTip / 100) * data.valueTotal

      result = result / data.totalPerson

      document.getElementById('totalTip').innerHTML = '$' + result.toFixed(2)
    }

    //Divisão da Conta
    let finishResult = data.valueTotal / data.totalPerson + result

    document.getElementById('totalCont').innerHTML =
      '$' + finishResult.toFixed(2)
  }
}

//Limpar Calculadora
let clearCalc = document.getElementById('reset')

clearCalc.addEventListener('click', () => {
  window.location.reload()
})
