// by Hung1001
const img = /\b(http(?:s)?:\/\/\S+(?:png|jpe?g|gif|bmp|svg|tif))\b/gi,
      ytb = /(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/gi;
var cmts = document.getElementsByClassName("comment-content"); // important
for (var i = 0; i < cmts.length; i++) {
    var a = cmts[i].innerHTML;
    if (img.test(a)) {
        var c = a.match(img);
        for (var j = 0; j < c.length; j++) a = a.replace(c[j], "<img src='" + c[j] + "'/>");
    }
    if (ytb.test(a)) {
        var d = a.match(ytb);
        for (var k = 0; k < d.length; k++) {
            var id = d[k].split("=")[1];
            if (typeof id !== "undefined" && id.length === 11) {
                a = a.replace(d[k], "<div class='embed'><iframe src='https://www.youtube.com/embed/" + id + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen=''></iframe></div>");
            }

        }
    }
    cmts[i].innerHTML = a;
}