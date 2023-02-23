export const GithubAPI = () => {
    const baseURL: string = 'https://api.github.com/users/maxanderberg';

    const get = async (user: string) => {
        const response = await fetch(baseURL + user);
        const data = await response.json();
        return data;
    }

    return get;
}
