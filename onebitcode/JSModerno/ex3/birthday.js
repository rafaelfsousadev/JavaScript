const dayjs = require('dayjs')

function birthday(date){
    const birthday = dayjs(date)
    const tadoy = dayjs()
    const daysToNextBirthday = nextBirthday.diff(tadoy, 'day')

    const ageInYears = tadoy.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    console.log(`Idade: ${ageInYears}`)
    console.log(`Proximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday('2002-06-08')