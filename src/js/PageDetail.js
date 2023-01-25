const PageDetail = (argument) => {
    const preparePage = () => {
      document.getElementById("textHeader").style.display = "none";
      const cleanedArgument = argument.trim().replace(/\s+/g, "-");
  
      const displayGame = (gameData) => {
        console.log(gameData)
        const { name, released, description, background_image, rating, rating_top, ratings_count, developers, publishers, parent_platforms } = gameData;
        const articleDOM = document.querySelector(".page-detail .article");
        // articleDOM.querySelector("img.imgDetailGame").innerHTML = article.background_image;
        articleDOM.querySelector("h1.titleGameDetail").innerHTML = name;
        articleDOM.querySelector("p.release-date span").innerHTML = released;
        articleDOM.querySelector("p.noteGame").innerHTML = rating + "/" + rating_top + " - " + ratings_count + " votes";
        articleDOM.querySelector("p.description").innerHTML = description;
        articleDOM.querySelector("img.imgDetailGame").src = background_image;
        articleDOM.querySelector("p.dev").innerHTML = `Studio : ${developers.map((x)=> x.name).join(", ")}`;
        articleDOM.querySelector("p.publisher").innerHTML = `Publishers : ${publishers.map((publi)=> publi.name).join(", ")}`;
        articleDOM.querySelector("p.platform").innerHTML = `Platforms : ${parent_platforms.map((x)=> x.platform.slug).join(", ")}.`;
        
        
      };
  
      const fetchGame = (url, argument) => {
        fetch(`${url}/${argument}?key=5a28df7b6f354dc7b7e109b55d813eba`)
          .then((response) => response.json())
          .then((responseData) => {
            displayGame(responseData);
          });
      };
  
      fetchGame('https://api.rawg.io/api/games', cleanedArgument);
    };
  
    const render = () => {
      pageContent.innerHTML = `
        <section class="page-detail">
          <div class="article">
            <div>
              <img class="imgDetailGame" src="">
            </div>
            
            <div class="titleNoteGameDetail">
              <div>
                <h1 class="titleGameDetail"></h1>
              </div>
              <div>
                <p class="noteGame"></p>
              </div>
            </div>
            
            <p class="description"></p>

            <div class="infoGameDetail">
              <p class="release-date">Release date : <span></span></p>
              <p class="dev"></p> 
              <p class="publisher"></p>
              <p class="platform"></p>
            </div>
           
          </div>
        </section>
      `;
  
      preparePage();
    };
  
    render();
  };
  export default PageDetail;