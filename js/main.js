"use strict"

let Vanilla = {
  1 : "American - Rough Rider",
  2 : "French - Black Queen",
  3 : "Kongolese",
  4 : "Sumerian",
  5 : "Arabian",
  6 : "Greek Pericles",
  7 : "Norwegian",
  8 : "Aztec",
  9 : "Greek Gorgo",
  10 : "Roman",
  11 : "Egyptian",
  12 : "Indian Gandhi",
  13 : "Russian",
  14 : "English Victoria",
  15 : "Japanese",
  16 : "Spanish"
};
let RiseAndFall = {
  1 : "Cree",
  2 : "Dutch",
  3 : "Georgian",
  4 : "Indian Chandragupta",
  5 : "Korean",
  6 : "Mapuche",
  7 : "Mongolian",
  8 : "Scottish",
  9 : "Zulu"
};
let GatheringStorm = {
  1 : "Canadian",
  2 : "Māori",
  3 : "English Eleanor",
  4 : "Ottoman",
  5 : "Hungarian",
  6 : "Phoenician",
  7 : "Incan",
  8 : "Swedish",
  9 : "Mali"
};

let Poland = {
  1 : "Poland"
};

let Australia = {
  1 : "Australia"
};

let PersiaAndMacedon = {
  1 : "Persia",
  2 : "Macedonian"
};

let Nubia = {
  1 : "Nubia"
}

let KhmerAndIndonesia = {
  1 : "Khmer",
  2 : "Indonesia"
};

let MayaAndGrancolombia = {
  1 : "Mayan",
  2 : "Gran Colombian"
};

let Ethiopia = {
  1 : "Ethiopia"
};

let PersonaPack = {
  1 : "American - Bull Moose",
  2 : "French - Magnificence"
};

let ByzantiumAndGaul = {
  1 : "Byzantine",
  2 : "Gallic"
};

let selectedNations = [];

let mainSection = document.querySelector(".main__section");
let btnAccept_1 = document.querySelector(".accept__button-1");

//----------    STEP 1    ----------

let civilizations = 0;
let players = 0;
let civAndPlayers = 0

let sectionFirst = document.querySelector(".section__first");
let sectionFirstButton = document.querySelector(".section__first-button");

let mainSectionMainDlc = document.querySelector(".main__section-main-DLC")
let civAndPlayersBlock = document.createElement("div");
civAndPlayersBlock.classList.add("civAndPlayersBlock");

sectionFirstButton.addEventListener("click", () => {
  civilizations = document.querySelector(".section__first-select-2").value
  players = +document.querySelector(".section__first-select-1").value
  sectionFirst.classList.add("section__first-hidden")
  mainSection.classList.add("main__section-active")

  civAndPlayers = +civilizations * +players;
  checkCivPlayers()
  // civAndPlayersBlock.innerHTML = `You must select at least ${civAndPlayers} civilizations`;
  mainSectionMainDlc.appendChild(civAndPlayersBlock);
})

function checkCivPlayers() {
  if (civAndPlayers == 1) {
    civAndPlayersBlock.innerHTML = `You must select at least ${civAndPlayers} civilization`;
    civAndPlayersBlock.classList.remove("civAndPlayersBlock-HIDE");
    btnAccept_1.classList.add("accept__button-1-HIDE")
  } else if (civAndPlayers > 1) {
    civAndPlayersBlock.innerHTML = `You must select at least ${civAndPlayers} civilizations`;
    civAndPlayersBlock.classList.remove("civAndPlayersBlock-HIDE");
    btnAccept_1.classList.add("accept__button-1-HIDE")
  } else {
    civAndPlayersBlock.classList.add("civAndPlayersBlock-HIDE");
    btnAccept_1.classList.remove("accept__button-1-HIDE")
  }
}
//----------   /STEP 1    ----------
//----------    STEP 2    ----------

let btnVanila = document.querySelector(".button__vanila");
btnVanila.addEventListener("click", funcBtnVanila)
function funcBtnVanila() {
  btnVanila.classList.toggle("btn-active")
  let VanillaLength = Object.keys(Vanilla).length
  if (btnVanila.classList.contains("btn-active")) {
    selectedNations.push(Vanilla)
    civAndPlayers -= VanillaLength
  } else {
    let VanilaPosition = selectedNations.indexOf(Vanilla);
    selectedNations.splice(VanilaPosition, 1);
    civAndPlayers += VanillaLength
  }
  checkCivPlayers()
}

