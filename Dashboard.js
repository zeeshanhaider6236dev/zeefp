 function loadGoogleTranslate(){
        new google.translate.TranslateElement("google_element");
    }

    const loader = document.querySelector('.statusSpinner');
    loader.style.display="none"

    function checkAddress(checkbox)
{
    if (checkbox.checked)
    {
      loader.style.display = "inline";
      setTimeout(()=>{
        loader.style.display ="none"
      }, 3000)
    }
    else{
      loader.style.display = "none";


    }
}


var c = document.getElementById('platypus')
  c.onchange = function() {
    if (c.checked == true) {document.getElementById('answer').style.display = 'inline';}
    else {document.getElementById('answer').style.display = '';
    }
  }

  document.addEventListener('click' , function(e){
    console.log(e.target)
    if (e.target.id == 'formCheck-2') {
      document.querySelector('.search-field-div').style.display = "block";
      document.querySelector('#nicheTagRow').style.display = 'none';   

    }
    else if (e.target.id=='formCheck-1') {
      document.querySelector('.search-field-div').style.display = "none";      
      document.querySelector('#nicheTagRow').style.display = 'none';   

      
    }
    else if(e.target.id == 'formCheck-3'){
      document.querySelector('.search-field-div').style.display = "none";   
      document.querySelector('#nicheTagRow').style.display = 'flex';   


    }
  })
   function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
    var mdg= document.createElement('p');
    mdg.innerHTML ="link copied";
    mdg.className = "font-weight-bold p_msg"
    document.getElementById('copy_div').appendChild(mdg)

    setTimeout(()=>{
    document.getElementById('copy_div').removeChild(mdg)
    } , 3000)
        }

  document.addEventListener('click' , function(e){
    if(e.target.classList.contains('del-btn')){
   var td = e.target.parentNode; 
      var tr = td.parentNode; // the row to be removed
      tr.parentNode.removeChild(tr);
    }
  })
  
 $(document).ready(function(){
  $(".bg-3").click(function(){
    if($(this).hasClass("in-cart")){
      $(this).removeClass("in-cart").text("ADD THIS PIXEL");;
    }
    else {
      var btn = $(this);
      btn.addClass("anim").text("Adding...");
      
      setTimeout(function(){
        btn.removeClass("anim").addClass("in-cart").text("Added");
      }, 2000)
    }
  });
});