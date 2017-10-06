class Event {
	constructor(title, type, org, pub, loc, date, time, max, tags) {
		this.title = title;
		this.type = type;
		this.org = org;
		this.pub = pub;
		this.loc = loc;
		this.date = date;
		this.time = time;
		this.max = max;
		this.tags = tags;
	}

	displayEvent() {
		var ul = document.querySelector(".infos");

		var li = document.createElement("li");
		li.innerHTML = "<b>Type:</b> " + this.type;
		li.setAttribute("class", "info");
		ul.appendChild(li);

		li = document.createElement("li");
		li.innerHTML = "<b>Organisateur:</b> " + this.org;
		li.setAttribute("class", "info");
		ul.appendChild(li);

		li = document.createElement("li");
		li.innerHTML = "<b>Public:</b> " + this.pub;
		li.setAttribute("class", "info");
		ul.appendChild(li);

		li = document.createElement("li");
		li.innerHTML = "<b>Lieu:</b> " + this.loc;
		li.setAttribute("class", "info");
		ul.appendChild(li);

		li = document.createElement("li");
		li.innerHTML = "<b>Date:</b> " + this.date;
		li.setAttribute("class", "info");
		ul.appendChild(li);

		li = document.createElement("li");
		li.innerHTML = "<b>Horaires:</b> " + this.time;
		li.setAttribute("class", "info");
		ul.appendChild(li);

		li = document.createElement("li");
		li.innerHTML = "<b>Nombre de places:</b> " + this.max;
		li.setAttribute("class", "info");
		ul.appendChild(li);

		var str = "";
		this.tags.forEach(function (j) {
				str = str + j + " ";	
		});
		li = document.createElement("li");
		li.innerHTML = "<b>Tags:</b> " + str;
		li.setAttribute("class", "info");
		ul.appendChild(li);

	}

}

var event3 = new Event (
	"Alfonso",
	"Théatre", 
	"Antony Ro", 
	"oui", 
	"2 Montée Auguste Kernel 06300 Nice", 
	"29/10/2017", 
	"à 20h", 
	"100", 
	["#Théatre", "#Alfonso"]
);