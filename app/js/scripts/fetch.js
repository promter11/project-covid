(() => {
  fetch(
    "https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?limit=200"
  )
    .then((response) => response.json())
    .then(({ data: { rows } }) => {
      const statsContentBlock = document.querySelector(".stats .block-content");
  
      let
        statsItemCounter      = 0,
        wrapperElementNumber  = 1;
  
      rows.map(
        ({ flag, country, country_abbreviation, total_cases, new_cases }) => {
          const statsItemArrow =
            +new_cases !== 0
              ? "../img/svg/icons/arrows/red-arrow.svg"
              : "../img/svg/icons/arrows/green-arrow.svg";
  
          if (statsItemCounter % 6 === 0) {
            const statsItemsWrapper = '<div class="item-wrapper"></div>';
  
            statsContentBlock.insertAdjacentHTML("beforeend", statsItemsWrapper);
  
            if (statsItemCounter > 1) {
              wrapperElementNumber++;
            }
          }
  
          const statsItem = `
            <div class="content-item">
              <img class="content-item__flag" src="${flag}" alt="${country_abbreviation} Flag" />
              <span class="content-item__country">${country}</span>
              <span class="item__value">${total_cases}</span>
              <img class="item__arrow" src="${statsItemArrow}" alt="Arrow">
            </div>
          `;
  
          ++statsItemCounter;
  
          document
            .querySelector(`.item-wrapper:nth-child(${wrapperElementNumber})`)
            .insertAdjacentHTML("beforeend", statsItem);
        }
      );
    });  
})();
