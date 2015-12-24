{
    "title": "BlacklistChecker",
    "by": "MrSherlockHolmes",
    "about": "A blacklist checker [NSFW!]",
    "official": false,
    "blocks": [
        ["b", "is %s safe?", "var string = arg1; string = string.replace(whitelist, ""); return !(string.match(blacklist));"]
        ["w", "update lists", "var simpleAjaxGet = function(url, done) { var xml = new XMLHttpRequest(); xml.open(\"GET\", url); xml.send(); xml.onload = function() { done(xml); } }   simpleAjaxGet(\"https://raw.githubusercontent.com/MrSherlockHolmes/extraBlackList/master/blackList.txt\", function(xml) { var lines = xml.responseText.split(\'\\n\'); blacklist = lines[20]; whitelist = lines[24]; blacklist = new RegExp(blacklist.substring(1,blacklist.length-4), \"igm\"); whitelist = new RegExp(whitelist.substring(1,whitelist.length-4), \"igm\"); });"]
    ],
    "menus": {},
    "scripts": [],
    "onload": "var blacklist, whitelist;",
    "ondie": "",
    "ontick": ""
}
