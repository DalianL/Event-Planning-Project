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
        var eventWTrigger = document.querySelector("#FootNC");

        backButton.addEventListener('touchstart', this.onTouch, false);

        eventWTrigger.addEventListener('touchstart', this.onTouch, false);

        // For debugging purposes

        backButton.addEventListener('click', this.onTouch, false);

        eventWTrigger.addEventListener('click', this.onTouch, false);

    },

    onTouch: function(e) {
        if (document.querySelector("#eventdetails").style.display == "none") {
            document.querySelector("#calendar").setAttribute('style', 'display:none;');
            document.querySelector("#eventdetails").setAttribute('style', 'display:block;');
            if (e.target.id == "Alfonso") {
                event1.displayEvent();
            } else if (e.target.id == "FootNC") {
                eventwanted.displayEvent();
            }
            
        } else {
            document.querySelector("#eventdetails").setAttribute('style', 'display:none;');
            document.querySelector("#calendar").setAttribute('style', 'display:block;');
            document.querySelector(".infos").innerHTML = "";
        }
    }

};
