# Домашнее задание к лекции «Классы, наследование»

## Классы, наследование

[![Build status](https://ci.appveyor.com/api/projects/status/47xv1kuvc0hgc9eo?svg=true)](https://ci.appveyor.com/project/NadinDesyatova/ajs-oop)

### Описание

Реализована следующая иерархия классов: класс `Character` является родительским для всех остальных, 6 дочерних классов `Bowerman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie` от него наследуются, помимо того, задавая свои характеристики.

Свойства, которые есть у объектов класса `Character`:
1. `name` - имя
2. `type` - тип
3. `health` - уровень жизни
4. `level` - уровень персонажа
5. `attack` - атака
6. `defence` - защита

Требования конструктора класса:
1. `name` - строка, min - 2 символа, max - 10
1. `type` - один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie

В случае, если передаются некорректные значения, выбрасывается ошибка (`throw new Error(...)`).

При создании дочерних классов автоматически устанавливаются значения следующих полей:
1. health: 100
2. level: 1
3. Атака/защита:
    1. Bowman: 25/25
    2. Swordsman: 40/10
    3. Magician: 10/40
    4. Undead: 25/25
    5. Zombie: 40/10
    6. Daemon: 10/40

---