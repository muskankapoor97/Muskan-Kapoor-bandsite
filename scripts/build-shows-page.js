let mainShows=document.querySelector(".main__shows");

//creating a section element in main
let sectionShows=document.createElement("section");
sectionShows.classList.add("main__shows-details");
mainShows.appendChild(sectionShows);

//adding "shows" heading to section
let mainHeading=document.createElement("h2");
mainHeading.classList.add("main__shows-detailsHeading");
mainHeading.innerText="Shows";
sectionShows.appendChild(mainHeading);

//adding tickets container to section
let ticketsContainer=document.createElement("div");
ticketsContainer.classList.add("tickets");
sectionShows.appendChild(ticketsContainer);

           



//title container for mobile/desktop

let divTitle=document.createElement("div");
divTitle.classList.add("tickets__headings-tablet");
let dateTitle=document.createElement("h3");
dateTitle.classList.add("tickets__heading-tablet");
dateTitle.innerText="DATE";
let venueTitle=document.createElement("h3")
venueTitle.classList.add("tickets__heading-tablet");
venueTitle.innerText="VENUE";
let locationTitle=document.createElement("h3");
locationTitle.classList.add("tickets__heading-tablet");
locationTitle.innerText="LOCATION";

divTitle.appendChild(dateTitle);
divTitle.appendChild(venueTitle);
divTitle.appendChild(locationTitle);
   
ticketsContainer.appendChild(divTitle);



//list of concerts
let concertList=[
    {
        DATE:"Mon Sept 06 2021",
        VENUE:"Ronald Lane",
        LOCATION:"San Francisco, CA"

    },
    {
        DATE:"Tue Sept 21 2021",
        VENUE:"Pier 3 East",
        LOCATION:"San Francisco, CA"

    },
    {
        DATE:"Fri Oct 15 2021",
        VENUE:"View Lounge",
        LOCATION:"San Francisco, CA"

    },
    {
        DATE:"Sat Sept 06 2021",
        VENUE:"Hyatt Agency",
        LOCATION:"San Francisco, CA"

    },
    {
        DATE:"Fri Nov 26 2021",
        VENUE:"Moscow Center",
        LOCATION:"San Francisco, CA"

    },
    {
        DATE:"Wed Dec 15 2021",
        VENUE:"Press Club",
        LOCATION:"San Francisco, CA"

    },
]

//function to display the list

function makingtickets(arr){
    
    for(i=0;i<arr.length;i++){
        const divEl=document.createElement("div");
    divEl.classList.add("ticket");
        for(j=0;j<3;j++){
            let headingEl=document.createElement("h3");
            headingEl.classList.add("ticket__heading");
            
            headingEl.innerText=(Object.keys(arr[i]))[j];
            let paraEl=document.createElement("p");
            paraEl.classList.add("ticket__content");
            paraEl.innerText=(arr[i])[(Object.keys(arr[i]))[j]];
            
            divEl.appendChild(headingEl);
            divEl.appendChild(paraEl);
            
            }
            let buttonEl=document.createElement("button");
            buttonEl.classList.add("ticket__button");
            buttonEl.innerText="BUY TICKETS"
            divEl.appendChild(buttonEl);
            ticketsContainer.appendChild(divEl);
            let hrEl=document.createElement("hr");
            ticketsContainer.appendChild(hrEl);
            
    }
    

}

makingtickets(concertList);
