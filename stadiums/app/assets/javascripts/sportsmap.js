//= require_tree .
      function initMap() {
        

        //Geo-locations of different stadiums
       
       
        var sj_earthquakes = {lat: 37.3515358, lng: -121.927683};
        

        //Create the map

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: sj_earthquakes,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });

        //shapes and markers on the map

        var triangleCoords = [
          real_madrid,
          camp_nou,
          manchester
        ];

        // Construct the polygon.
        var bermudaTriangle = new google.maps.Polygon({
          paths: triangleCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
        bermudaTriangle.setMap(map);

        var soccer_icon = {
          path: 'M790 1981 c-200 -44 -367 -139 -516 -293 -112 -116 -202 -273 -246 -433 -19 -69 -22 -105 -22 -260 0 -167 2 -186 27 -269 56 -180 142 -321 276 -449 124 -119 267 -200 436 -249 70 -20 101 -23 255 -22 204 0 269 14 427 89 126 59 202 115 303 222 119 125 196 262 242 430 19 66 22 104 22 253 0 149 -3 187 -22 254 -27 99 -99 250 -156 330 -50 70 -178 196 -250 245 -67 46 -218 116 -306 141 -109 32 -351 37 -470 11z m330 -161 c55 -9 179 -43 202 -56 4 -3 -3 -31 -14 -64 -11 -34 -17 -71 -14 -84 3 -13 60 -76 127 -140 150 -144 184 -155 264 -85 l34 30 30 -63 c53 -113 75 -209 75 -343 l1 -120 -82 -3 c-74 -3 -84 -5 -102 -28 -21 -27 -111 -290 -111 -325 0 -12 18 -38 43 -61 l42 -39 -60 -56 c-56 -51 -179 -133 -201 -133 -5 0 -18 23 -28 52 -10 28 -31 64 -46 80 l-28 28 -241 0 c-278 0 -273 2 -316 -105 -13 -33 -28 -61 -32 -62 -16 -6 -158 85 -216 137 l-58 52 46 49 c25 26 45 53 45 59 0 19 -82 264 -101 302 -23 44 -69 62 -148 57 -48 -4 -52 -2 -58 20 -11 42 6 224 27 299 20 72 87 222 100 222 3 0 19 -14 36 -31 53 -56 113 -73 160 -46 12 7 74 62 138 123 131 124 131 126 96 229 -11 32 -19 59 -18 60 2 1 26 10 53 19 102 33 243 43 355 26z M816 1297 c-25 -25 -116 -283 -116 -328 0 -20 28 -53 119 -142 66 -64 132 -122 147 -128 55 -20 88 -4 212 108 64 58 123 113 130 121 19 24 15 55 -24 180 -43 136 -66 187 -93 202 -11 6 -91 10 -186 10 -160 0 -167 -1 -189 -23z',
          fillColor: 'white',
          fillOpacity: 1.0,
          scale: 1,
          scale: 0.02

        } 
        var soccer_marker = new google.maps.Marker({
          position: sj_earthquakes,
          map: map,
          icon: soccer_icon
        });



        //construct polyline
        
        
      }