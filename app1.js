function saveOnClick(){

}
window.onload=function(){
    var firebaseRef=firebase.database().ref("Use");
    firebase.once('value').then(function(dataSnapshot){
      console.log(dataSnapshot.val());
    });
}