let btnRiseAndFall = document.querySelector(".button__rise-and-fall");
btnRiseAndFall.addEventListener("click", funcbtnRiseAndFall)
function funcbtnRiseAndFall() {
  btnRiseAndFall.classList.toggle("btn-active")
  let RiseAndFallLength = Object.keys(RiseAndFall).length
  if (btnRiseAndFall.classList.contains("btn-active")) {
    selectedNations.push(RiseAndFall)
    civAndPlayers -= RiseAndFallLength
  } else {
    let riseAndFallPosition = selectedNations.indexOf(RiseAndFall);
    selectedNations.splice(riseAndFallPosition, 1);
    civAndPlayers += RiseAndFallLength
  }
  checkCivPlayers()
}

let btnGatheringStorm = document.querySelector(".button__gathering-storm");
btnGatheringStorm.addEventListener("click", funcbtnGatheringStorm)
function funcbtnGatheringStorm() {
  btnGatheringStorm.classList.toggle("btn-active")
  let GatheringStormLength = Object.keys(GatheringStorm).length
  if (btnGatheringStorm.classList.contains("btn-active")) {
    selectedNations.push(GatheringStorm)
    civAndPlayers -= GatheringStormLength
  } else {
    let gatheringStormPosition = selectedNations.indexOf(GatheringStorm);
    selectedNations.splice(gatheringStormPosition,1)
    civAndPlayers += GatheringStormLength
  }
  checkCivPlayers()
}

let btnPersonaPack = document.querySelector(".button__persona-pack");
btnPersonaPack.addEventListener("click", funcbtnPersonaPack)
function funcbtnPersonaPack() {
  btnPersonaPack.classList.toggle("btn-active")
  let PersonaPackLength = Object.keys(PersonaPack).length
  if (btnPersonaPack.classList.contains("btn-active")) {
    selectedNations.push(PersonaPack)
    civAndPlayers -= PersonaPackLength
  } else {
    let PersonaPackPosition = selectedNations.indexOf(PersonaPack);
    selectedNations.splice(PersonaPackPosition,1)
    civAndPlayers += PersonaPackLength
  }
  checkCivPlayers()
}

let btnByzantiumAndGaul = document.querySelector(".button__byzantium-and-gaul");
btnByzantiumAndGaul.addEventListener("click", funcbtnByzantiumAndGaul)
function funcbtnByzantiumAndGaul() {
  btnByzantiumAndGaul.classList.toggle("btn-active")
  let ByzantiumAndGaulLength = Object.keys(PersonaPack).length
  if (btnByzantiumAndGaul.classList.contains("btn-active")) {
    selectedNations.push(ByzantiumAndGaul)
    civAndPlayers -= ByzantiumAndGaulLength
  } else {
    let ByzantiumAndGaulPosition = selectedNations.indexOf(ByzantiumAndGaul);
    selectedNations.splice(ByzantiumAndGaulPosition,1)
    civAndPlayers += ByzantiumAndGaulLength
  }
  checkCivPlayers()
}

let btnMayaAndGrancolombia = document.querySelector(".button__maya-and-gran-colombia");
btnMayaAndGrancolombia.addEventListener("click", funcbtnMayaAndGrancolombia)
function funcbtnMayaAndGrancolombia() {
  btnMayaAndGrancolombia.classList.toggle("btn-active")
  let MayaAndGrancolombiaLength = Object.keys(MayaAndGrancolombia).length
  if (btnMayaAndGrancolombia.classList.contains("btn-active")) {
    selectedNations.push(MayaAndGrancolombia)
    civAndPlayers -= MayaAndGrancolombiaLength
  } else {
    let MayaAndGrancolombiaPosition = selectedNations.indexOf(MayaAndGrancolombia);
    selectedNations.splice(MayaAndGrancolombiaPosition,1)
    civAndPlayers += MayaAndGrancolombiaLength
  }
  checkCivPlayers()
}

let btnEthiopia = document.querySelector(".button__ethiopia");
btnEthiopia.addEventListener("click", funcbtnEthiopia)
function funcbtnEthiopia() {
  btnEthiopia.classList.toggle("btn-active")
  let EthiopiaLength = Object.keys(Ethiopia).length
  if (btnEthiopia.classList.contains("btn-active")) {
    selectedNations.push(Ethiopia)
    civAndPlayers -= EthiopiaLength
  } else {
    let EthiopiaPosition = selectedNations.indexOf(Ethiopia);
    selectedNations.splice(EthiopiaPosition,1)
    civAndPlayers += EthiopiaLength
  }
  checkCivPlayers()
}

