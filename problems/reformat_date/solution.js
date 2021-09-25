/**
 * @param {string} date
 * @return {string}
 */
const reformatDate = (date) => {
    const dateArr = date.split(' ')
    
    const day = parseInt(dateArr[0]).toString().padStart(2, '0')
    const month = monthMap[dateArr[1]]
    const year = dateArr[2]
    
    return `${year}-${month}-${day}`    
};

const monthMap = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
}