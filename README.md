# PokeBot Challenge
***

**Задача**: написать прототип бота для поимки покемонов (PokeBot).

**Условия**:
- бот расширяет базовый объект BasePokeBot
- бот должен иметь возможность создания нескольких экземпляров
- бот должен реализовать у себя следующие методы
  + find(list, conditions)
  + envolve(pokemon)
  + compare(pokemon, pokemon, ...)
  
**Как делать**: форкнуть репозиторий и разработать собственную реализацию PokeBot на основе BasePokeBot.

##### Описание методов бота
---
**find(list[Array], conditions[Object])**

Метод поиска покемонов в списке (например, список всех доступных или уже пойманных). При повтроном вызове с теми же параметрами поиска должен мгновенно вернуть результат предыдущего поиска. Вот так:
```javascript
var pokedex = [ ... ];
var conditionsOne = { ... };
var conditionsTwo = { ... }; // conditionsOne !== conditionsTwo
var searchOne = pokebot.find(pokedex, conditionsOne);
var searchTwo = pokebot.find(pokedex, conditionsOne);
var searchThree = pokebot.find(pokedex, conditionsTwo);
var searchFour = pokebot.find(pokedex, conditionsOne);
console.log(searchOne === searchTwo); // true
console.log(searchTwo === searchFour); // false
```

**evolve(pokemon[Object])**

Метод эволюции покемона в следующее поколение, должен возвращать нового покемона с аналогичными характеристиками, если следующее поколение существует. Храктеристики покемона могут быть расширены со временем и не ограничены описанными ниже.
```javascript
var pokemon = {
    id: 1,
    name: 'Разрушитель4000',
    kind: 'Бульбазавр',
    combatPower: 16,
    healthPoints: 10
};
pokebot.evolve(pokemon); // { name: 'Ивизавр', kind: 'Ивизавр', combatPower: 16, healthPoints: 10 }
```

**compare(pokemon[Object], pokemon, ...)**

Сравнивает двух или больше покемонов. Покемоны считаются одинаковыми, если совпадают все характеристики за исключением id и name. Храктеристики покемона могут быть расширены со временем и не ограничены описанными ниже.

##### Описание объекта типа Pokemon
***
**Важно**: к конструктору объекта этого типа доступа нет. 

**В списке пойманных**:
```javascript
{
    id: 1, // уникальный идентификатор
    name: 'Разрушитель4000', // имя
    kind: 'Бульбазавр', // вид 
    combatPower: 16, // очки сражения
    healthPoints: 10, // очки жизни
    ...
};
```
**В общем списке (pokedex)**:
```javascript
{
    kind: 'Бульбазавр', // вид 
    type: ['Grase', 'Poison'], // тип
    maxCombatPower: 160, // максимум очки сражения
    maxHealthPoints: 100, // максимум очки жизни
    abilities: ['quickAttack', 'normalAttack'], // способности
    evolve: 'Ивизавр', // следующая эволюция
    ...
};
```