let btnKhmerAndIndonesia = document.querySelector(".button__khmer-and-indonesia");
btnKhmerAndIndonesia.addEventListener("click", funcbtnKhmerAndIndonesia)
function funcbtnKhmerAndIndonesia() {
  btnKhmerAndIndonesia.classList.toggle("btn-active")
  let KhmerAndIndonesiaLength = Object.keys(KhmerAndIndonesia).length
  if (btnKhmerAndIndonesia.classList.contains("btn-active")) {
    selectedNations.push(KhmerAndIndonesia)
    civAndPlayers -= KhmerAndIndonesiaLength
  } else {
    let KhmerAndIndonesiaPosition = selectedNations.indexOf(KhmerAndIndonesia);
    selectedNations.splice(KhmerAndIndonesiaPosition,1)
    civAndPlayers += KhmerAndIndonesiaLength
  }
  checkCivPlayers()
}

let btnPersiaAndMacedon = document.querySelector(".button__persia-and-macedon");
btnPersiaAndMacedon.addEventListener("click", funcbtnPersiaAndMacedon)
function funcbtnPersiaAndMacedon() {
  btnPersiaAndMacedon.classList.toggle("btn-active")
  let PersiaAndMacedonLength = Object.keys(PersiaAndMacedon).length
  if (btnPersiaAndMacedon.classList.contains("btn-active")) {
    selectedNations.push(PersiaAndMacedon)
    civAndPlayers -= PersiaAndMacedonLength
  } else {
    let PersiaAndMacedonPosition = selectedNations.indexOf(PersiaAndMacedon);
    selectedNations.splice(PersiaAndMacedonPosition,1)
    civAndPlayers += PersiaAndMacedonLength
  }
  checkCivPlayers()
}

let btnAustralia = document.querySelector(".button__australia");
btnAustralia.addEventListener("click", funcbtnAustralia)
function funcbtnAustralia() {
  btnAustralia.classList.toggle("btn-active")
  let AustraliaLength = Object.keys(Australia).length
  if (btnAustralia.classList.contains("btn-active")) {
    selectedNations.push(Australia)
    civAndPlayers -= AustraliaLength
  } else {
    let AustraliaPosition = selectedNations.indexOf(Australia);
    selectedNations.splice(AustraliaPosition,1)
    civAndPlayers += AustraliaLength
  }
  checkCivPlayers()
}

let btnNubia = document.querySelector(".button__nubia");
btnNubia.addEventListener("click", funcbtnNubia)
function funcbtnNubia() {
  btnNubia.classList.toggle("btn-active")
  let NubiaLength = Object.keys(Nubia).length
  if (btnNubia.classList.contains("btn-active")) {
    selectedNations.push(Nubia)
    civAndPlayers -= NubiaLength
  } else {
    let NubiaPosition = selectedNations.indexOf(Nubia);
    selectedNations.splice(NubiaPosition,1)
    civAndPlayers += NubiaLength
  }
  checkCivPlayers()
}

let btnPoland = document.querySelector(".button__poland");
btnPoland.addEventListener("click", funcbtnPoland)
function funcbtnPoland() {
  btnPoland.classList.toggle("btn-active")
  let PolandLength = Object.keys(Poland).length
  if (btnPoland.classList.contains("btn-active")) {
    selectedNations.push(Poland)
    civAndPlayers -= PolandLength
  } else {
    let PolandPosition = selectedNations.indexOf(Poland);
    selectedNations.splice(PolandPosition,1)
    civAndPlayers += PolandLength
  }
  checkCivPlayers()
}

let btnSelectAll = document.querySelector(".main__section-btn-all");
let btnMainDlc = document.querySelector(".main__section-main-DLC-btn");
let btnNewFrontierPass = document.querySelector(".main__section-New-Frontier-btn");
let btnCivPacks = document.querySelector(".main__section-Civ-Packs-btn");

