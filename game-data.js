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
        adjectives: ['Pallas', 'grey-eyed', 'bright-eyed', 'unbending', 'the warrior', 'aegis-holding', 'owl-adorned'],
        epithets: ['third born of the gods', 'the hope of soldiers', 'whose shield is thunder', 'the guardian of cities', 'she who fights in the front', 'born from thought and memory', 'the spear-shaker', 'slayer of gorgons', 'the hero\'s guide'],
        synonyms: ['the daughter of Zeus', 'the grey-eyed maiden', 'the goddess of war', 'the shieldbearer', 'the giver of olive groves', 'the warrior'],
        bonuses: {strength: 0, speed: -1, wit: 2, skill: 0}
    },
    {
        name: 'Poseidon',
        adjectives: ['wine-dark', 'watery', 'storm-conjuring', 'dark-haired', 'always-churning'],
        epithets: ['the earthshaker', 'tamer of horses', 'the wave-tamer', 'the protector', 'mover of the earth and the fruitless sea', 'savior of ships', 'god of the salty sea', 'the wrecker'],
        synonyms: ['the earthshaker', 'the lord of horses', 'the god of the deep', 'the king of tides', 'the god of the salty sea'],
        bonuses: {strength: 2, speed: 0, wit: 0, skill: -1}
    },
    {
        name: 'Artemis',
        adjectives: ['ancient', 'silent-stalking', 'the hanged goddess', 'bold-hearted', 'earth-walking', 'forest-shrouded'],
        epithets: ['the huntress', 'looser of arrows', 'wearer of masks', 'who walks between the trees', 'who runs with hounds'],
        synonyms: ['the huntress', 'the moon goddess', 'Leto\'s daughter', 'the silent-walking goddess', 'the queen of wild animals', 'the goddess of the forests and the hills', 'the mother of bears', 'the protector of mothers'],
        bonuses: {strength: -1, speed: 0, wit: 0, skill: 2}
    },
    {
        name: 'Dionysus',
        adjectives: ['wild', 'mad', 'twice-born', 'roaring', 'unbound', 'grape-devouring'],
        epithets: ['the dismembered and remade', 'kindest of all gods and cruelest', 'lord of mysteries', 'the pourer of unmixed wine', 'of the trees', 'the giver of children', 'the traveler from abroad'],
        synonyms: ['the god of wine and madness', 'Semele\'s son', 'the lunatic god', 'the friend of satyrs', 'the opener of prisons'],
        bonuses: {strength: 0, speed: 2, wit: -1, skill: 0}
    },
    {
        name: 'Helios',
        adjectives: ['shining', 'radiant', 'fiery', 'fire-crowned', 'blinding', 'all-seeing', 'never-wavering'],
        epithets: ['of the golden chariot', 'the Titan', 'Hyperion\'s son', 'the charioteer', 'the blinding sun', 'whose face gladdens mortals', 'holder of the fire above', 'the blinding sun', 'who sees everything the sunlight touches', 'who journeys below the earth by night'],
        synonyms: ['the king of Titans', 'the burning sun', 'the god of daylight', 'the god of the all-seeing orb', 'the daily journey-maker', 'the one who travels underground by night'],
        bonuses: {strength: 2, speed: -1, wit: 0, skill: 0}
    },
    {
        name: 'Persephone',
        adjectives: ['subterranean', 'bountiful', 'generous', 'lifegiving', 'kind'],
        epithets: ['the queen of Hades', 'Demeter\'s daughter', 'the bringer of spring', 'the goddess of spring', 'goddess of the soil', 'the lady of flowers', 'whose hair is the flowers and vines and whose face is water', 'the sown seed', 'whose sacrifices are buried', 'knower of the mysteries of the earth', 'closest of all gods to eternal Gaia'],
        synonyms: ['the queen of the dead', 'the goddess of spring', 'the bringer of fruit'],
        bonuses: {strength: 0, speed: -1, wit: 0, skill: 2}
    },
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

Non-patron gods:
Zeus (Olympus)
Hades (underworld)
Prometheus (Caucasus)
Atlas (Atlas Mountains)


God Stats

jealousy
cruelty
*/
