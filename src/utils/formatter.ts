export const checkDate = (value: any): boolean => {
    return !isNaN(Date.parse(value));
}

export const formatDate = (date: any): string => {
    return new Date(date.toString()).toLocaleDateString("en-CA")
}

export const removeHtml = (text: string): string => {
    return text.replaceAll(/<[^>]*>/g, '')
}