btnSelectAll.addEventListener("click", () => {
  if (!btnVanila.classList.contains("btn-active")) {
    funcBtnVanila()
  } if (!btnRiseAndFall.classList.contains("btn-active")) {
    funcbtnRiseAndFall()
  } if (!btnGatheringStorm.classList.contains("btn-active")) {
    funcbtnGatheringStorm()
  } if (!btnPersonaPack.classList.contains("btn-active")) {
    funcbtnPersonaPack()
  } if (!btnByzantiumAndGaul.classList.contains("btn-active")) {
    funcbtnByzantiumAndGaul()
  } if (!btnMayaAndGrancolombia.classList.contains("btn-active")) {
    funcbtnMayaAndGrancolombia()
  } if (!btnEthiopia.classList.contains("btn-active")) {
    funcbtnEthiopia()
  } if (!btnKhmerAndIndonesia.classList.contains("btn-active")) {
    funcbtnKhmerAndIndonesia()
  } if (!btnPersiaAndMacedon.classList.contains("btn-active")) {
    funcbtnPersiaAndMacedon()
  } if (!btnAustralia.classList.contains("btn-active")) {
    funcbtnAustralia()
  } if (!btnNubia.classList.contains("btn-active")) {
    funcbtnNubia()
  } if (!btnPoland.classList.contains("btn-active")) {
    funcbtnPoland()
  } else {
    funcBtnVanila()
    funcbtnRiseAndFall()
    funcbtnGatheringStorm()
    funcbtnPersonaPack()
    funcbtnByzantiumAndGaul()
    funcbtnMayaAndGrancolombia()
    funcbtnEthiopia()
    funcbtnKhmerAndIndonesia()
    funcbtnPersiaAndMacedon()
    funcbtnAustralia()
    funcbtnNubia()
    funcbtnPoland()
  }
})

btnMainDlc.addEventListener("click", () => {
  if (!btnVanila.classList.contains("btn-active")) {
    funcBtnVanila()
  } if (!btnRiseAndFall.classList.contains("btn-active")) {
    funcbtnRiseAndFall()
  } if (!btnGatheringStorm.classList.contains("btn-active")) {
    funcbtnGatheringStorm()
  } else {
    funcBtnVanila()
    funcbtnRiseAndFall()
    funcbtnGatheringStorm()
  }
})

btnNewFrontierPass.addEventListener("click", () => {
  if (!btnPersonaPack.classList.contains("btn-active")) {
    funcbtnPersonaPack()
  } if (!btnByzantiumAndGaul.classList.contains("btn-active")) {
    funcbtnByzantiumAndGaul()
  } if (!btnMayaAndGrancolombia.classList.contains("btn-active")) {
    funcbtnMayaAndGrancolombia()
  } if (!btnEthiopia.classList.contains("btn-active")) {
    funcbtnEthiopia()
  } else {
    funcbtnPersonaPack()
    funcbtnByzantiumAndGaul()
    funcbtnMayaAndGrancolombia()
    funcbtnEthiopia()
  }
})

btnCivPacks.addEventListener("click", () => {
  if (!btnKhmerAndIndonesia.classList.contains("btn-active")) {
    funcbtnKhmerAndIndonesia()
  } if (!btnPersiaAndMacedon.classList.contains("btn-active")) {
    funcbtnPersiaAndMacedon()
  } if (!btnAustralia.classList.contains("btn-active")) {
    funcbtnAustralia()
  } if (!btnNubia.classList.contains("btn-active")) {
    funcbtnNubia()
  } if (!btnPoland.classList.contains("btn-active")) {
    funcbtnPoland()
  } else {
    funcbtnKhmerAndIndonesia()
    funcbtnPersiaAndMacedon()
    funcbtnAustralia()
    funcbtnNubia()
    funcbtnPoland()
  }
})

//----------    /STEP 2    ----------



let newArray = []
let newArray_2 = []

