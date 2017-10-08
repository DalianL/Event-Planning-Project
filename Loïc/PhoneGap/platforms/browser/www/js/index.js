/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

let self = this;

var app = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        // var event1Trigger = document.querySelector("#Alfonso");
        // event1Trigger.addEventListener('touchstart', this.onTouch, false);
        // event1Trigger.addEventListener('click', this.onTouch, false);

        var backButton = document.querySelector("#back");
        var backButton2 = document.querySelector("#back2");
        var eventWTrigger = document.querySelector("#FootNC");
        var geoloc = document.querySelector(".localize");

        backButton.addEventListener('touchstart', this.onTouch, false);

        backButton2.addEventListener('touchstart', this.onTouch, false);

        eventWTrigger.addEventListener('touchstart', this.onTouch, false);

        geoloc.addEventListener('touchstart', this.onTouch, false);

        // For debugging purposes

        backButton.addEventListener('click', this.onTouch, false);

        backButton2.addEventListener('click', this.onTouch, false);

        eventWTrigger.addEventListener('click', this.onTouch, false);

        geoloc.addEventListener('click', this.onTouch, false);

    },

    onTouch: function(e) {
        var edetails = document.querySelector("#eventdetails").style.display;
        var emap = document.querySelector("#eventmap").style.display;
        var cal = document.querySelector("#calendar").style.display;

        if (edetails == emap) {
            document.querySelector("#calendar").setAttribute('style', 'display:none;');
            document.querySelector("#eventdetails").setAttribute('style', 'display:block;');
            if (e.target.id == "Alfonso") {
                event1.displayEvent();
            } else if (e.target.id == "FootNC") {
                eventwanted.displayEvent();
            }
        } else if (cal == emap) {
            if (e.target.id == "back") {
                document.querySelector("#eventdetails").setAttribute('style', 'display:none;');
                document.querySelector("#calendar").setAttribute('style', 'display:block;');
                document.querySelector(".infos").innerHTML = "";
            } else {
                document.querySelector("#eventdetails").setAttribute('style', 'display:none;');
                document.querySelector("#eventmap").setAttribute('style', 'display:block;'); 
                self.app.localize(e);
            }
        } else {
            document.querySelector("#eventmap").setAttribute('style', 'display:none;');
            document.querySelector("#calendar").setAttribute('style', 'display:block;');
            document.querySelector(".infos").innerHTML = "";
        }
    },

    localize: function(e) {
        var titlezone = document.querySelector("#loctitle");
        titlezone.innerHTML = "Event location";
        
        // onSuccess Callback
        // This method accepts a Position object, which contains the
        // current GPS coordinates
        
        var onSuccess = function(position) {
            self.app.initMap();
        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },

    initMap: function() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 44, lng: 7},
            zoom: 7
        });
        
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var geocoder = new google.maps.Geocoder();

        var departurePos = new Array();
        var arrivalPos = new Array();

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                departurePos.push(position.coords.latitude);
                departurePos.push(position.coords.longitude);
                lock = false;
                console.log("Departure found")
            });
        }  

        geocoder.geocode({'address': "10 Bd Comte de Falicon 06100 Nice"}, function(results, status) {
            if (status === 'OK') {
                //resultsMap.setCenter(results[0].geometry.location);
                // var marker = new google.maps.Marker({
                //     map: resultsMap,
                //     position: results[0].geometry.location
                // });
                arrivalPos.push(results[0].geometry.location.lat());
                arrivalPos.push(results[0].geometry.location.lng());
                console.log("Arrival found")
            }
        });

        setTimeout(function(t) {
            directionsDisplay.setMap(map);

            directionsService.route({
                origin: {lat: departurePos[0], lng: departurePos[1]},  
                destination: {lat: arrivalPos[0], lng: arrivalPos[1]},
                // Note that Javascript allows us to access the constant
                // using square brackets and a string value as its
                // "property."
                travelMode: google.maps.TravelMode["DRIVING"]
            }, function(response, status) {
                if (status == 'OK') {
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }, 1000);
        
    }

};
