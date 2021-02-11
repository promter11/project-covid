(() => {
  const
    headerBlock       = document.querySelector(".stats .block-header"),
    statsBlockWrapper = document.querySelector(".stats .block-wrapper"),
    errorBlock        = document.querySelector(".stats .error-boundry");

  fetch("https://corona.lmao.ninja/v2/countries?sort=country")
    .then((response) => response.json())
    .then((data) => {
      const contentBlock = document.createElement("div");

      contentBlock.classList.add("block-content");

      const sortedData = data.sort((a, b) => b.cases - a.cases);

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
      
      statsBlockWrapper.append(contentBlock);

      headerBlock.classList.remove("block-header--hidden");

      fetchStatus = !fetchStatus;
    })
    .catch((err) => {
      errorBlock.classList.remove("error-boundry--hidden");

      throw new Error(err);
    });
})();
