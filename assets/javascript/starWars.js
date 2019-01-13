function startGame () {
    // resets the game to original state;
    characters = resetCharacters()
    gameState = resetGameState()
}
function resetCharacters() {
 // resets the character stats to originals.
 return {
    'pilot': {
      name: 'pilot',
      health: 120,
      attack: 8,
      imageUrl: 'assets/images/pilot.jpg',
      enemyAttackBack: 15
    },
    'ZamWesell': {
      name: 'Luke Skywalker',
      health: 100,
      attack: 14,
      imageUrl: 'assets/images/ZamWesell.jpg',
      enemyAttackBack: 5
    },
    'chewbacca': {
      name: 'chewbacca',
      health: 150,
      attack: 8,
      imageUrl: 'ssets/images/chewbacca.jpg',
      enemyAttackBack: 20
    },
    'stormTrooper': {
      name: 'stromTrooper',
      health: 180,
      attack: 7,
      imageUrl: 'assets/images/stromTrooper.jpg',
      enemyAttackBack: 25
    }
  }
}  


function resetGameState () {
  // resets game state to originals.
  return {
    selectedCharacter: null,
    selectedDefender: null,
    enemiesLeft: 0,
    numAttacks: 0
  }
}
// helpful for creating divs dynamically.
function createCharDiv (character, key) {
    // NOTE: data-name is necessary in charDiv so we can back reference in generic clickHandlers.
    var charDiv = $("<div class='character' data-name='" + key + "'>")
    var charName = $("<div class='character-name'>").text(character.name)
    var charImage = $("<img alt='image' class='character-image'>").attr('src', character.imageUrl)
    var charHealth = $("<div class='character-health'>").text(character.health)
    charDiv.append(charName).append(charImage).append(charHealth)
    return charDiv
  }
// renders all characters in character-area to start
function renderCharacters () {
    console.log('rendering characters')
    // iterate through characters object,
    // render each character to the charactersSelect div
    var keys = Object.keys(characters)
    for (var i = 0; i < keys.length; i++) {
      // get the current character out of the object
      var characterKey = keys[i]
      var character = characters[characterKey]
      // append elements to the #character-area element
      var charDiv = createCharDiv(character, characterKey)
      $('#character-area').append(charDiv)
    }
  }
  
  // renders just the opponents (not the character that was just selected)
  function renderOpponents (selectedCharacterKey) {
    // iterate through oponents object, and render
    // oponent divs for every key that is NOT the selectedCharacter
    var characterKeys = Object.keys(characters)
    for (var i = 0; i < characterKeys.length; i++) {
      if (characterKeys[i] !== selectedCharacterKey) {
        var enemyKey = characterKeys[i]
        var enemy = characters[enemyKey]
  
        var enemyDiv = createCharDiv(enemy, enemyKey)
        $(enemyDiv).addClass('enemy')
        $('#available-to-attack-section').append(enemyDiv)
      }
    }
  }

/*
  HOMEWORK INSTRUCTIONS: The player chooses an opponent by clicking on an enemy's picture.
*/
function enableEnemySelection () {
    $('.character').on('click.enemySelect', function () {
      console.log('opponent selected')
      var opponentKey = $(this).attr('data-name')
      gameState.selectedDefender = characters[opponentKey]
  
      // move enemy
      $('#defender').append(this)
      /*
      * HOMEWORK INSTRUCTIONS: Once the player selects an opponent,
        that enemy is moved to a `defender area`.
         The player will now be able to click the `attack` button
      */
      $('#attack-button').show()
      $('.enemy').off('click.enemySelect')
    })
}
