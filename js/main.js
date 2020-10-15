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

let sectionFirst = document.querySelector(".section__first");
let sectionFirstButton = document.querySelector(".section__first-button");

sectionFirstButton.addEventListener("click", () => {
  civilizations = document.querySelector(".section__first-select-2").value
  players = +document.querySelector(".section__first-select-1").value
  sectionFirst.classList.add("section__first-hidden")
  mainSection.classList.add("main__section-active")
})


//----------   /STEP 1    ----------
//----------    STEP 2    ----------

let btnVanila = document.querySelector(".button__vanila");
btnVanila.addEventListener("click", () => {
  btnVanila.classList.toggle("btn-active")
  if (btnVanila.classList.contains("btn-active")) {
    selectedNations.push(Vanilla)
  } else {
    let VanilaPosition = selectedNations.indexOf(Vanilla);
    selectedNations.splice(VanilaPosition, 1);
  }
});

let btnRiseAndFall = document.querySelector(".button__rise-and-fall");
btnRiseAndFall.addEventListener("click", () => {
  btnRiseAndFall.classList.toggle("btn-active")
  if (btnRiseAndFall.classList.contains("btn-active")) {
    selectedNations.push(RiseAndFall)
  } else {
    let riseAndFallPosition = selectedNations.indexOf(RiseAndFall);
    selectedNations.splice(riseAndFallPosition, 1);
  }
});

let btnGatheringStorm = document.querySelector(".button__gathering-storm");
btnGatheringStorm.addEventListener("click", () => {
  btnGatheringStorm.classList.toggle("btn-active")
  if (btnGatheringStorm.classList.contains("btn-active")) {
    selectedNations.push(GatheringStorm)
  } else {
    let gatheringStormPosition = selectedNations.indexOf(GatheringStorm);
    selectedNations.splice(gatheringStormPosition,1)
  }
});

let btnPoland = document.querySelector(".button__poland");
btnPoland.addEventListener("click", () => {
  btnPoland.classList.toggle("btn-active")
  if (btnPoland.classList.contains("btn-active")) {
    selectedNations.push(Poland)
  } else {
    let PolandPosition = selectedNations.indexOf(Poland);
    selectedNations.splice(PolandPosition,1)
  }
});

let btnAustralia = document.querySelector(".button__australia");
btnAustralia.addEventListener("click", () => {
  btnAustralia.classList.toggle("btn-active")
  if (btnAustralia.classList.contains("btn-active")) {
    selectedNations.push(Australia)
  } else {
    let AustraliaPosition = selectedNations.indexOf(Australia);
    selectedNations.splice(AustraliaPosition,1)
  }
});

let btnPersiaAndMacedon = document.querySelector(".button__persia-and-macedon");
btnPersiaAndMacedon.addEventListener("click", () => {
  btnPersiaAndMacedon.classList.toggle("btn-active")
  if (btnPersiaAndMacedon.classList.contains("btn-active")) {
    selectedNations.push(PersiaAndMacedon)
  } else {
    let PersiaAndMacedonPosition = selectedNations.indexOf(PersiaAndMacedon);
    selectedNations.splice(PersiaAndMacedonPosition,1)
  }
});

let btnNubia = document.querySelector(".button__nubia");
btnNubia.addEventListener("click", () => {
  btnNubia.classList.toggle("btn-active")
  if (btnNubia.classList.contains("btn-active")) {
    selectedNations.push(Nubia)
  } else {
    let NubiaPosition = selectedNations.indexOf(Nubia);
    selectedNations.splice(NubiaPosition,1)
  }
});

let btnKhmerAndIndonesia = document.querySelector(".button__khmer-and-indonesia");
btnKhmerAndIndonesia.addEventListener("click", () => {
  btnKhmerAndIndonesia.classList.toggle("btn-active")
  if (btnKhmerAndIndonesia.classList.contains("btn-active")) {
    selectedNations.push(KhmerAndIndonesia)
  } else {
    let KhmerAndIndonesiaPosition = selectedNations.indexOf(KhmerAndIndonesia);
    selectedNations.splice(KhmerAndIndonesiaPosition,1)
  }
});

let btnMayaAndGrancolombia = document.querySelector(".button__maya-and-gran-colombia");
btnMayaAndGrancolombia.addEventListener("click", () => {
  btnMayaAndGrancolombia.classList.toggle("btn-active")
  if (btnMayaAndGrancolombia.classList.contains("btn-active")) {
    selectedNations.push(MayaAndGrancolombia)
  } else {
    let MayaAndGrancolombiaPosition = selectedNations.indexOf(MayaAndGrancolombia);
    selectedNations.splice(MayaAndGrancolombiaPosition,1)
  }
});

let btnEthiopia = document.querySelector(".button__ethiopia");
btnEthiopia.addEventListener("click", () => {
  btnEthiopia.classList.toggle("btn-active")
  if (btnEthiopia.classList.contains("btn-active")) {
    selectedNations.push(Ethiopia)
  } else {
    let EthiopiaPosition = selectedNations.indexOf(Ethiopia);
    selectedNations.splice(EthiopiaPosition,1)
  }
});

let btnPersonaPack = document.querySelector(".button__persona-pack");
btnPersonaPack.addEventListener("click", () => {
  btnPersonaPack.classList.toggle("btn-active")
  if (btnPersonaPack.classList.contains("btn-active")) {
    selectedNations.push(PersonaPack)
  } else {
    let PersonaPackPosition = selectedNations.indexOf(PersonaPack);
    selectedNations.splice(PersonaPackPosition,1)
  }
});

let btnByzantiumAndGaul = document.querySelector(".button__byzantium-and-gaul");
btnByzantiumAndGaul.addEventListener("click", () => {
  btnByzantiumAndGaul.classList.toggle("btn-active")
  if (btnByzantiumAndGaul.classList.contains("btn-active")) {
    selectedNations.push(ByzantiumAndGaul)
  } else {
    let ByzantiumAndGaulPosition = selectedNations.indexOf(ByzantiumAndGaul);
    selectedNations.splice(ByzantiumAndGaulPosition,1)
  }
});
//----------    /STEP 2    ----------



let newArray = []
let newArray_2 = []

btnAccept_1.addEventListener("click", () => {
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

  //---
  for (let item of newArray_2) {
    item.addEventListener("click", styleCivsEvent)
    }
  function styleCivsEvent(event) {
    event.target.classList.toggle("civilization-disabled")
  }
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
      let finalSectionCivilizations = document.createElement("div");
      finalSectionCivilizations.classList.add("finalSection-civilizations");
      finalAllCivs.appendChild(finalSectionCivilizations);

      let playerNum = document.createElement("div");
      playerNum.classList.add("player-num");
      playerNum.innerHTML = `Player ${i + 1}:`
      finalSectionCivilizations.appendChild(playerNum);

      for (let j = 0; j < +civilizations; j++) {

        civFilteredMassive[civFilteredMassive.length - 1].removeEventListener("click", styleCivsEvent);
        finalSectionCivilizations.appendChild(civFilteredMassive.pop());
      }
    }
  })
});