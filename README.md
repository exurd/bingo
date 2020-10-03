# bongo
![the logo](https://raw.githubusercontent.com/exurd/bongo/main/assets/logo.png)
###### A Bingo Template

You can easily make a bingo for anything with this template.

### How to change the goals

All of the goals are handled in 'index.js'. To edit them, you will need a text program, such as Atom.

To change the essential goals (The main things that will or should happen), find the essentialGoals const.

```
const essentialGoals = [
  'Add the essential goals here!',
  'You can play the game in VR',
]
```

To change the optional goals, find the optionalGoals const.

```
const optionalGoals = [
  'Add the optional goals here!',
  'Someone falls over while showing off the VR feature',
]
```

To change the free space (Something that will ALWAYS happen), find this bit of code and edit it.

```
if (i === 12) {
  cell.className = 'cell free-space'
  cell.innerHTML = 'Add free space here! The game is $60.'
  continue;
```
