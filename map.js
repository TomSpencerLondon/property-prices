mapboxgl.accessToken = 'pk.eyJ1IjoidG9tc3BlbmNlcjE5NzgiLCJhIjoiY2pjMHF2NWNpNDN5NjJ3bnRiY2Nqd2Z0eiJ9.Bl9JVO3zPlijka9o9Ub-Mw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [0, 52], // starting position
  zoom: 8 // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


map.on('load', function() {
  var imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png"

  map.loadImage(imageUrl, function(error, image) {
      if (error) throw error;
      map.addImage('cat', image);
      map.addLayer({
          "id": "points",
          "type": "symbol",
          "source": {
              "type": "geojson",
              "data": {
                  "type": "FeatureCollection",
                  "features": [{
                      "type": "Feature",
                      "geometry": {
                          "type": "Point",
                          "coordinates": [0, 0]
                      }
                  }]
              }
          },
          "layout": {
              "icon-image": "cat",
              "icon-size": 0.25
          }
      });
  });
});
