



export const addEllipsis = (text) => {
    if(text.length > 50) {
        return text.substring(0, 47) + '...';
    }
    return text;
}