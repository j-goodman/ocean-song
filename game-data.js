let game = {}
game.data = {}

game.data.places = [
    {
        name: 'Syrakuse',
        demonym: ['Syrakusan', 'Syrakusans'],
        adjective: 'Syrakusan',
        epithets: {
            people: [],
            city: ['distant', 'far-flung'],
            full: [],
        },
    },
    {
        name: 'Sparta',
        demonym: ['Spartan', 'Spartans'],
        adjective: 'Spartan',
        epithets: {
            people: ['warlike', 'strong-hearted'],
            city: [],
            full: [],
        },
    },
    {
        name: 'Ithaka',
        demonym: ['Ithakan', 'Ithakans'],
        adjective: 'Ithakan',
        epithets: {
            people: [],
            city: ['rocky'],
            full: [],
        }
    },
    {
        name: 'Mycenae',
        demonym: ['Mycenaean', 'Mycenaeans'],
        adjective: 'Mycenaean',
        epithets: {
            people: ['lion-strong'],
            city: ['great'],
            full: [],
        }
    },
    {
        name: 'Phthia',
        demonym: ['Myrmidon', 'Myrmidons'],
        adjective: 'Phthian',
        epithets: {
            people: ['god-beloved', 'strong-greaved'],
            city: ['ancient'],
            full: [],
        },
        people: []
    },
    {
        name: 'Argos',
        demonym: ['Argive', 'Argives'],
        adjective: 'Argive',
        epithets: {
            people: [],
            city: ['sturdy'],
            full: ['beloved of Zeus'],
        }
    },
    {
        name: 'Salamis',
        demonym: ['Salaminean', 'Salamineans'],
        adjective: 'Salaminean',
        epithets: {
            people: ['seafaring'],
            city: ['forested', 'fertile'],
            full: [],
        }
    },
    {
        name: 'Corinth',
        demonym: ['Corinthian', 'Corinthians'],
        adjective: 'Corinthian',
        epithets: {
            people: [''],
            city: ['rich'],
            full: ['beloved of Poseidon'],
        }
    },
    {
        name: 'Rhodes',
        demonym: ['Rhodian', 'Rhodians'],
        adjective: 'Rhodian',
        epithets: {
            people: ['brave'],
            city: [''],
            full: ['beloved of Helios'],
        }
    },
    {
        name: 'Arcadia',
        demonym: ['Arcadian', 'Arcadians'],
        adjective: 'Arcadian',
        epithets: {
            people: ['wild'],
            city: ['untamed'],
            full: [],
        }
    },
]

game.data.gods = [
    {
        name: 'Athena',
        adjectives: ['Pallas', 'grey-eyed', 'bright-eyed', 'unbending', 'the warrior'],
        epithets: ['third born of the gods', 'the hope of soldiers', 'whose shield is thunder', 'the guardian of cities'],
        synonyms: ['the daughter of Zeus', 'the grey-eyed maiden', 'the goddess of wars'],
        bonuses: {strength: 0, speed: -1, wit: 2, skill: 0}
    },
    {
        name: 'Poseidon',
        adjectives: ['wine-dark', 'watery', 'storm-conjuring', 'dark-haired'],
        epithets: ['the earthshaker', 'tamer of horses', 'the wave-tamer', 'the protector', 'mover of the earth and the fruitless sea', 'savior of ships', 'god of the salty sea'],
        synonyms: ['the earthshaker', 'the lord of horses', 'the god of the deep', 'the king of tides', 'the god of the salty sea'],
        bonuses: {strength: 2, speed: 0, wit: 0, skill: -1}
    },
    {
        name: 'Artemis',
        adjectives: ['ancient', 'silent-stalking', 'the hanged goddess', 'bold-hearted'],
        epithets: ['the huntress', 'looser of arrows', 'wearer of masks', 'who walks between the trees', 'who runs with hounds'],
        synonyms: ['the huntress', 'the moon goddess', 'Leto\'s daughter'],
        bonuses: {strength: -1, speed: 0, wit: 0, skill: 2}
    },
    {
        name: 'Dionysus',
        adjectives: ['wild', 'mad', 'twice-born', 'roaring', 'unbound'],
        epithets: ['the dismembered and remade', 'kindest of all gods and cruelest', 'lord of mysteries', 'the pourer of unmixed wine', 'of the trees'],
        synonyms: ['the god of wine and madness', 'Semele\'s son'],
        bonuses: {strength: 0, speed: 2, wit: -1, skill: 0}
    },
    // {
      //     name: 'Zeus',
      //     adjectives: ['mighty', 'loud-thundering', 'aegis-holding'],
      //     epithets: ['of the dazzling bolt', 'who delights in storms', 'who gathers the clouds', 'who marshals the stormclouds'],
      //     synonyms: ['the king of the gods', 'the king of Olympus', 'the thunder-god', 'the son of Kronos', 'the father of gods and men']
      // },
      // {
      //     name: 'Helios',
      //     adjectives: ['shining', 'radiant', 'fiery', 'fire-crowned', 'blinding'],
      //     epithets: ['of the golden chariot', 'the Titan'],
      //     synonyms: ['the king of Titans', 'the burning Sun', 'the blinding Sun']
      // },
      // {
      //     name: 'Persephone',
      //     adjectives: ['subterranean', 'bountiful', 'generous', 'lifegiving'],
      //     epithets: ['the queen of Hades', 'Demeter\'s daughter', 'the bringer of spring', 'the goddess of spring', 'goddess of the soil', 'the lady of flowers'],
      //     synonyms: ['the queen of the dead', 'the goddess of spring']
      // },
]

game.data.alphabet = [
    'A', 'B', 'G', 'D', 'E', 'Z', 'TH', 'I', 'K', 'L', 'M', 'N', 'X', 'O', 'OU', 'P', 'R', 'S', 'T', 'Y', 'U', 'PH', 'KH', 'PS', ///'Ō'
]


/*
Stats
strength
speed
wit
skill

Patron Gods
Athena +wit -speed
Dionysus +speed -wit
Artemis +skill -strength
Poseidon +strength -skill
*
Helios +strength -wit
Persephone +skill -speed

*/

/*
Intro text

"Sing, O Muse, of that hero of great [strength, speed, wit, skill], beloved of ['unbending Athena', 'wine-dark Poseidon'].
Sing in me the tale of [NAME], the ['son', 'daughter'] of ['Lanses lord of Troy', 'Menaia queen of Crete'],
who set to the sea to seek (his/her) fortune..."
*/
