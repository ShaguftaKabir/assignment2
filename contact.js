function contact(){
    var name = document.getElementById("nameBox").value;
    var email = document.getElementById("userEmail").value;
    var message = document.getElementById("userMessage").value;
    var rate = parseFloat(document.getElementById("rateBox").value);

    var msg;

    if(rate>=10){
        msg=`Hey ${name}! You rated their last match <b>BEST</b>. We will deliver your rating and message "${message}" to our Bangladesh Cricket Team and we'll email you their response in this email- ${email}`;
    }
    else if(rate>=9){
        msg=`Hey ${name}! You rated their last match <b>Very Good</b>. We will deliver your rating and message "${message}" to our Bangladesh Cricket Team and we'll email you their response in this email- ${email}`;
    }
    else if(rate>=8){
        msg=`Hey ${name}! You rated their last match <b>Good</b>. We will deliver your rating and message "${message}" to our Bangladesh Cricket Team and we'll email you their response in this email- ${email}`;
    }
    else if(rate>=7){
        msg=`Hey ${name}! You rated their last match <b>Alright</b>. We will deliver your rating and message "${message}" to our Bangladesh Cricket Team and we'll email you their response in this email- ${email}`;
    }
    else if(rate>=6){
        msg=`Hey ${name}! You rated their last match <b>Below average</b>. We will deliver your rating and message "${message}" to our Bangladesh Cricket Team and we'll email you their response in this email- ${email}`;
    }
    else{
        msg=`Hey ${name}! You rated their last match <b>Bad</b>. We will deliver your rating and message "${message}" to our Bangladesh Cricket Team and we'll email you their response in this email- ${email}`;
    }

    document.getElementById("content").innerHTML=msg;
}