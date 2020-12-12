$(document).ready(function(){
  // createCssLinks("https://parameshdrm.github.io/Chatbot/css/bootstrap.min.css");
  // createCssLinks("https://parameshdrm.github.io/Chatbot/css/font-awesome.min.css");
  // createCssLinks("https://parameshdrm.github.io/Chatbot/css/imagehover.min.css");
  // createCssLinks("https://parameshdrm.github.io/Chatbot/css/style.css");

  // createJSlinks("https://parameshdrm.github.io/Chatbot/js/moment.js");
  // createJSlinks("https://parameshdrm.github.io/Chatbot/js/moment.min.js");
  // createCssLinks("https://parameshdrm.github.io/Chatbot/css/bootstrap.min.css");
  // createCssLinks("https://parameshdrm.github.io/Chatbot/css/bootstrap.min.css");

  console.log("hello this is for testing");
//   window.onload = function(){
    var messageBox = document.createElement("div");
    // messageBox.id= "chatBotDiv";
    messageBox.innerHTML = '<div class="container"> <!-- Modal --> <div class="modal fade" id="myModal" role="dialog"> <div class="modal-dialog modal-sm"> <div class="modal-content"> <div class="modal-header"> <h4 class="modal-title">Rate Our Buzz</h4> </div> <div class="modal-body" style="height:60px;"> <div class="rate"> <input type="radio" id="star5" name="rate" value="5" /> <label for="star5" title="Excellent"></label> <input type="radio" id="star4" name="rate" value="4" /> <label for="star4" title="Very Good"></label> <input type="radio" id="star3" name="rate" value="3" /> <label for="star3" title="Good"></label> <input type="radio" id="star2" name="rate" value="2" /> <label for="star2" title="Average"></label> <input type="radio" id="star1" name="rate" value="1" /> <label for="star1" title="Below Average"></label> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-info" data-dismiss="modal">Later</button> <button type="button" class="btn btn-success" data-toggle="modal" data-target="#ThankYouModal" data-dismiss="modal">Submit</button> </div> </div> </div> </div> </div>';
    document.body.appendChild(messageBox);


    var messageBox1 = document.createElement("div");
    // messageBox1.id= "chatBotDiv12";
    messageBox1.innerHTML ='<div class="container"> <div class="modal fade" id="ThankYouModal" role="dialog"> <div class="modal-dialog modal-sm"> <div class="modal-content"> <div class="modal-header"> <h4 class="modal-title">Rate Our Buzz</h4> </div> <div class="modal-body"> <p><span>&#10003;</span> Thank You for using BUZZ Services!</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-success" data-dismiss="modal">OK</button> </div> </div> </div> </div> </div> <div ng-app="myApp" id="chatbot"> <div ng-controller="myController"> <div class="chatBox-show boxHeader" ng-show="displayChatBox"> <div class="header"> <div class="dropdown"> <button class="dropbtn"><i class="fa fa-bars menu" aria-hidden="true"></i></button> <div class="dropdown-content"> <li ng-click="getService()">Services</li> <li ng-click="redirectToBookingUrl()">Schedule A Call</li> <li ng-click="getVideo()">DBS Video</li> <li ng-click="getContact()" href="https://dobizsystems.com/contact/" >Contact Us</li> </div> </div> <span class="heading">DBS BUZZ</span> <i class="fa fa-window-minimize" ng-click="closeChatBox()"></i> </div> <div> <div id="messageBody"> <div class="box"> <i class="fab fa-reddit-alien bot-icon ng-scope"></i> <div class="container"> <div id="divMessages">Hi  <img src="https://dobizsystems.com/chatbot/img/hi.png" width="18px"/> Welcome to DBS BUZZ, select the topic or type your question.</div> </div> </div> </div> <div id="loadingDiv"> <img src="https://dobizsystems.com/chatbot/img/rb.gif" class="ajax-loader"/> </div> </div> <div class="clearChat" data-toggle="modal" data-target="#myModal"  ng-click="clearChat()"> <span class="clearText">Clear Chat</span> </div> <div class="type_msg"> <div class="input_msg_write"> <input type="text" class="write_msg" placeholder="Type your message..." ng-model="message.content" my-enter="sendMessage()"> <span class="msg_send_btn" aria-hidden="true" ng-click="sendMessage()"><img src="https://dobizsystems.com/chatbot/img/send-button-hover.png" width="24px"></span> </div> </div> </div> <div> <span class="open-button" ng-show="chatImage"> <div class="bot-msg"> Hi, I am here to help you! </div> <img src="https://dobizsystems.com/chatbot/img/Messages-icon.png" width="64px" ng-click="openForm()"> </span> </div> </div> </div>'
    document.body.appendChild(messageBox1);
// };


  
});
