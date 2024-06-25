export const renderItems = (data) => {
  const ulElement = document.createElement("ul");

  data.forEach((objeto) => {
    const liElement = document.createElement("li");
    liElement.classList.add("card");
    liElement.setAttribute("itemscope", "");
    liElement.setAttribute("itemtype", "https://schema.org/CreativeWork");
    liElement.setAttribute("data-id", objeto.id);

    liElement.innerHTML = ` 
        <div class="card-image">
          <img class="image" src="${objeto.imageUrl}" alt="${objeto.name}" itemprop="image"/>
        </div>
        <div class="card-text">
          <div class="content-title">
            <h3 class="title-name" itemprop="name">${objeto.name}</h3>
            <img class="title-logo" src="${objeto.extraInfo.logoUrl}" alt="${objeto.name}" itemprop="image"/>
          </div>
          <p class="card-description" itemprop="description">${objeto.shortDescription}</p>
          <span class="card-year" itemprop="dateCreated"><span class="bold">Creado en:</span> ${objeto.facts.yearOfCreation}</span>
          <span class="card-creator" itemprop="creator"><span class="bold">Autor:</span> ${objeto.facts.creator}</span>
          <span class="card-users" itemprop="usageInfo">${objeto.facts.percentageOfUsers}</span>
        </div>
        <div class="card-label">
            <div class="item-label type">
              <img class="label-icon type" src="${objeto.extraInfo.iconTypeUrl}" alt="Type" itemprop="image"/>
              <span class="label-text type" itemprop="additionalType">Tipo ${objeto.facts.type}</span>
            </div>
            <div class="item-label application">
              <img class="label-icon application" src="${objeto.extraInfo.iconApplicationUrl}" alt="Application" itemprop="image"/>
              <span class="label-text field" itemprop="exampleOfWork">Aplicación ${objeto.facts.applicationField}</span>
            </div>
            <div class="item-label difficulty">
              <img class="label-icon ${objeto.facts.difficultyLevel}" src="./assets/icons/fire.svg" alt="difficulty level" itemprop="image"/>
              <span class="label-text difficulty" itemprop="educationalLevel">Dificultad ${objeto.facts.difficultyLevel}</span>
            </div>
        </div>
      `;
    ulElement.appendChild(liElement);
  });
  return ulElement;
};

export const renderRanking = (data) => {
  const ulElement = document.createElement("ul");

  data.forEach((objeto) => {
    const liElement = document.createElement("li");
    liElement.classList.add("card");
    liElement.setAttribute("itemscope", "");
    liElement.setAttribute("itemtype", "https://schema.org/CreativeWork");
    liElement.setAttribute("data-id", objeto.id);

    liElement.innerHTML = ` 
        <div class="card-image">
          <img class="image" src="${objeto.imageUrl}" alt="${objeto.name}" itemprop="image"/>
        </div>
        <div class="card-text">
          <div class="content-title">
            <h3 class="title-name" itemprop="name">${objeto.name}</h3>
            <img class="title-logo" src="${objeto.extraInfo.logoUrl}" alt="${objeto.name}" itemprop="image"/>
          </div>
          <p class="card-description" itemprop="description">${objeto.shortDescription}</p>
          <span class="card-year" itemprop="dateCreated"><span class="bold">Creado en:</span> ${objeto.facts.yearOfCreation}</span>
          <span class="card-creator" itemprop="creator"><span class="bold">Autor:</span> ${objeto.facts.creator}</span>
          <span class="card-users" itemprop="usageInfo">${objeto.facts.percentageOfUsers}</span>
        </div>
        <div class="card-label">
            <div class="item-label type">
              <img class="label-icon type" src="${objeto.extraInfo.iconTypeUrl}" alt="Type" itemprop="image"/>
              <span class="label-text type" itemprop="additionalType">Tipo ${objeto.facts.type}</span>
            </div>
            <div class="item-label application">
              <img class="label-icon application" src="${objeto.extraInfo.iconApplicationUrl}" alt="Application" itemprop="image"/>
              <span class="label-text field" itemprop="exampleOfWork">Aplicación ${objeto.facts.applicationField}</span>
            </div>
            <div class="item-label difficulty">
              <img class="label-icon ${objeto.facts.difficultyLevel}" src="./assets/icons/fire.svg" alt="difficulty level" itemprop="image"/>
              <span class="label-text difficulty" itemprop="educationalLevel">Dificultad ${objeto.facts.difficultyLevel}</span>
            </div>
        </div>
        <div class="overlay">
          <h3 class="title-overlay"></h3>
        </div>
      `;
    ulElement.appendChild(liElement);
  });
  return ulElement;
};
