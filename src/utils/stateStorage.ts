export const saveState = (key: string, state: any) => {
    localStorage.setItem(key, JSON.stringify(state));
};

export const loadState = (key: string): any => {
    const state = localStorage.getItem(key);
    return state ? JSON.parse(state) : null;
};
