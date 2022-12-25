const currency = [
    {
        curr: 'USD',
        cost: 1
    },
    {
        curr: 'EUR',
        cost: 0.94
    },
    {
        curr: 'UAH',
        cost: 36.88
    },
    {
        curr: 'PLN',
        cost: 4.43
    },
]
const select1 = document.querySelector('#currency1')
const select2 = document.querySelector('#currency2')
const input1 = document.querySelector('#val1')
const input2 = document.querySelector('#val2')
const buttonChange = document.querySelector('#buttonChange')
const getConvObj = (value)=>{
    return convObj1 = currency.find((item) => {
        return item.curr === value
    })
}
const converting1 = () =>{
    let convObj1 = getConvObj(select1.value)
    let convObj2 = getConvObj(select2.value)
    input2.value = (input1.value * convObj2.cost) / convObj1.cost
}
const converting2 = () => {
    let convObj1 = getConvObj(select1.value)
    let convObj2 = getConvObj(select2.value)
    input1.value = (input2.value * convObj1.cost) / convObj2.cost
}
input1.addEventListener('input', () => {
    converting1()
})
input2.addEventListener('input', () => {
    converting2()
})
buttonChange.addEventListener('click', () => {
    let a = select1.value
    select1.value = select2.value
    select2.value = a

    let b = input1.value
    input1.value = input2.value
    input2.value = b
})
select1.addEventListener('change', ()=>{
    converting1()
})
select2.addEventListener('change', ()=>{
    converting2()
})
//awlirgbdnksjdbfndka;sjfn