

export const inputDropdownClickListener = (e: MouseEvent) => {
    const target = e.target as Element;
    const isDropdownButton = target.closest('[data-input-dropdown-button]') !== null;

    if (!isDropdownButton && target.closest('[data-dropdown]') !== null) return;
    let currentDropdown: Element | undefined;
    if (isDropdownButton) {
        currentDropdown = target.closest('[data-dropdown]') as Element;
        currentDropdown?.classList.add('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    })
}
export const dropdownClickListener = (e: MouseEvent) => {
    const target = e.target as Element;
    const isDropdownButton = target.closest('[data-dropdown-button]') !== null;

    if (!isDropdownButton && target.closest('[data-dropdown]') !== null) return;
    let currentDropdown: Element | undefined;
    if (isDropdownButton) {
        currentDropdown = target.closest('[data-dropdown]') as Element;
        currentDropdown?.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    })
}

export const dropdownWindowResizeListener = (e: UIEvent) => {
    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        dropdown.classList.remove('active');
    })
}