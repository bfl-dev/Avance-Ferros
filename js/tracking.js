function initMap() {
    var mapCenter = {lat: -38.673181, lng: -72.501673}
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11.4,
      center: mapCenter
    });

    var trainStations = [
      {lat: -38.736883, lng: -72.579150},
      {lat: -38.635708, lng: -72.453521},
    ];
    
    var stationIcon = {
        url: 'assets/station.png',
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(25, 50)
    };

    var trainIcon = {
        url: 'assets/train.png',
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(25, 50)
    }

    trainStations.forEach(function(station) {
      new google.maps.Marker({
        position: station,
        map: map,
        title: 'Train Station',
        icon: stationIcon
      });
    });

    new google.maps.Marker({
        position: mapCenter,
        map: map,
        title: 'you',
        icon: trainIcon
    })
  }