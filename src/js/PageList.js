const PageList = (argument = '') => {
    const preparePage = () => {
      document.getElementById("textHeader").style.display = "block";
      const cleanedArgument = argument.trim().replace(/\s+/g, '-');

      const displayResults = (articles) => {
        console.log(articles)
        const resultsContent = articles.map((article) => {
          let platforms = "";
          article.parent_platforms.map((platform) =>{
            platforms += `<img id="imgPlatform" src="./src/images/${platform.platform.slug}.svg">`;
          });
          let tagsGame = "";
          article.tags.map((tags, index) =>{
            tagsGame += `<span>${tags.name}${index < article.tags.length - 1 ? ', ' : ''}</span>`;
          });
          return `<article class="cardGame /single-img">
            <a class="linkGameDetail" href="#pagedetail/${article.id}"><img class="image-card-page-list " src="${article.background_image}"></a>
            <h1 class="title-game"><a class="linkGameDetail" href="#pagedetail/${article.id}">${article.name}</a></h1>
            <p id="platformGame">${platforms}</p>
              <div class="img-overlay">
                <div class="text">
                 <p>${article.released}</p>
                 <p>${article.rating}/5 - ${article.ratings_count} vote</p>
                 <div>
                  <p>${tagsGame}</p>
                 </div>
                </div>
              </div>
          </article> `
        });
        const resultsContainer = document.querySelector('.page-list .articles');
        resultsContainer.innerHTML = resultsContent.join("\n");
      };
  
      const fetchList = (url, argument) => {
        const finalURL = argument ? `${url}&search=${argument}` : url;
        fetch(finalURL)
          .then((response) => response.json())
          .then((responseData) => {
            displayResults(responseData.results)
          });
      };
  
      fetchList(`https://api.rawg.io/api/games?key=5a28df7b6f354dc7b7e109b55d813eba&page_size=9`, cleanedArgument);
    };
  
    const render = () => {
      pageContent.innerHTML = `
        <section class="page-list">
          <div class="articles">Loading...</div>
        </section>
      `;
  
      preparePage();
    };
  
    render();
  };

  const getGame = async () => {
    let inputUser = document.getElementById("game").value;
    console.log(inputUser);
  }


  export default PageList;