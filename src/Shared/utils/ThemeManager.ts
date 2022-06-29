
export interface ThemeManager {
    toggle(): void;
    setDarkMode(dark: boolean): void
    isDarkMode(): boolean
    changeToCurrent(): void
}

class DarkThemeManager implements ThemeManager {
    private readonly key = 'dark';

    changeToCurrent(): void {
        if (this.isDarkMode()) {
            this.changeToDark()
        } else {
            this.changeToLight();
        }
    }

    toggle(): void {
        const html = document.documentElement
        if (html.getAttribute(this.key) !== 'true') {
            this.setDarkMode(true);
        } else {
            this.setDarkMode(false)
        }
    }

    setDarkMode(dark: boolean): void {
        if (dark) {
            localStorage.setItem(this.key, 'true');
            this.changeToDark();
        } else {
            localStorage.removeItem(this.key);
            this.changeToLight();
        }
    }


    isDarkMode(): boolean {
        return localStorage.getItem(this.key) !== null;
    }

    private changeToDark(): void {
        const html = document.documentElement
        html.setAttribute(this.key, 'true')
    }
    private changeToLight(): void {
        const html = document.documentElement
        html.removeAttribute(this.key);
    }
}



const makeThemeManager = (): ThemeManager => {
    const manager = new DarkThemeManager();
    return manager;
}

export const themeManager: ThemeManager = makeThemeManager()