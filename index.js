// Add essential goals here (10 or more)

const essentialGoals = [
  'Essential goal 1',
  'Essential goal 2',
  'Essential goal 3',
  'Essential goal 4',
  'Essential goal 5',
  'Essential goal 6',
  'Essential goal 7',
  'Essential goal 8',
  'Essential goal 9',
  'Essential goal 10',
]

// Add optional goals here (15 or more)

const optionalGoals = [
  'Optional goal 1',
  'Optional goal 2',
  'Optional goal 3',
  'Optional goal 3',
  'Optional goal 4',
  'Optional goal 5',
  'Optional goal 6',
  'Optional goal 7',
  'Optional goal 8',
  'Optional goal 9',
  'Optional goal 10',
  'Optional goal 11',
  'Optional goal 12',
  'Optional goal 13',
  'Optional goal 14',
  'Optional goal 15',
]

function generateSeed(length = 12) {
  var arr = new Uint8Array(length / 2)
  window.crypto.getRandomValues(arr)
  const seed = Array.from(arr, d => ('0' + d.toString(16)).substr(-2)).join('')
  localStorage.setItem('bongo.seed', seed)
  return seed
}

function fisherYates(originalArray) {
  const array = originalArray.slice(0);
  for (let i = (array.length - 1); i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

function initGrid() {
  const shuffledGoals = fisherYates(essentialGoals.concat(fisherYates(optionalGoals)).slice(0, 24))

  const grid = document.querySelector('.grid')
  grid.innerHTML = ''
  for (let y = 0; y < 5; y += 1) {
    const row = document.createElement('div')
    grid.appendChild(row)
    row.className = 'row'
    for (let x = 0; x < 5; x += 1) {
      let i = x + 5*y
      const cell = document.createElement('div')
      row.appendChild(cell)
      if (i === 12) {
        cell.className = 'cell free-space'
        cell.innerHTML = 'Free space text' // Add free space text here
        continue;
      } else if (i > 12) {
        i -= 1;
      }
      cell.className = checked[i] ? 'cell checked' : 'cell'
      cell.textContent = shuffledGoals[i]
      cell.addEventListener('click', () => {
        checked[i] = !checked[i]
        cell.className = checked[i] ? 'cell checked' : 'cell'
        setChecked()
      })
    }
  }
}

function setChecked() {
  localStorage.setItem('bongo.checked', checked.map(e => e ? '1' : '0').join(''))
}

document.querySelector('.new-seed').addEventListener('click', () => {
  Math.seedrandom(generateSeed())
  checked = new Array(24).fill(false)
  setChecked()
  initGrid()
})

Math.seedrandom(localStorage.getItem('bongo.seed') ?? generateSeed())

const checkedString = localStorage.getItem('bongo.checked') ?? '0'.repeat(24)
let checked = checkedString.split('').map(c => c !== '0')

initGrid()
