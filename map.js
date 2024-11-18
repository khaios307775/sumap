function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 }, 
        zoom: 8,
    });

    const input = document.getElementById("search");
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo("bounds", map);

    autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }
        map.setCenter(place.geometry.location);
        map.setZoom(15);
        new google.maps.Marker({
            position: place.geometry.location,
            map: map,
        });
    });
}

const script = document.createElement("script");
script.src = i need an api key;
script.async = true;
document.head.appendChild(script);