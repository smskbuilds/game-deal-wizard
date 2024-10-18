const initGames = [
    {
        rawg_id: 22511,
        game_name: 'The Legend of Zelda: Breath of the Wild',
        background_image:
            'https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg',
        metacritic: 97,
        parent_platforms: [
            {
                platform: {
                    id: 7,
                    name: 'Nintendo',
                    slug: 'nintendo',
                },
            },
        ],
        slug: 'the-legend-of-zelda-breath-of-the-wild',
    },
    {
        rawg_id: 28026,
        game_name: 'Super Mario Odyssey',
        background_image:
            'https://media.rawg.io/media/games/267/267bd0dbc496f52692487d07d014c061.jpg',
        metacritic: 97,
        parent_platforms: [
            {
                platform: {
                    id: 7,
                    name: 'Nintendo',
                    slug: 'nintendo',
                },
            },
        ],
        slug: 'super-mario-odyssey',
    },
    {
        rawg_id: 27036,
        game_name: 'Super Mario Galaxy 2',
        background_image:
            'https://media.rawg.io/media/games/4e9/4e928ff4b4e3c3f5acfda38b98a4cf65.jpg',
        metacritic: 97,
        parent_platforms: [
            {
                platform: {
                    id: 7,
                    name: 'Nintendo',
                    slug: 'nintendo',
                },
            },
        ],
        slug: 'super-mario-galaxy-2',
    },
    {
        rawg_id: 324997,
        game_name: "Baldur's Gate III",
        background_image:
            'https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg',
        metacritic: 97,
        parent_platforms: [
            {
                platform: {
                    id: 1,
                    name: 'PC',
                    slug: 'pc',
                },
            },
            {
                platform: {
                    id: 2,
                    name: 'PlayStation',
                    slug: 'playstation',
                },
            },
            {
                platform: {
                    id: 3,
                    name: 'Xbox',
                    slug: 'xbox',
                },
            },
            {
                platform: {
                    id: 5,
                    name: 'Apple Macintosh',
                    slug: 'mac',
                },
            },
        ],
        slug: 'baldurs-gate-3',
    },
    {
        rawg_id: 327239,
        game_name: 'The Legend of Zelda: Tears of the Kingdom',
        background_image:
            'https://media.rawg.io/media/games/556/55684bfd048706f4266d331d70050b37.jpg',
        metacritic: 96,
        parent_platforms: [
            {
                platform: {
                    id: 7,
                    name: 'Nintendo',
                    slug: 'nintendo',
                },
            },
        ],
        slug: 'the-legend-of-zelda-breath-of-the-wild-sequel',
    },
    {
        rawg_id: 28,
        game_name: 'Red Dead Redemption 2',
        background_image:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        metacritic: 96,
        parent_platforms: [
            {
                platform: {
                    id: 1,
                    name: 'PC',
                    slug: 'pc',
                },
            },
            {
                platform: {
                    id: 2,
                    name: 'PlayStation',
                    slug: 'playstation',
                },
            },
            {
                platform: {
                    id: 3,
                    name: 'Xbox',
                    slug: 'xbox',
                },
            },
        ],
        slug: 'red-dead-redemption-2',
    },
    {
        rawg_id: 401808,
        game_name: 'Half-Life 2: Update',
        background_image:
            'https://media.rawg.io/media/screenshots/bb7/bb7463d103dc40f6f3a3c9ac3b4b11a5.jpg',
        metacritic: 96,
        parent_platforms: [
            {
                platform: {
                    id: 1,
                    name: 'PC',
                    slug: 'pc',
                },
            },
        ],
        slug: 'half-life-2-update',
    },
    {
        rawg_id: 45958,
        game_name: 'XCOM 2: War of the Chosen',
        background_image:
            'https://media.rawg.io/media/games/824/8244534a6db2180e177271cebb9c002f.jpg',
        metacritic: 95,
        parent_platforms: [
            {
                platform: {
                    id: 1,
                    name: 'PC',
                    slug: 'pc',
                },
            },
            {
                platform: {
                    id: 2,
                    name: 'PlayStation',
                    slug: 'playstation',
                },
            },
            {
                platform: {
                    id: 3,
                    name: 'Xbox',
                    slug: 'xbox',
                },
            },
            {
                platform: {
                    id: 5,
                    name: 'Apple Macintosh',
                    slug: 'mac',
                },
            },
            {
                platform: {
                    id: 6,
                    name: 'Linux',
                    slug: 'linux',
                },
            },
        ],
        slug: 'xcom-2-war-of-the-chosen',
    },
    {
        rawg_id: 3636,
        game_name: 'The Last Of Us Remastered',
        background_image:
            'https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg',
        metacritic: 95,
        parent_platforms: [
            {
                platform: {
                    id: 2,
                    name: 'PlayStation',
                    slug: 'playstation',
                },
            },
        ],
        slug: 'the-last-of-us-remastered',
    },
    {
        rawg_id: 3990,
        game_name: 'The Last Of Us',
        background_image:
            'https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg',
        metacritic: 95,
        parent_platforms: [
            {
                platform: {
                    id: 2,
                    name: 'PlayStation',
                    slug: 'playstation',
                },
            },
        ],
        slug: 'the-last-of-us',
    },
    {
        rawg_id: 4544,
        game_name: 'Red Dead Redemption',
        background_image:
            'https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg',
        metacritic: 95,
        parent_platforms: [
            {
                platform: {
                    id: 2,
                    name: 'PlayStation',
                    slug: 'playstation',
                },
            },
            {
                platform: {
                    id: 3,
                    name: 'Xbox',
                    slug: 'xbox',
                },
            },
            {
                platform: {
                    id: 7,
                    name: 'Nintendo',
                    slug: 'nintendo',
                },
            },
        ],
        slug: 'red-dead-redemption',
    },
    {
        rawg_id: 4200,
        game_name: 'Portal 2',
        background_image:
            'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
        metacritic: 95,
        parent_platforms: [
            {
                platform: {
                    id: 1,
                    name: 'PC',
                    slug: 'pc',
                },
            },
            {
                platform: {
                    id: 2,
                    name: 'PlayStation',
                    slug: 'playstation',
                },
            },
            {
                platform: {
                    id: 3,
                    name: 'Xbox',
                    slug: 'xbox',
                },
            },
            {
                platform: {
                    id: 5,
                    name: 'Apple Macintosh',
                    slug: 'mac',
                },
            },
            {
                platform: {
                    id: 6,
                    name: 'Linux',
                    slug: 'linux',
                },
            },
        ],
        slug: 'portal-2',
    },
    {
        rawg_id: 378578,
        game_name: 'Grand Theft Auto IV: Complete Edition',
        background_image:
            'https://media.rawg.io/media/screenshots/e59/e59cc96f38cc93af5a396173878018d7.jpg',
        metacritic: 95,
        parent_platforms: [
            {
                platform: {
                    id: 1,
                    name: 'PC',
                    slug: 'pc',
                },
            },
            {
                platform: {
                    id: 2,
                    name: 'PlayStation',
                    slug: 'playstation',
                },
            },
            {
                platform: {
                    id: 3,
                    name: 'Xbox',
                    slug: 'xbox',
                },
            },
        ],
        slug: 'grand-theft-auto-iv-complete-edition',
    },
    {
        rawg_id: 326243,
        game_name: 'Elden Ring',
        background_image:
            'https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg',
        metacritic: 95,
        parent_platforms: [
            {
                platform: {
                    id: 1,
                    name: 'PC',
                    slug: 'pc',
                },
            },
            {
                platform: {
                    id: 2,
                    name: 'PlayStation',
                    slug: 'playstation',
                },
            },
            {
                platform: {
                    id: 3,
                    name: 'Xbox',
                    slug: 'xbox',
                },
            },
        ],
        slug: 'elden-ring',
    },
    {
        rawg_id: 10073,
        game_name: 'Divinity: Original Sin 2',
        background_image:
            'https://media.rawg.io/media/games/424/424facd40f4eb1f2794fe4b4bb28a277.jpg',
        metacritic: 95,
        parent_platforms: [
            {
                platform: {
                    id: 1,
                    name: 'PC',
                    slug: 'pc',
                },
            },
            {
                platform: {
                    id: 2,
                    name: 'PlayStation',
                    slug: 'playstation',
                },
            },
            {
                platform: {
                    id: 3,
                    name: 'Xbox',
                    slug: 'xbox',
                },
            },
            {
                platform: {
                    id: 7,
                    name: 'Nintendo',
                    slug: 'nintendo',
                },
            },
        ],
        slug: 'divinity-original-sin-2',
    },
    {
        rawg_id: 27969,
        game_name: 'The Legend of Zelda: Ocarina of Time 3D',
        background_image:
            'https://media.rawg.io/media/games/c91/c916af1fa182bc2d674b4d9270bb7713.jpg',
        metacritic: 94,
        parent_platforms: [
            {
                platform: {
                    id: 7,
                    name: 'Nintendo',
                    slug: 'nintendo',
                },
            },
        ],
        slug: 'the-legend-of-zelda-ocarina-of-time-3d',
    },
    {
        rawg_id: 42180,
        game_name: 'The Elder Scrolls V: Skyrim Legendary Edition',
        background_image:
            'https://media.rawg.io/media/games/6db/6db2d022f77b1c99116bbf6750ec2c7d.jpg',
        metacritic: 94,
        parent_platforms: [
            {
                platform: {
                    id: 1,
                    name: 'PC',
                    slug: 'pc',
                },
            },
            {
                platform: {
                    id: 2,
                    name: 'PlayStation',
                    slug: 'playstation',
                },
            },
            {
                platform: {
                    id: 3,
                    name: 'Xbox',
                    slug: 'xbox',
                },
            },
        ],
        slug: 'the-elder-scrolls-v-skyrim-legendary-edition',
    },
    {
        rawg_id: 5679,
        game_name: 'The Elder Scrolls V: Skyrim',
        background_image:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        metacritic: 94,
        parent_platforms: [
            {
                platform: {
                    id: 1,
                    name: 'PC',
                    slug: 'pc',
                },
            },
            {
                platform: {
                    id: 2,
                    name: 'PlayStation',
                    slug: 'playstation',
                },
            },
            {
                platform: {
                    id: 3,
                    name: 'Xbox',
                    slug: 'xbox',
                },
            },
            {
                platform: {
                    id: 7,
                    name: 'Nintendo',
                    slug: 'nintendo',
                },
            },
        ],
        slug: 'the-elder-scrolls-v-skyrim',
    },
    {
        rawg_id: 339958,
        game_name: 'Persona 5 Royal',
        background_image:
            'https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg',
        metacritic: 94,
        parent_platforms: [
            {
                platform: {
                    id: 1,
                    name: 'PC',
                    slug: 'pc',
                },
            },
            {
                platform: {
                    id: 2,
                    name: 'PlayStation',
                    slug: 'playstation',
                },
            },
            {
                platform: {
                    id: 3,
                    name: 'Xbox',
                    slug: 'xbox',
                },
            },
            {
                platform: {
                    id: 7,
                    name: 'Nintendo',
                    slug: 'nintendo',
                },
            },
        ],
        slug: 'persona-5-royal',
    },
    {
        rawg_id: 4806,
        game_name: 'Mass Effect 2',
        background_image:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        metacritic: 94,
        parent_platforms: [
            {
                platform: {
                    id: 1,
                    name: 'PC',
                    slug: 'pc',
                },
            },
            {
                platform: {
                    id: 2,
                    name: 'PlayStation',
                    slug: 'playstation',
                },
            },
            {
                platform: {
                    id: 3,
                    name: 'Xbox',
                    slug: 'xbox',
                },
            },
        ],
        slug: 'mass-effect-2',
    },
];

