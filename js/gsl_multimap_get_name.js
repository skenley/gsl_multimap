(function ($) {
//  window.onload = function() {
//    // Get location from GET
//    url = location.href;
//    var locationName = url.substring(url.indexOf('?'));
//    locationName = locationName.replace('?', '');
//
//
////console.log("L= "+locationName);
//
//    // Create lat long from locationName (or postal code)
//    geocoder = new google.maps.Geocoder();
//    codeAddress(locationName);
//    
//    // & send it to input field
//    $('#google-store-locator-map-container .location-search input').val(locationName);
//
//
//    return false;
//  };


  function codeAddress(address) {
    geocoder.geocode( { 'address': address}, function(results, status) {


      if (status == google.maps.GeocoderStatus.OK) {
        var lat = results[0].geometry.location.lat()
        var lng = results[0].geometry.location.lng()


        var position = [lat, lng];


        positionSuccess(position);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }


  /**
   * Success callback if we're able to obtain lat/lng coordinates for a user.
   */
  function positionSuccess(position) {


    // Centre the map on the new location
    var latLng = new google.maps.LatLng(position[0], position[1]);


    Drupal.GSL.currentMap.panTo(latLng);


    // Get zoom level from settings
    var zoom = Drupal.settings.gsl[Drupal.GSL.currentMap.mapid].mapzoom;


    Drupal.GSL.currentMap.setZoom(zoom);


    var marker = new google.maps.Marker({
      map: Drupal.GSL.currentMap,
      position: latLng,
      title: 'You are here!',
      // Use Google's default blue marker.
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });
  }


  
})(jQuery);
