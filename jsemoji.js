// Blogger Comments with Emoji by Hung1001
var listFbIcon=[{icon:":)",class:"icon-1"},{icon:":D",class:"icon-2"},{icon:"=)",class:"icon-3"},{icon:"&gt;&lt;",class:"icon-4"},{icon:":p",class:"icon-5"},{icon:"^^!",class:"icon-6"},{icon:":*",class:"icon-7"},{icon:"-*)",class:"icon-8"},{icon:"=]]z",class:"icon-9"},{icon:":B",class:"icon-10"},{icon:":x",class:"icon-11"},{icon:":(",class:"icon-12"},{icon:";(",class:"icon-13"},{icon:":~(",class:"icon-14"},{icon:"&lt;:-P",class:"icon-15"},{icon:":like",class:"icon-16"},{icon:"&lt;3",class:"icon-17"},{icon:":rose",class:"icon-18"},{icon:"&gt;3",class:"icon-19"},{icon:":bomb",class:"icon-20"}];
 
for (var cmt = document.getElementsByClassName("list-emoji")[0], j = 0; j < listFbIcon.length; j++) cmt.innerHTML += "<div class='item'><span class='emoji-cmts " + listFbIcon[j].class + "' title='Click To Copy'></span><span class='short-code'>" + listFbIcon[j].icon + "</span></div>";

for (var cpy = document.querySelectorAll(".list-emoji .item .emoji-cmts"), i = 0; i < cpy.length; i++) cpy[i].addEventListener("click", function(e) {
    var t = document.getElementsByTagName("body")[0],
        o = document.createElement("textarea");
    o.setAttribute("id", "txt-cpy"), o.style.position = "absolute", o.style.left = "-9999em", o.value = this.nextSibling.textContent, t.appendChild(o), document.getElementById("txt-cpy").select();
    var c = document.createElement("div");
    c.setAttribute("class", "msg-alert");
    try {
        var i = document.execCommand("copy");
        c.innerHTML = i ? "Successfully copied to clipboard !" : "Fail to copy to clipboard !", t.appendChild(c)
    } catch (e) {
        console.log("Oops, unable to copy")
    }
    t.removeChild(o), setTimeout(function() {
        t.removeChild(c)
    }, 2e3)
});