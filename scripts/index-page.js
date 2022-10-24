let comments = [
    {
      name: "Connor Walton",
      date: "02/17/2021",
      comment:
        "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
      name: "Emilie Beach",
      date: "01/09/2021",
      comment:
        "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."  },
    {
      name: "Miles Acosta",
      date: "12/20/2020",
      comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
  ];
  let commentsSection=document.querySelector(".comments");
  
  let commentsContainer = document.createElement("div");
  commentsContainer.classList.add("comments__container");
  commentsSection.appendChild(commentsContainer);
  
  
  
  
  function displayComments(arr) {
    
  
    for (let i = 0; i < arr.length; i++) {
      
    let divider = document.createElement("hr");
    commentsContainer.appendChild(divider);
 
     
     let commentContainer = document.createElement("div");
     commentContainer.classList.add("comment__container");
     commentsContainer.appendChild(commentContainer);
 
     //image container
     let imageContainer = document.createElement("div");
     imageContainer.classList.add("comment__image-container");
     commentContainer.appendChild(imageContainer); 
 
    
    let comment = document.createElement("div");
     comment.classList.add("comment");
     commentContainer.appendChild(comment);
 
     let headerContainer = document.createElement("div");
     headerContainer.classList.add("comment__heading");
     comment.appendChild(headerContainer);
      //name
      let commentName = document.createElement("h3");
      commentName.classList.add("comment__name");
      commentName.innerText = arr[i]["name"];
      headerContainer.appendChild(commentName);
  
      //date
      let commentDate = document.createElement("p");
      commentDate.classList.add("comment__date");
      commentDate.innerText = arr[i]["date"];
      headerContainer.appendChild(commentDate);
  
      //comment__content 
      let commentContent = document.createElement("p");
      commentContent.classList.add("comment__content");
  commentContent.innerText=arr[i]["comment"]
      comment.appendChild(commentContent);
  
    
    }
  }
  displayComments(comments);
  
  
  let form = document.querySelector(".comments__form");
  form.addEventListener("submit", event => {
    
    event.preventDefault();
  
    let userComment = {};
    userComment.name = event.target.name.value;
    userComment.comment =event.target.textarea.value;
    let divider = document.createElement("hr");
    commentsContainer.appendChild(divider);

 
 let commentContainer = document.createElement("div");
 commentContainer.classList.add("comment__container");
 commentsContainer.appendChild(commentContainer);

 //image container
 let imageContainer = document.createElement("div");
 imageContainer.classList.add("comment__image-container");
 commentContainer.appendChild(imageContainer); 


let comment = document.createElement("div");
 comment.classList.add("comment");
 commentContainer.appendChild(comment);

 let headerContainer = document.createElement("div");
 headerContainer.classList.add("comment__heading");
 comment.appendChild(headerContainer);
   //name
let commentName = document.createElement("h3");
commentName.classList.add("comment__name");
commentName.innerText = userComment.name;
headerContainer.appendChild(commentName);

//date
let currentDate = new Date();
let date = String(today.getDate()).padStart(2, "0");
let month = String(today.getMonth() + 1).padStart(2, "0");
let year = today.getFullYear();

currentDate= month + "/" + date + "/" + year;

//date
let commentDate = document.createElement("p");
commentDate.classList.add("comment__date");
commentDate.innerText = currentDate;
headerContainer.appendChild(commentDate);



//comment
let commentContent = document.createElement("p");
commentContent.classList.add("comment__content");
commentContent.innerText = userComment.comment;
comment.appendChild(comment);



document.querySelector(".comment__form").reset();
});
    