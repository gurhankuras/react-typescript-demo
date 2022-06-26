export const isMobile = (): boolean => {
    return /mobile/i.test(navigator.userAgent);
}