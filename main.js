$(function(){
  const BASE_URL = "https://api.github.com/users/joshgoshbgosh"
    const REP_URL = "https://api.github.com/users/joshgoshbgosh/repos";
      const CLIENT_ID = "c857aad35812bf0e9baa";
      const CLIENT_SECRET = "76ad6cc3128a9734fea8bd955e82b02059939629";
  // USER PROFILE INFO PULL--------------------------
          let requestUserData = $.ajax({
              method: "GET",
              url: `${BASE_URL}`,
              dataType: "jsonp",
              data: {
                  BASE_URL,
                  client_secret: CLIENT_SECRET,
                  client_id: CLIENT_ID,
              }
          });

          // update user image
          // SOURCE grabs html in script tag with #id profile-img-section
let updateUserData =(res)=>{let profileSource=$("#profile-img-section").html();
// complies a functions to orginize iformation
let profileTemplate=Handlebars.compile(profileSource);
// looks for the keys in the data(allways needs an object returned not array)
let profileContext=res.data;
// has key values and gerates html to be insurted to template
let profileHTML=profileTemplate(profileContext);
// insurtes (porfileHTML) into section of actual html
$(".profile-img-section").html(profileHTML)

let userInformation=$("#user-name").html();

let userTemplate =Handlebars.compile(userInformation);

let userintel=res.data;

let userdata=userTemplate(userintel);

$(".user-name").html(userdata);

}



requestUserData.done(updateUserData);





})
