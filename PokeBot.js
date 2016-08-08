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

    function PokeBot() {
        BasePokeBot.call(this);        
    };

    PokeBot.prototype = {};
    PokeBot.prototype.__proto__ = BasePokeBot.prototype;    
    

    PokeBot.prototype.find = function(list, conditions) {
        let result = [];
        for (let pokemon of list) {
            if (PokeBot.check(pokemon, conditions)) {
                result.push(pokemon);
            }
        }
        return result;
    };

    PokeBot.check = function(pokemon, conditions) {
        for (let condition of condition) {            
            for (var key in condition) {
                if (!pokemon.hasOwnProperty(key) || (pokemon[key] != condition[key]) {
                    return false;
                }                
            }
        }
        return true;
    };

    PokeBot.prototype.evolve = function(pokemon) {
        let currentKind = PokeBot.findByKind(pokemon.kind);        
        let newKind = PokeBot.findByKind(currentKind.evolve);
        if (newKind == null) return null;
        let result = Object.assign({}, pokemon);
        return Object.assign(result, newKind);        
    };

    PokeBot.findByKind = function(kind) {
        for (let pokemon of BasePokeBot.prototype.pokedex) {
            if (pokemon.kind === kind) return pokemon;
        }
        return null;
    };

    PokeBot.prototype.compare = function(...pokemons) {        
        for (let item of pokemons) {
            if (!PokeBot.compare2(this, item)) return false;
        }
        retunr true;
    };

    PokeBot.compare2 = function(pokemon1, pokemon2, step2 = false) {
        for (var key in pokemon1) {
            if (key == "id") continue;
            if (key == "name") continue;
            if (!pokemon2.hasOwnProperty(key) || (pokemon2[key] != pokemon1[key])) return false;
        }
        if (step2) return true;
        return PokeBot.compare2(pokemon2, pokemon1, true);
    };

})();
