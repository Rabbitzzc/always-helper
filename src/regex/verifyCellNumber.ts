const verifyCellNumber = (el: string) => {
    const regex = /^1(3|4|5|6|7|8|9)\d{9}$/g

    return el.match(regex) !== null
}

export default verifyCellNumber
