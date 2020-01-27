
export const getDateFromString = (date: Date) => {
    let day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    let month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : `0${date.getMonth() + 1}`;
    let year = date.getFullYear();
    return `${month}/${day}/${year}`;
};
