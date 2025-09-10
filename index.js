const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Destructure animal sounds from the string
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Only four animals (horse wandered off)
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Only three animals left (chicken goes back)
const [blackAndWhite, black, pink] = farmAnimals.split(' ').filter((_, i) => i !== 1 && i !== 4);

// ======= Arrays / Colors =======

// 4. Destructure colors normally
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Destructure first letters, leaving out indigo
const [r, o, y, g, b, , v] = colors;

// 6. Only assign indigo using indg
const [, , , , , indg, ] = colors;

// ======= Objects / Muppets =======

// 7. Destructure all keys from muppet
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure songs 2 & 4 and Kermit's job & partner from nestedMuppet
const { 
  album: { theMuppetMovie: { song2, song4 } }, 
  nestedJob, 
  nestedPartner 
} = nestedMuppet;
