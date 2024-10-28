document.addEventListener("DOMContentLoaded", function() {
    const characters = [
      {
        name: "Luke Skywalker",
        description: "Jovem Jedi com a missão de restaurar a paz na galáxia.",
        image: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
        classe: "Jedi",
        planeta: "Tatooine",
        extraInfo: "Filho de Anakin Skywalker, treinado por Obi-Wan Kenobi e Yoda para enfrentar o Império."
      },
      {
        name: "Leia Organa",
        description: "Líder da Aliança Rebelde e princesa corajosa.",
        image: "https://starwars-visualguide.com/assets/img/characters/5.jpg",
        classe: "Líder",
        planeta: "Alderaan",
        extraInfo: "Irmã gêmea de Luke Skywalker, figura essencial na resistência contra o Império."
      },
      {
        name: "Darth Vader",
        description: "Antigo Jedi que se tornou um Lorde Sith poderoso.",
        image: "https://starwars-visualguide.com/assets/img/characters/4.jpg",
        classe: "Sith",
        planeta: "Tatooine",
        extraInfo: "Antigo Anakin Skywalker, aprendiz de Obi-Wan Kenobi, agora servo do Imperador Palpatine."
      }
    ];
  
    const container = document.getElementById("cards-container");
    const modal = document.getElementById("character-modal");
    const modalCharacterName = document.getElementById("modal-character-name");
    const modalCharacterDescription = document.getElementById("modal-character-description");
    const modalCharacterExtra = document.getElementById("modal-character-extra");
    const closeModalButton = document.getElementById("close-modal");
  
    characters.forEach(character => {
      const card = document.createElement("div");
      card.classList.add("character-card", "relative", "max-w-xs", "bg-gray-800", "rounded-lg", "shadow-2xl", "overflow-hidden", "transform", "transition-all", "duration-300", "hover:scale-105");
  
      card.innerHTML = `
        <div class="relative">
          <img src="${character.image}" alt="${character.name}" class="w-full h-64 object-cover transition-transform duration-500 hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
        </div>
        <div class="p-6">
          <h2 class="text-2xl font-semibold text-white shine mb-2 text-center">${character.name}</h2>
          <p class="text-sm text-gray-400 text-center mb-4 italic">${character.description}</p>
          <div class="flex justify-between items-center text-gray-300 text-sm mb-4">
            <div class="flex flex-col items-center">
              <span class="font-semibold text-gray-100">Classe</span>
              <span class="text-gray-400">${character.classe}</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="font-semibold text-gray-100">Planeta</span>
              <span class="text-gray-400">${character.planeta}</span>
            </div>
          </div>
          <div class="text-center">
            <button class="ver-mais px-4 py-2 bg-blue-500 text-white rounded-full shadow-md transform transition duration-300 hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Ver mais
            </button>
          </div>
        </div>
      `;
  
      card.querySelector(".ver-mais").addEventListener("click", () => {
        modalCharacterName.textContent = character.name;
        modalCharacterDescription.textContent = character.description;
        modalCharacterExtra.textContent = character.extraInfo;
        modal.classList.remove("hidden");
      });
  
      container.appendChild(card);
    });
  
    closeModalButton.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  });
  