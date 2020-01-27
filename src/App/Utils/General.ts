
export const getDateFromString = (date: Date) => {
    let day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    let month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : `0${date.getMonth() + 1}`;
    let year = date.getFullYear();
    return `${month}/${day}/${year}`;
};

export const getOTPArrayFromString = (otp: Number | string) => {
    if (otp.toString().length === 4 && !isNaN(Number(otp))) {
        return String(otp).split('');
    } else {
        return false;
    }
};
