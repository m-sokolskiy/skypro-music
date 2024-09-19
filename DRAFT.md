Посмотреть подборки | GET | https://skypro-music-api.skyeng.tech/catalog/selection/

[
    {
        Плейлист: 1,
        Список треков: [ {Трек 1}, {Трек 2}, {Трек 3} ],

        Плейлист: 2,
        Список треков: [ {Трек 4}, {Трек 5}, {Трек 6} ],

        Плейлист: 3,
        Список треков: [ {Трек 7}, {Трек} 8, {Трек 9} ],
    } 
]


[
    {
        "id": 1,
        "items": [
            {
                //Трек
                "id": 8,
                "name": "Chase",
                "author": "Alexander Nakarada",
                "release_date": "2005-06-11",
                "genre": "Классическая музыка",
                "duration_in_seconds": 205,
                "album": "Chase",
                "logo": null,
                "track_file": "https://skypro-music-api.skyeng.tech/media/music_files/Alexander_Nakarada_-_Chase.mp3",
                //Пользователи поставившие лайк трек
                "stared_user": []
            },
        ],

        "id": 2,
        "items": [
            {
                "id": 18,
                "name": "Kerfuffle",
                "author": "AFM",
                "release_date": "2013-06-02",
                "genre": "Электронная музыка",
                "duration_in_seconds": 235,
                "album": "Kerfuffle",
                "logo": null,
                "track_file": "https://skypro-music-api.skyeng.tech/media/music_files/AFM_-_Kerfuffle.mp3",
                "stared_user": []
            }
        ],

        "id": 3,
        "items": [
            {
                "id": 28,
                "name": "Carol Of The Bells",
                "author": "Alexander Nakarada",
                "release_date": "2022-04-16",
                "genre": "Рок музыка",
                "duration_in_seconds": 205,
                "album": "Carol Of The Bells",
                "logo": null,
                "track_file": "https://skypro-music-api.skyeng.tech/media/music_files/Alexander_Nakarada_-_Carol_Of_The_Bells.mp3",
                "stared_user": []
            }
        ],
    } 
]

Тот же самый запрос по id, сервер нам отдаст объект 

{
    "id": 1, 
    "items": [ {Трек 1},{Трек 2},{Трек 3} ],
    "name": "название"
}




[
    {"id": 1,"name": "Carol Of The Bells"},
    {"id": 2,"name": "Carol Of The Bells"}, 
    {"id": 3,"name": "Carol Of The Bells"},
    {"id": 4,"name": "Carol Of The Bells"}
]