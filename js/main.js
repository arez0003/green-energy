// Load your images on page-load
function preloader() {
    const imagesList = [
       "./img/solar-panels-electricity.jpg",
       "./img/wind-mill-electricity.jpg",
       "./img/dam-hydro-electricity.jpg"
    ];

    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);

const resources = {
    buttonOne: {
        title: "Solar Panels",
        imgUrl: "./img/solar-panels-electricity.jpg",
        imgAlt: "Solar Panels",
        bodyTxt: "The sun-powered option, which includes photovoltaic solar panels, an inverter and batteries, can provide lots of electric power.A typical house consumes at least a kilowatt of power, so a few square feet of solar panels should be enough to power most or all of your needs.<br><br>If your current roof is nearing the end of its lifespan, you could also consider investing in solar shingles. Where standard rooftop solar panels are mounted on top of your current roof, solar shingles actually take the place of your roof tiles.<br><br>The only downside is the cost: it is rarely cost-effective to power an entire home entirely with solar, even allowing for several decades for a positive return on the investment. Add to that the wide variance of solar exposure by location and the fact that solar only works when the sun is shining, and it's easy to see why solar remains a part of the answer, and not the whole thing.</p>"
    },
    buttonTwo: {
        title: "Wind Turbines",
        imgUrl: "./img/wind-mill-electricity.jpg",
        imgAlt: "Windmills",
        bodyTxt: "Knowing the average and wind speed ranges, you can estimate how much electricity a given system will produce. Keep in mind, wind speeds on a specific lot can vary significantly from regional averages depending on local topography.Wind turbines are most commonly found in windfarms or floating offshore, but if you have enough real estate you can install a small wind turbine on your property to power your home. There are a few downsides to a wind turbine that make them less popular in residential areas. <br><br>They can be ugly and make a lot of noise. They take up space, and depending on where you live, local laws and zoning regulations may outright forbid it. But if these disadvantages don't apply to you or don't bother you, wind power may be a great asset. <br><br>Wind turbines also have moving parts, which means more things that require maintenance and have the possibility of failure. But if you've got a good consistent stiff breeze blowing through the back yard, you can harvest its energy for years to come.</p>"
    },
    buttonThree: {
        title: "Hydro Power",
        imgUrl: "./img/dam-hydro-electricity.jpg",
        imgAlt: "Water Dam",
        bodyTxt: "This method produces its energy from water flowing from a high level to a lower level that turns a turbine at the bottom end of the system.If your source is good, it runs 24 hours a day, 7 days a week, providing lots of off-grid energy for a long, long time; because it produces so much more consistent energy, fewer batteries are needed to store the energy because there is less (or zero) time that the system isn't harvesting energy.<br><br>Depending on the amount of water and vertical distance, you can produce a substantial amount of power this way. Setting up a hydro power generator is not easy, and you may need to have a professional install it for you. If you have some engineering knowledge, though, you could even build it yourself from scratch. And the advantages to hydro power are immense. Unlike solar and wind, hydro is stable and continuous, which means you'll always get the same input no matter what. <br><br>You'll never have to worry that your generator won't be able to power your home. That piece of mind might be worth a little engineering project.</p>"
    }
}


const btns = document.querySelectorAll("button");
const container = document.querySelector(".content");
const active = document.querySelector(".buttons-container"); 

// Add New Content
function eventClick(ev) {
    let btnLabel = ev.target.textContent;
    if (btnLabel === "Solar Panels") {
        container.innerHTML =   `<hr class="top-hr">
                                 <h2>${resources.buttonOne.title}</h2>
                                 <hr class="bottom-hr">
                                 <div class="left-content">
                                    <img src="${resources.buttonOne.imgUrl}" alt="${resources.buttonOne.imgAlt}">
                                 </div>
                                 <div class="right-content">
                                    <p>${resources.buttonOne.bodyTxt}</p>
                                 </div>`;
    } else if (btnLabel === "Wind Turbines") {
        container.innerHTML =   `<hr class="top-hr">
                                 <h2>${resources.buttonTwo.title}</h2>
                                 <hr class="bottom-hr">
                                 <div class="left-content">
                                    <img src="${resources.buttonTwo.imgUrl}" alt="${resources.buttonTwo.imgAlt}">
                                 </div>
                                 <div class="right-content">
                                    <p>${resources.buttonTwo.bodyTxt}</p>
                                 </div>`;
    } else {
        container.innerHTML =   `<hr class="top-hr">
                                 <h2>${resources.buttonThree.title}</h2>
                                 <hr class="bottom-hr">
                                 <div class="left-content">
                                    <img src="${resources.buttonThree.imgUrl}" alt="${resources.buttonThree.imgAlt}">
                                 </div>
                                 <div class="right-content">
                                    <p>${resources.buttonThree.bodyTxt}</p>
                                 </div>`;
    }
}

for (let btn of btns) {
    btn.addEventListener('click', eventClick);
}


// Active Button ID Change
function handleClick(e) {
    let eventActive = e.target;
    
    for(let a of btns) {
        if(a.hasAttribute("id") == true) {
            a.removeAttribute("id");
        }
    }

    eventActive.setAttribute("id", "active-button");
}

for (let btn of btns) {
    btn.addEventListener('click', handleClick);
}