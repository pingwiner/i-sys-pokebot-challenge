(function() {
    'use strict';

    function BasePokeBot() {
        this.pokemons = [];
    }

    BasePokeBot.prototype.throwPokeballToCatchAPokemon = function(pokemon) {
        if (Math.random() > 0.5) {
            this.pokemons.push(pokemon);

            return pokemon;
        }

        return null;
    };

    BasePokeBot.prototype.pokedex = [ // справочник существующих покемонов
        {
            kind: 'Бульбазавр',
            type: ['Grase', 'Poison'],
            maxCombatPower: 160,
            maxHealthPoints: 100,
            abilities: ['quickAttack', 'normalAttack'],
            evolve: 'Ивизавр'
        },
        {
            kind: 'Ивизавр',
            type: ['Grase', 'Poison'],
            maxCombatPower: 260,
            maxHealthPoints: 200,
            abilities: ['normalAttack', 'heavyAttack'],
            evolve: 'Венозавр'
        },
        {
            kind: 'Венозавр',
            type: ['Grase', 'Poison'],
            maxCombatPower: 360,
            maxHealthPoints: 300,
            abilities: ['heavyAttack', 'superAttack']
        },
        {
            kind: 'Чермандер',
            type: ['Ground', 'Fire'],
            maxCombatPower: 160,
            maxHealthPoints: 100,
            abilities: ['quickAttack', 'normalAttack'],
            evolve: 'Чермелион'
        },
        {
            kind: 'Чермелион',
            type: ['Ground', 'Fire'],
            maxCombatPower: 260,
            maxHealthPoints: 200,
            abilities: ['normalAttack', 'heavyAttack'],
            evolve: 'Чаризард'
        },
        {
            kind: 'Чаризард',
            type: ['Ground', 'Fire'],
            maxCombatPower: 360,
            maxHealthPoints: 300,
            abilities: ['heavyAttack', 'superAttack']
        },
        {
            kind: 'Пичу',
            type: ['Air', 'Electric'],
            maxCombatPower: 160,
            maxHealthPoints: 100,
            abilities: ['quickAttack', 'normalAttack'],
            evolve: 'Пикачу'
        },
        {
            kind: 'Пикачу',
            type: ['Air', 'Electric'],
            maxCombatPower: 260,
            maxHealthPoints: 200,
            abilities: ['normalAttack', 'heavyAttack'],
            evolve: 'Райчу'
        },
        {
            kind: 'Райчу',
            type: ['Air', 'Electric'],
            maxCombatPower: 360,
            maxHealthPoints: 300,
            abilities: ['heavyAttack', 'superAttack']
        }
    ];

    BasePokeBot.prototype.find = function (list, conditions) {
        throw 'Must be implemented by child object';
    };

    BasePokeBot.prototype.evolve = function (pokemon) {
        throw 'Must be implemented by child object';
    };

    BasePokeBot.prototype.compare = function () {
        throw 'Must be implemented by child object';
    };
})();
