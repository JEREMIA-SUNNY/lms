

const formatDate = (date, format) => {
    const map = {
        mm: String(date.getDate()).length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
        dd: String(date.getDate()).length === 1 ? `0${date.getDate()}` : date.getDate(),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear()
    }

    return format.replace(/mm|dd|yyyy/gi, matched => map[matched])
}

export {
    formatDate
}