var lat = '37.7695284'
var lng = '-122.450716'
var dist = "2000"
var minid = '231241797324399951'

var tags = ['musicexperiment'
];

var artists = ['GUESS',
'standardhwood',
'fosterthepeople',
'toddedwards3000',
'PrinceClubMusic'

];

//Arrays for Instagram photo IDs
var ida = [];
var ida_test = [];


// Multideminsional array for photos
var tag = [];

var id;
var img;

var val;
var art;
var check = 0;
//Load the artists stream
function load_artists()
{
$.each(artists , function(t, art) { 
$.ajax({

        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/" + art + "/media/recent?access_token=8918992.7f0a628.8fa38ec92246430788522ec5a51344c3",
        success: function(data) {
        console.log(val);
        
		if ($.inArray(data.data[0].id, ida) <= '-1' ){
		if ($.inArray(data.data[0].createdtime) > '1340614928'){
											console.log("art works");			
			for (var i = 0; $.inArray(data.data[i].id, ida) <= '-1'; i++) {
			    check++;
				console.log(data.data[i].tags);
				var item = $("<a class='colorbox' id='"+ check +"' target='_blank' href='"  + data.data[i].images.standard_resolution.url +
				"'  rel='lightbox[instagram]'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>").hide().fadeIn(2000);
				$('.pics').prepend(item);
				;
				//set the global im variable
				img = data.data[i].images.low_resolution.url
				
				//update ida array
				ida.push(data.data[i].id);
														}  
		id = data.data[1].id
							}
							}	
								}
    });
 });
    
}

//Load only Guess
function load_guess()
{
$.each(tags , function(t, val) { 
$.ajax({

        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/3380913/media/recent?access_token=8918992.7f0a628.8fa38ec92246430788522ec5a51344c3",
        success: function(data) {
        console.log(val);
        
		if ($.inArray(data.data[0].id, ida) <= '-1' ){
//		if ($.inArray(data.data[0].createdtime) > '1340614928'){
			for (var i = 0; $.inArray(data.data[i].id, ida) <= '-1'; i++) {
//			    check++;
//				console.log(data.data[i].tags);
				var item = $("<a class='colorbox' id='"+ check +"' target='_blank' href='"  + data.data[i].images.standard_resolution.url +
				"'  rel='lightbox[instagram]'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>").hide().fadeIn(2000);
				$('.pics').append(item);
				;
				//set the global im variable
				img = data.data[i].images.low_resolution.url
				
				//update ida array
				ida.push(data.data[i].id);
														}  
		id = data.data[1].id
							}
//							}	
								}
    });
 });
    
}

function load_first()
{
$.each(tags , function(t, val) { 
$.ajax({

        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/tags/" + val + "/media/recent?access_token=8918992.7f0a628.8fa38ec92246430788522ec5a51344c3",
        success: function(data) {
        console.log(val);
        
		if ($.inArray(data.data[0].id, ida) <= '-1' ){
				console.log("this works");			
			for (var i = 0; $.inArray(data.data[i].id, ida) <= '-1'; i++) {
				total++;
				check++;
				console.log(data.data[i].tags);
				var item = $("<a class='colorbox' id='"+ check +"' target='_blank' href='"  + data.data[i].images.standard_resolution.url +
				"'  rel='lightbox[instagram]' title='@" + data.data[i].user.username + " " + data.data[i].caption.text +"'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>").hide().fadeIn(2000);
				$('.pics').prepend(item);
				
				//set the global im variable
				img = data.data[i].images.low_resolution.url
				
				//update ida array
				ida.push(data.data[i].id);
														}  
		id = data.data[1].id
							}
								}
    });
 });
  
}
