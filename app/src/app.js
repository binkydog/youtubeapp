angular
  .module('videoApp', ['ngMaterial', 'player', 'youtube'])
  .config(function($mdThemingProvider, $mdIconProvider){

      $mdIconProvider
          .defaultIconSet("./assets/svg/avatars.svg", 128)
          .icon("menu"       , "./assets/svg/menu.svg"        , 24)
          .icon("share"      , "./assets/svg/share.svg"       , 24)
          .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
          .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
          .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
          .icon("phone"      , "./assets/svg/phone.svg"       , 512);

          $mdThemingProvider.theme('default')
              .primaryPalette('cyan')
              .accentPalette('orange');

  })
  .constant('apiConfig', {
  	clientId:'60652316160-d8o02aud0mc678cnen9jrpl162249fa7.apps.googleusercontent.com',
  	apiKey:'AIzaSyBY_SxBpS4gl8rAE8KFbMyf_mS0hpDCDuU',
  	scopes: 'https://www.googleapis.com/auth/youtube'
  });