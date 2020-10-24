"use strict"
const data = {
  vanilla: [
    "American - Rough Rider",
    "French - Black Queen",
    "Kongolese",
    "Sumerian",
    "Arabian",
    "Greek Pericles",
    "Norwegian",
    "Aztec",
    "Greek Gorgo",
    "Roman",
    "Egyptian",
    "Indian Gandhi",
    "Russian",
    "English Victoria",
    "Japanese",
    "Spanish"
  ],

  riseAndFall: [
    "Cree",
    "Dutch",
    "Georgian",
    "Indian Chandragupta",
    "Korean",
    "Mapuche",
    "Mongolian",
    "Scottish",
    "Zulu"
  ],

  gatheringStorm: [
    "Canadian",
    "Māori",
    "English Eleanor",
    "Ottoman",
    "Hungarian",
    "Phoenician",
    "Incan",
    "Swedish",
    "Mali"
  ],

  poland: ["Poland"],
  australia: ["Australia"],
  persiaAndMacedon: ["Persia", "Macedonian"],
  nubia: ["Nubia"],
  khmerAndIndonesia: ["Khmer", "Indonesia"],
  mayaAndGrancolombia: ["Mayan", "Gran Colombian"],
  ethiopia: ["Ethiopia"],
  personaPack: ["American - Bull Moose", "French - Magnificence"],
  byzantiumAndGaul: ["Byzantine", "Gallic"]
}

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

function toggleBanner(banner) {
  const pack = data[banner.dataset.pack];

  banner.classList.toggle("btn-active");

  if (banner.classList.contains("btn-active")) {
    selectedNations.push(pack);
    civAndPlayers -= pack.length;
  } else {
    const position = selectedNations.indexOf(pack);
    selectedNations.splice(position, 1);
    civAndPlayers += pack.length;
  }

  checkCivPlayers();
}

function toggleBanners(type) {
  let banners = Array.from(document.querySelectorAll(".banner"));

  if (type) {
    banners = banners.filter(banner => banner.dataset.type === type);
  }

  const filteredBanners = banners.filter(banner => !banner.classList.contains("btn-active"));
  const bannersToChange = filteredBanners.length ? filteredBanners : banners;

  bannersToChange.forEach(banner => toggleBanner(banner));
}

let banners = document.querySelectorAll(".banner");
let btnSelectAll = document.querySelector(".main__section-btn-all");
let btnMainDlc = document.querySelector(".main__section-main-DLC-btn");
let btnNewFrontierPass = document.querySelector(".main__section-New-Frontier-btn");
let btnCivPacks = document.querySelector(".main__section-Civ-Packs-btn");

banners.forEach(banner => {
  banner.addEventListener("click", () => toggleBanner(banner))
})

btnSelectAll.addEventListener("click", () => toggleBanners());
btnMainDlc.addEventListener("click", () => toggleBanners("main"));
btnNewFrontierPass.addEventListener("click", () => toggleBanners("newFrontier"));
btnCivPacks.addEventListener("click", () => toggleBanners("others"));

//----------    /STEP 2    ----------



let newArray = []
let newArray_2 = []

btnAccept_1.addEventListener("click", somefunc)
function somefunc() {
  mainSection.classList.remove("main__section-active")
  let secondSection = document.createElement("div")
  secondSection.classList.add("second__section")
  document.body.appendChild(secondSection);

  selectedNations.forEach(pack => {
    pack.forEach(nation => {
      newArray.push(nation);
    })
  })

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
    const nations = Array.from(newArray_2);
    const filteredNations = nations.filter(nation => !nation.classList.contains("civilization-disabled"));
    const nationsToChange = filteredNations.length ? filteredNations : nations;
    const modifier = filteredNations.length ? 1 : -1;

    nationsToChange.forEach(nation => {
      nation.classList.toggle("civilization-disabled");
      civAndPlayers + modifier;
      checkCivPlayersSecond();
    });
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

    let civFilteredMassive = [];

    function getRandonCivFromArray(array) {
      const randomInt = Math.floor(Math.random() * array.length);
      return array.splice(randomInt, 1)[0];
    }

    function doItCont() {
      while (civFilteredMassive.length != civilizations * players) {
        for (let i = 0; i < civilizations; i++) {
          civFilteredMassive.push(getRandonCivFromArray(finalArray));
        }
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
  
