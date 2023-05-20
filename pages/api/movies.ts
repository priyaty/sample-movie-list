export const getMovies = async () => {
    return require('../data/movies.json')
}

export const getData = async () => {
    let data = await getMovies().then((res) => res);
    return data;
}