btnAccept_1.addEventListener("click", somefunc)
function somefunc() {
  mainSection.classList.remove("main__section-active")
  let secondSection = document.createElement("div")
  secondSection.classList.add("second__section")
  document.body.appendChild(secondSection);

  for (let childOfArray of selectedNations){
    for (let value of Object.values(childOfArray)){
      newArray.push(value)
    }
  }

  let secondSection_title = document.createElement("div")
  secondSection_title.classList.add("secondSection-title")
  secondSection_title.innerHTML = "Ban civilizations:"
  secondSection.appendChild(secondSection_title)

  // -------------------------BUTTONS-------------------------

  let secondSectionBtns = document.createElement("div")
  secondSectionBtns.classList.add("secondSection-Btns")
  secondSection.appendChild(secondSectionBtns)

  let secondSectionBtnAll = document.createElement("button")
  secondSectionBtnAll.classList.add("secondSection-BtnAll")
  secondSectionBtnAll.innerHTML = "Ban All"
  secondSectionBtns.appendChild(secondSectionBtnAll)

  // ------------------------/BUTTONS-------------------------

  let secondSection_civilizations = document.createElement("div")
  secondSection_civilizations.classList.add("secondSection-civilizations")
  secondSection.appendChild(secondSection_civilizations)

  for (let value of newArray) {
    let secondSectionChild = document.createElement("div")
    secondSectionChild.innerHTML = value
    secondSection_civilizations.appendChild(secondSectionChild)

    let trimedValue = value.split(" ").join("");
    secondSectionChild.classList.add(`${trimedValue}`)
    secondSectionChild.classList.add("civilizations")
  }

  let btnAccept_2 = document.createElement("button")
  btnAccept_2.classList.add("accept__button-2")
  btnAccept_2.innerHTML = "Next"
  secondSection.appendChild(btnAccept_2)

  newArray_2 = document.querySelectorAll(".civilizations")

  //---------------------------------------------------------------------------------------
  secondSection.appendChild(civAndPlayersBlock);

  function checkCivPlayersSecond() {
    if (civAndPlayers == 1) {
      civAndPlayersBlock.innerHTML = `You must unban ${civAndPlayers} civilization`;
      civAndPlayersBlock.classList.remove("civAndPlayersBlock-HIDE");
      btnAccept_2.classList.add("btnAccept_2-HIDE")
    } else if (civAndPlayers > 1) {
      civAndPlayersBlock.innerHTML = `You must unban ${civAndPlayers} civilizations`;
      civAndPlayersBlock.classList.remove("civAndPlayersBlock-HIDE");
      btnAccept_2.classList.add("btnAccept_2-HIDE")
    } else {
      civAndPlayersBlock.classList.add("civAndPlayersBlock-HIDE");
      btnAccept_2.classList.remove("btnAccept_2-HIDE")
    }
  }

  for (let item of newArray_2) {
    item.addEventListener("click", styleCivsEvent)
  }
  function styleCivsEvent(event) {
    event.target.classList.toggle("civilization-disabled")
    if (event.target.classList.contains("civilization-disabled")) {
      civAndPlayers++
      checkCivPlayersSecond()
    } else {
      civAndPlayers--
      checkCivPlayersSecond()
    }
  }

  secondSectionBtnAll.addEventListener("click", () => {
    
    for (let item of newArray_2) {
      if (!item.classList.contains("civilization-disabled")) {
        item.classList.add("civilization-disabled")
        civAndPlayers++
        checkCivPlayersSecond()
      } 
    }
  })

  //---
  let finalArray = []
  btnAccept_2.addEventListener("click", () => {
    for (let item of newArray_2) {
      if (!item.classList.contains("civilization-disabled")) {
        finalArray.push(item)
      }
    }
    secondSection.classList.add("second__section-hidden")

    let finalSection = document.createElement("div")
    finalSection.classList.add("finalSection")
    document.body.appendChild(finalSection)

    let finalSectionTitle = document.createElement("div")
    finalSectionTitle.innerHTML = "Result of randomize:"
    finalSectionTitle.classList.add("finalSection-title")
    finalSection.appendChild(finalSectionTitle)

    // ---------------------------------------

    let filteredMassive = []
    let civFilteredMassive = []

    function randomInteger(min, max) {
      // получить случайное число от (min-0.5) до (max+0.5)
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      if (Math.round(rand) == -0) {
        return 0;
      } else {
        return Math.round(rand);
      }
    }

    function doIt() {
      for (let i = 0; i < civilizations; i++) {
        let randomNum = randomInteger(0, finalArray.length - 1);
        if (filteredMassive.indexOf(randomNum) == -1) {
          filteredMassive.push(randomNum)
          civFilteredMassive.push(finalArray[randomNum])
        } else {
          filteredMassive.length = 0
          civFilteredMassive.length = 0
        }
      }
    }

    function doItCont() {
      while (filteredMassive.length != civilizations * players) {
        doIt()
      }
    }

    let finalAllCivs = document.createElement("div");
    finalAllCivs.classList.add("final-all-civs");
    finalSection.appendChild(finalAllCivs);

    doItCont()

    for (let i = 0; i < players; i++) {

      let playerNum = document.createElement("div");
      playerNum.classList.add("player-num");
      playerNum.innerHTML = `Player ${i + 1}:`
      finalAllCivs.appendChild(playerNum);

      let finalSectionCivilizations = document.createElement("div");
      finalSectionCivilizations.classList.add("finalSection-civilizations");
      finalAllCivs.appendChild(finalSectionCivilizations);

      for (let j = 0; j < +civilizations; j++) {

        civFilteredMassive[civFilteredMassive.length - 1].removeEventListener("click", styleCivsEvent);
        finalSectionCivilizations.appendChild(civFilteredMassive.pop());
      }
    }
  })
}
  
