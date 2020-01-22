//validate Email and Password
function isEmail(testEmail){
   let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9_])+\.)+([a-zA-Z0-9]{2,4})+$/;
   return regex.test(testEmail);
}
function isPassword(testPassword){
   return testPassword.length >= 6;
}

$(document).ready(function(){
   $('#email').change(function(){
      let email = $(this).val().trim();
      if(!isEmail(email)){
         $('.errorEmail').html('Email is not valid format');
      }
   });
   $('#password').change(function(){
      let password = $(this).val();
      if(!isPassword(password)){
         $('.errorPassword').html('password must to length > 6');
      } 
   });
})