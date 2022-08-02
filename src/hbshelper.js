const hbs = require('hbs');
hbs.registerHelper("blogcard",(arr)=>{
        arr.forEach(function(item){
            return(`
            <div class="card">
            <div class="card_image"><img src=${item.img}></div>
            <div class="card_content">
              <h2 class="card_title">${item.heading}</h2>
              <p class="card_text">${item.description}</p>
              <button class="btn card_btn">Read More</button>
            </div>
          </div>
            `);
        })
})