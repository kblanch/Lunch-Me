

function zomatoes(restaurant){
var client = zomato.createClient({
  userKey: 'b8910995d9facc1a087e4ef0101c4b60', //as obtained from [Zomato API](https://developers.zomato.com/apis) 
});
var client = zomato.createClient({
  userKey: 'b8910995d9facc1a087e4ef0101c4b60', //as obtained from [Zomato API](https://developers.zomato.com/apis) 
});
client.getLocations({
query:restaurant, // suggestion for location name 
lat:oLat, //latitude 
lon:oLon, //longitude 
count:"5" // number of maximum result to fetch 
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});
};


//fix syntax
module.exports=zomatoes()

