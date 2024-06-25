import { filterData, sortData, computeStats } from "./dataFunctions.js";
import { renderItems, renderRanking } from "./view.js";
import data from "./data/dataset.js";

const mainElement = document.getElementById("root");
mainElement.appendChild(renderItems(data));

function resetSelectIndex(...selectElements) {
  selectElements.forEach((selectElement) => {
    selectElement.selectedIndex = 0;
  });
}

function displayCards(data) {
  mainElement.innerHTML = "";
  mainElement.appendChild(renderItems(data));
}

function applyFilterAndSort(activeFilter, inactiveFilter, orderSelect) {
  let filteredData = data;
  if (activeFilter.value) {
    filteredData = filterData(
      filteredData,
      activeFilter.name,
      activeFilter.value
    );
    resetSelectIndex(inactiveFilter);
  }
  if (orderSelect.value) {
    filteredData = sortData(filteredData, "name", orderSelect.value);
  }
  displayCards(filteredData);
}

function handleOrder(data, orderSelect) {
  let orderedData = data;
  orderedData = sortData(orderedData, "name", orderSelect.value);
  displayCards(orderedData);
}

document.addEventListener("DOMContentLoaded", () => {
  const filterSelectType = document.querySelector("#type-select");
  const filterSelectApplication = document.querySelector(
    "#applicationField-select"
  );
  const orderSelect = document.querySelector("#order-select");
  const clearButton = document.querySelector('[data-testid="button-clear"]');
  const metricsButton = document.querySelector(".metrics");

  filterSelectType.addEventListener("change", () => {
    applyFilterAndSort(filterSelectType, filterSelectApplication, orderSelect);
  });

  filterSelectApplication.addEventListener("change", () => {
    applyFilterAndSort(filterSelectApplication, filterSelectType, orderSelect);
  });

  orderSelect.addEventListener("change", () => {
    if (filterSelectType.value) {
      applyFilterAndSort(
        filterSelectType,
        filterSelectApplication,
        orderSelect
      );
    } else if (filterSelectApplication.value) {
      applyFilterAndSort(
        filterSelectApplication,
        filterSelectType,
        orderSelect
      );
    } else {
      handleOrder(data, orderSelect);
    }
  });

  clearButton.addEventListener("click", () => {
    resetSelectIndex(filterSelectType, filterSelectApplication, orderSelect);
    displayCards(data);
  });

  metricsButton.addEventListener("click", (event) => {
    event.preventDefault();
    const metricsItems = computeStats(data);
    mainElement.innerHTML = "";
    mainElement.appendChild(renderRanking(metricsItems));

    const h3Elements = document.querySelectorAll(".title-overlay");
    h3Elements[0].innerHTML = "Lenguaje De Programación Más Usado";
    h3Elements[1].innerHTML = "Lenguaje De Programación Más Antiguo";
    h3Elements[2].innerHTML = "Lenguaje De Programación Más Actual";
  });
});

/*
import { filterData, sortData, computeStats } from "./dataFunctions.js";
import { renderItems, renderRanking } from "./view.js";
import data from "./data/dataset.js";


const mainElement = document.getElementById("root");
mainElement.appendChild(renderItems(data));

function resetSelectIndex(...selectElements) {
  selectElements.forEach(selectElement => {
    selectElement.selectedIndex = 0;
  })
}

function displayCards(data) {
  mainElement.innerHTML = "";
  mainElement.appendChild(renderItems(data));
} 

document.addEventListener("DOMContentLoaded", () => {
  const filterSelectType = document.querySelector("#type-select");
  const filterSelectApplication = document.querySelector(
    "#applicationField-select"
  );
  const orderSelect = document.querySelector("#order-select");
  const clearButton = document.querySelector('[data-testid="button-clear"]');
  const metricsButton = document.querySelector(".metrics");

  filterSelectType.addEventListener("change", (event) => {
    const selectedValueType = event.target.value;
    const filterItemsType = filterData(data, "type", selectedValueType);
    resetSelectIndex(filterSelectApplication);
    displayCards(filterItemsType);

    orderSelect.addEventListener("change", (event) => {
      const selectedValueOrder = event.target.value;
      const orderItemsName = sortData(
        filterItemsType,
        "name",
        selectedValueOrder
      );
      displayCards(orderItemsName);
    });
  });

  filterSelectApplication.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    const filterItemsApplication = filterData(
      data,
      "applicationField",
      selectedValue
    );
    resetSelectIndex(filterSelectType);
    displayCards(filterItemsApplication);

    orderSelect.addEventListener("change", (event) => {
      const selectedValueOrder = event.target.value;
      const orderItemsName = sortData(
        filterItemsApplication,
        "name",
        selectedValueOrder
      );
      displayCards(orderItemsName);
    });
  });

  orderSelect.addEventListener("change", (event) => {
    const selectedValueOrder = event.target.value;
    const orderItemsName = sortData(data, "name", selectedValueOrder);
    displayCards(orderItemsName);
  });

  clearButton.addEventListener("click", () => {
    resetSelectIndex(filterSelectType, filterSelectApplication, orderSelect);
    displayCards(data);
  });

  metricsButton.addEventListener("click", () => {
    const metricsItems = computeStats(data);
    mainElement.innerHTML = "";
    mainElement.appendChild(renderRanking(metricsItems));

    const h3Elements = document.querySelectorAll(".title-overlay")
    h3Elements[0].innerHTML = "Lenguaje De Programación Más Usado"
    h3Elements[1].innerHTML = "Lenguaje De Programación Más Antiguo"
    h3Elements[2].innerHTML = "Lenguaje De Programación Más Actual"
  });
});

*/
