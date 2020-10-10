$(function(){
  const BASE_URL = "https://api.github.com/users/joshgoshbgosh"
    const REPO_URL = "https://api.github.com/users/joshgoshbgosh/repos";
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
          // let requestRepoData = $.ajax({
          //     method: "GET",
          //     url: `${REPO_URL}`,
          //     dataType: "jsonp",
          //     data: {
          //         REPO_URL,
          //         client_secret: CLIENT_SECRET,
          //         client_id: CLIENT_ID,
          //     }
          // });
          // update user image
          // SOURCE grabs html in script tag with #id profile-img-section
let updateUserData =(res)=>{
    let profileSource=$("#profile-img-section").html();
    // complies a functions to orginize iformation
    let profileTemplate=Handlebars.compile(profileSource);
    // looks for the keys in the data(allways needs an object returned not array)
    let profileContext=res.data;
    console.log("profileContext",profileContext);
    // has key values and gerates html to be insurted to template
    let profileHTML=profileTemplate(profileContext);
    // insurtes (porfileHTML) into section of actual html
    $(".profile-img-section").html(profileHTML)
}
// REPO
// let updateRepoData =(res)=>{
//     let repoSource=$("#repo-section").html();
//     // complies a functions to orginize iformation
//     let repoTemplate=Handlebars.compile(repoSource);
//     // looks for the keys in the data(allways needs an object returned not array)
//     let repoContext = {data:res.data};
//     console.log("repoContext", repoContext);
//     // has key values and gerates html to be insurted to template
//     let repoHTML=repoTemplate(repoContext);
//     // insurtes (porfileHTML) into section of actual html
//     $(".repo-section").html(repoHTML)
// }

$.ajax({
    url:'https://api.github.com/users/joshgoshbgosh/repos?client_id=c857aad35812bf0e9baa&client_secret=76ad6cc3128a9734fea8bd955e82b02059939629',
    dataType: 'jsonp',
    method: 'GET',
    success: function(response){
      response = {data:response.data};
      console.log('response',response);
      renderRepoHTML(response);
    },
    error: function(xhr){
      console.log('does not work, try again', xhr.status);
    },
  });
  function renderRepoHTML(response) {
    var source   = document.getElementById("repo-section").innerHTML;
    var template = Handlebars.compile(source);
    var context = response;
    var html = template(context);
    $('.repo-section').html(html);
  }
// let userInformation=$("#user-name").html();
// let userTemplate =Handlebars.compile(userInformation);
// let userintel=res.data;
// let userdata=userTemplate(userintel);
// $(".user-name").html(userdata);
// repo data
// let repoInformation=$("#repo-name").html();
// let repoTemplate =Handlebars.compile(repoInformation);
// let repointel=res.data;
// let repodata=repoTemplate(repointel);
// $(".repo-name").html(repodata);
requestUserData.done(updateUserData);
requestRepoData.done(updateRepoData);
})
