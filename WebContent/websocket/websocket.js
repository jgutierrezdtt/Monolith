
var socket = new WebSocket("ws://localhost:8080/Monolith_Dev/insightSocket?insightId=insightUUID");
socket.onmessage = onMessage;

function onMessage(event) {
    var pixelResponse = JSON.parse(event.data);
    displayPixelResponse(pixelResponse);
}

function displayPixelResponse(pixelResponse) {
    var content = document.getElementById("content");
    var div = document.createElement("div");

    var heading = document.createElement("h3");
    heading.textContent = "New Pixel";
    var paragraph = document.createElement("p");
    paragraph.textContent = JSON.stringify(pixelResponse);
    div.appendChild(heading);
    div.appendChild(paragraph);
    content.appendChild(div);
}

function sendSocket() {
	var insightId = document.getElementById("insightId").value;
	var pixel = document.getElementById("pixel").value;
    var message = { 
    		"insightId" : insightId,
    		"pixel" : pixel
    };
    socket.send(JSON.stringify(message));
}
