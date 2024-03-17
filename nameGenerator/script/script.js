const dwarvenFirstNames = ['Thor', 'Bor', 'Dor', 'Dur', 'Gim', 'Thorin', 'Gloin', 'Bal', 'Thrain', 'Fili', 'Kili', 'Balin', 'Dwalin', 'Oin', 'Bifur', 'Bofur', 'Bombur', 'Nori', 'Ori', 'Gandalf', 'Gloin', 'Dain', 'Nain', 'Thror', 'Gimli', 'Thorgrim', 'Frerin', 'Gror', 'Groin', 'Thrain', 'Farin', 'Fundin', 'Harin', 'Hogun', 'Frar', 'Fror', 'Gamil', 'Gamil', 'Gamil', 'Groin', 'Grunnar', 'Hakon', 'Harin', 'Harin', 'Harin', 'Harin', 'Harin', 'Hogun', 'Jari', 'Jori'];

const dwarvenLastNames = ['gar', 'grim', 'in', 'ur', 'ak', 'drin', 'bar', 'thorin', 'beard', 'battlehammer', 'blackbeard', 'bloodaxe', 'brawnhammer', 'bronzeshield', 'deepdelver', 'dwarfbreaker', 'firerock', 'goblinbane', 'goldseeker', 'hardhead', 'ironfoot', 'minestorm', 'mountaincrown', 'oathbound', 'orcslayer', 'redhammer', 'shieldbreaker', 'stonecutter', 'thunderforge', 'warsmith', 'whitestone', 'dragonfriend', 'forgeborn', 'hammerhelm', 'ironbeard', 'steelheart', 'stonehammer', 'thunderbeard', 'battlebeard', 'darkbeard', 'ironhelm', 'stonehelm', 'truehelm', 'warhelm', 'axebeard', 'battleaxe', 'blackaxe', 'bronzehammer', 'flintcutter', 'grayhammer', 'grimhelm'];

const dwarvenBackstories = [
  'A skilled blacksmith, renowned for crafting legendary weapons.',
  'A fearless warrior who defended the dwarven realm against countless foes.',
  'An expert miner who discovered vast riches within the heart of the mountains.',
  'A wise elder, respected for their knowledge of dwarven history and lore.',
  'A master brewer, famous for brewing the finest dwarven ale in the land.',
  'A loyal companion who stood by their friends through thick and thin.',
  'A cunning diplomat, known for negotiating peace treaties between dwarven clans.',
  'A legendary hero who embarked on epic quests to rid the world of evil.',
  'A talented musician, whose songs echo through the halls of dwarven strongholds.',
  'A skilled engineer, responsible for designing intricate machines and defenses.'
];

// Function to generate a random dwarven name and backstory
function generateRandomDwarvenInfo() {
  // Randomly select first and last names and combine them
  const firstName = dwarvenFirstNames[Math.floor(Math.random() * dwarvenFirstNames.length)];
  const lastName = dwarvenLastNames[Math.floor(Math.random() * dwarvenLastNames.length)];
  const name = firstName + ' ' + lastName;

  // Randomly select a backstory
  const backstory = dwarvenBackstories[Math.floor(Math.random() * dwarvenBackstories.length)];

  return { name, backstory };
}

// Function to display the selected dwarven name and backstory
function displayDwarvenInfo(name, backstory) {
  const output = document.getElementById('backstory');
  output.innerHTML = `<h3>${name}</h3><p>${backstory}</p>`;
}

// Event listener for list item click
document.getElementById('output').addEventListener('click', function(event) {
  if (event.target && event.target.nodeName === 'LI') {
    const name = event.target.textContent;
    const backstory = dwarvenBackstories[Math.floor(Math.random() * dwarvenBackstories.length)];
    displayDwarvenInfo(name, backstory);
  }
});

// Function to generate a list of 10 random dwarven names
function generateDwarvenNameList() {
  const nameList = [];
  for (let i = 0; i < 10; i++) {
    const { name } = generateRandomDwarvenInfo();
    nameList.push(name);
  }
  return nameList;
}

// Function to display the list of dwarven names
function displayDwarvenNameList() {
  const output = document.getElementById('output');
  output.innerHTML = ''; // Clear previous output
  const nameList = generateDwarvenNameList();
  nameList.forEach(name => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    output.appendChild(listItem);
  });
}

// Event listener for button click
document.getElementById('generateBtn').addEventListener('click', displayDwarvenNameList);

  