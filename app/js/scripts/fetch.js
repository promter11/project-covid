(() => {
  fetch("https://corona.lmao.ninja/v2/countries?sort=country")
    .then((response) => response.json())
    .then((data) => {
      const sortedData = data.sort((a, b) => b.cases - a.cases);

      const contentBlock = document.createElement("div");
      contentBlock.classList.add("block-content");

      sortedData.map(
        ({ countryInfo: { flag }, country, cases, todayCases }) => {
          const statsItemArrowSrc =
            +todayCases !== 0
              ? "../img/svg/icons/arrows/red-arrow.svg"
              : "../img/svg/icons/arrows/green-arrow.svg";

          const statsItem = `
            <div class="content-item">
              <img class="content-item__flag" src="${flag}" alt="Flag" />
              <span class="content-item__country">${country}</span>
              <span class="item__value">${cases.toLocaleString()}</span>
              <img class="item__arrow" src="${statsItemArrowSrc}" alt="Arrow">
            </div>
          `;

          contentBlock.insertAdjacentHTML("beforeend", statsItem);
        }
      );

      const statsBlockWrapper = document.querySelector(".stats .block-wrapper");

      statsBlockWrapper.append(contentBlock);
    })
    .catch((err) => {
      const
        headerBlock   = document.querySelector(".stats .block-header"),
        errorBlock    = document.querySelector(".stats .error-boundry");
      
      headerBlock.classList.add('block-header--hidden');
      errorBlock.classList.remove('error-boundry--hidden');

      throw new Error(err);
    });
})();
