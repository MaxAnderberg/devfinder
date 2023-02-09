export const GithubAPI = () => {
    const baseURL: string = 'https://api.github.com/users/';

    const get = async (user: string) => {
        const response = await fetch(baseURL + user);
        const data = await response.json();
        return data;
    }

    return get;
}
