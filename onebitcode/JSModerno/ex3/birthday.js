const dayjs = require('dayjs')

function birthday(date){
    const birthday = dayjs(date)
    const tadoy = dayjs()

    const ageInYears = tadoy.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    console.log(`Idade: ${ageInYears}`)
}

birthday('2002-06-08')