const initFilters = {
    platforms: {
        1: { platformName: 'PC', selected: false },
        2: { platformName: 'PlayStation', selected: false },
        3: { platformName: 'Xbox', selected: false },
        4: { platformName: 'iOS', selected: false },
        5: { platformName: 'Mac', selected: false },
        6: { platformName: 'Linux', selected: false },
        7: { platformName: 'Nintendo', selected: false },
        8: { platformName: 'Android', selected: false },
    },
    subscriptionServices: {
        1: { subscriptionName: 'PS Plus Extra', selected: false },
        2: { subscriptionName: 'Epic Free Games', selected: false },
        3: { subscriptionName: 'Prime Gaming', selected: false },
    },
    genres: {
        1: { genreName: 'Racing', selected: false },
        2: { genreName: 'Shooter', selected: false },
        3: { genreName: 'Adventure', selected: false },
        4: { genreName: 'Action', selected: false },
        5: { genreName: 'RPG', selected: false },
        6: { genreName: 'Fighting', selected: false },
        7: { genreName: 'Puzzle', selected: false },
        10: { genreName: 'Strategy', selected: false },
        11: { genreName: 'Arcade', selected: false },
        14: { genreName: 'Simulation', selected: false },
        15: { genreName: 'Sports', selected: false },
        17: { genreName: 'Card', selected: false },
        19: { genreName: 'Family', selected: false },
        28: { genreName: 'Board Games', selected: false },
        34: { genreName: 'Educational', selected: false },
        40: { genreName: 'Casual', selected: false },
        51: { genreName: 'Indie', selected: false },
        59: { genreName: 'Massively Multiplayer', selected: false },
        83: { genreName: 'Platformer', selected: false },
    },
    page: 1,
    searchResults: '[]',
};

export { initGames, initFilters };
