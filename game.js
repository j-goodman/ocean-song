game.textSpeed = 88

let pick = (list, count=1) => {
    if (count > 1) {
        while (list.length > count) {
            list.splice(Math.floor(Math.random()*list.length), 1);
        }
        return list
    } else {
        return list[Math.floor(Math.random() * list.length)]
    }
}

let shuffle = (array) => {
    return array.sort(
        () => Math.random() - 0.5
    );
}

let Hero = function () {
    this.name = ''
    this.location = null
    this.stats = {
        strength: 0,
        speed: 0,
        wit: 0,
        skill: 0,
    }
}

let narrateIntro = () => {
    let textContainer = document.getElementById('intro-box')
    let textbox = document.createElement('div')
    textContainer.appendChild(textbox)
    let text = `||||||||Sing|||,||| O|| Muse|,||| of that hero so||||`
    let hero = new Hero ()
    hero.stats.strength = 2
    hero.stats.speed = 2
    hero.stats.wit = 2
    hero.stats.skill = 2
    read(text, textbox, () => {
        let prompt = optionPrompt(textbox, shuffle(['mighty', 'swift-footed', 'cunning', 'skillful']), answer => {
            prompt.parentElement.removeChild(prompt)
            hero.stats[{
                'mighty': 'strength',
                'swift-footed': 'speed',
                'cunning': 'wit',
                'skillful': 'skill'
            }[answer]] += 4
            let text = ` ${answer}||,|| beloved by||||`
            read(text, textbox, () => {
                let gods = pick(game.data.gods, 3)
                let godNames = gods.map(god => {
                    return `${pick(god.adjectives)} ${god.name}`
                })
                let prompt = optionPrompt(textbox, godNames, answer => {
                    prompt.parentElement.removeChild(prompt)
                    let patronName = answer.split(' ')[answer.split(' ').length - 1]
                    hero.patron = game.data.gods.filter(god => {
                        return god.name === patronName
                    })[0]
                    let attributes = ['speed', 'strength', 'wit', 'skill']
                    attributes.forEach(attribute => {
                        hero.stats[attribute] += hero.patron.bonuses[attribute]
                    })
                    let text = ` ${answer}, ${pick(hero.patron.epithets)}|.

                    `
                    read(text, textbox, () => {
                        text = `Sing in me the tale of the||||`
                        read(text, textbox, () => {
                            let prompt = optionPrompt(textbox, shuffle(['son', 'daughter']), answer => {
                                prompt.parentElement.removeChild(prompt)
                                hero.sex = answer === 'son' ? 'M' : 'F'
                                let parentName = nameMumbler.mumble()
                                let parentSex = pick(['M', 'M', 'M', 'F'])
                                let placeNames = Object.keys(game.data.map)
                                let home = game.data.map[pick(placeNames.filter(name => {
                                    return ['Thrace', 'Crete', 'Hellas', 'Anatolia'].includes(game.data.map[name].nation)
                                }))]
                                // home = game.data.map['Syrakuse']
                                hero.location = home
                                let descriptor = ''
                                descriptor = pick(home.adjectives)
                                let text = ` ${answer} of ${parentName}, ${parentSex === 'M' ? 'king' : 'queen'} of ${descriptor} ${home.name}.|| Tell the|| life|||| and|| death of|||||`
                                read(text, textbox, () => {
                                    let prompt = textPrompt(textbox, game.data.alphabet, answer => {
                                        prompt.parentElement.removeChild(prompt)
                                        hero.name = answer.length ? answer : parentName
                                        let text = ` ${hero.name}. Begin when ${hero.sex === 'F' ? 'she' : 'he'} honored ${pick(hero.patron.synonyms)} by journeying out to seek ${hero.sex === 'F' ? 'her' : 'his'} fortune|| on| the wine|| dark|| sea||||.||||`
                                        read(text, textbox, () => {
                                            let canvas = document.getElementById('canvas')
                                            setTimeout(() => {
                                                canvas.classList.remove('dark')
                                                textbox.parentElement.parentElement.classList.add('invisible')
                                            }, 800)
                                            setupMap()
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
    game.player = hero
}

let read = (text, textbox, andThen) => {
    currentText = textbox.innerText
    text.split('').forEach((char, i) => {
        setTimeout(() => {
            char = char === '|' ? '' : char
            currentText = `${currentText}${char}`
            textbox.innerText = currentText
            if (i === text.length - 1) {
              andThen(textbox)
            }
        }, i * game.textSpeed)
    })
}


let optionPrompt = (textbox, options, callback) => {
    let optionList = document.createElement('ul')
    optionList.className = 'option-list'
    textbox.parentElement.appendChild(optionList)
    options.forEach(option => {
        let li = document.createElement('li')
        li.innerText = option
        li.addEventListener('click', callback.bind(null, option))
        optionList.appendChild(li)
    })
    return optionList
}

let textPrompt = (textbox, letters, callback) => {
    let prompt = document.createElement('div')
    let result = document.createElement('div')
    let keyboard = document.createElement('ul')
    let answer = ''
    prompt.className = 'text-prompt'
    result.className = 'text-prompt-result'
    keyboard.className = 'text-prompt-keyboard'
    prompt.appendChild(result)
    prompt.appendChild(keyboard)
    result.innerText = '|'
    letters.forEach(letter => {
        let key = document.createElement('li')
        key.innerText = letter
        keyboard.appendChild(key)
        key.addEventListener('click', () => {
            answer += letter
            result.innerText = answer
        })
    })
    let backspace = document.createElement('li')
    backspace.innerText = '←'
    keyboard.appendChild(backspace)
    backspace.addEventListener('click', () => {
        answer = answer.slice(0, answer.length - 1)
        result.innerText = answer === '' ? '|' : answer
    })
    let enter = document.createElement('li')
    enter.className = 'enter-key'
    enter.innerText = 'Enter'
    keyboard.appendChild(enter)
    enter.addEventListener('click', () => {
        answer = `${answer.slice(0, 1)}${answer.slice(1, answer.length).toLowerCase()}`
        callback(answer)
    })
    textbox.parentElement.appendChild(prompt)
    return prompt
}

let setupMap = () => {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')
    let images = {
        map: document.getElementById('map-image'),
        polis: document.getElementById('polis-image'),
        citadel: document.getElementById('citadel-image'),
        redSquare: document.getElementById('red-square-image'),
    }
    game.worldmap = {
        origin: {
            x: 0,
            y: 0,
        },
        width: images.map.width,
    }
    game.screenToWorld = (game.worldmap.width / canvas.width)
    game.screen = {
      origin: {
        x: game.player.location.coordinates.x,
        y: game.player.location.coordinates.y,
      },
      width: canvas.width
    }
    drawMap(canvas, ctx, images)
}

let drawMap = (canvas, ctx, images) => {
    let offset = {
        x: -game.screen.origin.x + 1040,
        y: -game.screen.origin.y + 580,
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(images.map, offset.x, offset.y, images.map.width, images.map.height)
    let toDraw = Object.keys(game.data.map).filter(name => {
        let place = game.data.map[name]
        return (
            place.coordinates.x > -offset.x &&
            place.coordinates.x < -offset.x + 2080 &&
            place.coordinates.y > -offset.y &&
            place.coordinates.y < -offset.y + 1160
        )
    })
    toDraw.forEach(name => {
        let place = game.data.map[name]
        let image = place.type === 'citadel' ? images.citadel : images.polis
        console.log(name)
        ctx.drawImage(
            image,
            place.coordinates.x - game.screen.origin.x + 1040 - 198,
            place.coordinates.y - game.screen.origin.y + 580 - 370,
            image.width / 1.5,
            image.height / 1.5,
        )
        // ctx.drawImage(
        //     images.redSquare,
        //     place.coordinates.x - game.screen.origin.x + 1040,
        //     place.coordinates.y - game.screen.origin.y + 580,
        // )
    })
}

window.addEventListener('load', narrateIntro)
// window.addEventListener('load', drawMap)
// document.getElementById('canvas').classList.remove('dark')

/*
Myths that could be adapted
Iliad
    Troy
Odyssey
    Cyclopes at Aetna
    Scylla and Charybdis
    Journey to Styx
King Minos
    Tower of Daedelus
    Labyrinth
    Minotaur
    Witch-queen
Argonautica
    Colchis
*/
