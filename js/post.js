function showSignInModal(){
    var modal = document.getElementById("signin-modal");
    modal.style.display = "flex";
  }
  
  function hideSignInModal(){
    var modal = document.getElementById("signin-modal");
    modal.style.display = "none";
  }
  
  function showSignUpModal(){
    var modal = document.getElementById("signup-modal");
    modal.style.display = "flex";
  }
  
  function hideSignUpModal(){
    var modal = document.getElementById("signup-modal");
    modal.style.display = "none";
  }
function editComment(){
  
}
function incrementCounter(){
  var cntr = document.getElementById('counterLikedBy');
  var val = parseInt(cntr.innerText);
  cntr.innerText = val+1;

}


  
