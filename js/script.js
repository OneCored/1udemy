"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
