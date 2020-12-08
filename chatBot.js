$(document).ready(function(){
  // import required css
  var chatBotCssLink = document.createElement("LINK");
  chatBotCssLink.setAttribute("rel", "stylesheet");
  chatBotCssLink.setAttribute("type", "text/css");
  chatBotCssLink.setAttribute("href", "https://raghavendra-kotipalli.github.io/HeyRam/chatBot.css");
  document.head.appendChild(chatBotCssLink);


	var messageBox = document.createElement("div");
	messageBox.id= "chatBotDiv";
	messageBox.innerHTML = '<div id ="botIcon"> <img src="https://raghavendra-kotipalli.github.io/HeyRam/images/chatBotIcon.jpeg" height="64px" width="64px"></img> </div> <div id="botBox"> <div class="botHead"> <span>DBS buzz</span> <img src="https://raghavendra-kotipalli.github.io/HeyRam/images/close.png" class="closeBtn"> </div> <div id="messageBody"><span class="userReqData"> Hello</span></div> <div class="requestBody"> <div class="userInputDiv"> <input type="text" placeholder="Search.." name="userRequest" id="userRequest" autocomplete="off"> <button type="submit" id="sendUserReq"> <img src="https://raghavendra-kotipalli.github.io/HeyRam/images/sendBtn.png" class="sendBtn" /> </button> </div> </div> </div>';
	document.body.appendChild(messageBox);

	$("#sendUserReq").click(function(){
    var userInputData = $("#userRequest").val();
    if(userInputData.trim() != "" && userInputData != undefined){
      var reqMessageContent = $.parseHTML('<span class="userReqData">'+userInputData+'</span>');
      $("#messageBody").append(reqMessageContent);
      $("#userRequest").val("");
      scrollBottom();
      $.ajax({
        beforeSend: function (xhr) {
          xhr.setRequestHeader ("Authorization", "Bearer DYS7PQHWK2ATI2YMUHKRRHQ2CTQ4CXHH");
        },
        url: "https://api.wit.ai/message?v=20200913&q="+reqMessageContent,  
        success: function(result) { 
            console.log(result);
            var responseMessageContent = $.parseHTML('<span class="userReqData">'+result.text+'</span>');
            $("#messageBody").append(responseMessageContent);
            scrollBottom();
        },
        error: function(error){
          console.log("Error occured while calling ajax call.");
        }
      });
    }else{
      console.log("Please enter something");
    }
  });

  $("#botIcon").click(function(){
    console.log("clicking");
    $("#botIcon").css("display", "none");
    $("#botBox").css("display", "block");
  });

  $(".closeBtn").click(function(){
    $("#botIcon").css("display", "block");
    $("#botBox").css("display", "none");
  });
});

function loadJSAsync(url) {
	console.log("script loading");
  let script = document.createElement('script');
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
}

function scrollBottom(){
  var box = document.getElementById('messageBody');
  box.scrollTop = box.scrollHeight;
}
