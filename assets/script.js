var games = [
    {
        "photo": "assets/img/A-plague-tale-innocence.jpg",
        "name": "A plague Tail",
        "price": 199.90,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "assets/img/Assassins_Creed_4_Black_Flag.png",
        "name": "AC Black Flag",
        "price": 54.90,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "assets/img/Assassins_Creed_Origins.png",
        "name": "AC Origins",
        "price": 89.90,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "assets/img/Assassins_Creed_Unity.png",
        "name": "AC Unity",
        "price": 58.90,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "assets/img/Devil_My_Cry_3.png",
        "name": "Devil my cry",
        "price": 23.30,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "assets/img/Guitar_Hero_3.png",
        "name": "Guitar Hero 3",
        "price": 72.90,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "assets/img/Hogwarts_Legacy.jpeg",
        "name": "Hogwarts Legacy",
        "price": 199.90,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "assets/img/Red_Dead_Redemption_1.png",
        "name": "Red Dead Redemption",
        "price": 159.90,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "assets/img/Red_Dead_Redemption_2.png",
        "name": "Red Dead Redemption 2",
        "price": 215.90,
        "active": false,
        "quantity": 1
    }
];

const selfServiceMachine = {
    data() {
        return {
            games: window.games
        }
    },

    methods: {
        total: function() {
            let total = 0;

            this.games.forEach(game => {
                if (game.active) {
                    total += game.quantity * game.price
                }
            });
            return total;
        }
    }
};

Vue.createApp(selfServiceMachine).mount('#app');