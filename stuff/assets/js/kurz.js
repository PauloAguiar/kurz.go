var MONTHNAMES = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");


function formatDate(d){
    return d.getDate() + " " + MONTHNAMES[d.getMonth()] + " "
        + d.getFullYear();
}



function formatURL(url){
    var clean = url.replace("http://", "");
    clean = clean.replace("https://", "");
    clean = clean.substr(0, 52);
    return "<a href=\"" + url +"\">" + clean + "</a>";
}

function loadKurls(howmany){
    $.getJSON("/latest/" + howmany, function( obj ) { 
        var allUrls = obj["urls"];
        for (var i = 0; i < allUrls.length; i++) {
            var kurl = allUrls[i];

            var d = new Date(kurl["CreationDate"] / 1000000);
            $("table").append( 
                "<tr>" 
                + "<td>" + formatURL(kurl["ShortUrl"]) + "</td>"
                + "<td>" + formatURL(kurl["LongUrl"]) + "</td>"
                + "<td>" + formatDate(d) + "</td>"
                + "<td>" + kurl["Clicks"] + "</td>"
                + "</tr>");
        } 
    });
}

