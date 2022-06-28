export const delay = <T>(after: number, data: T): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, after);
    })
}