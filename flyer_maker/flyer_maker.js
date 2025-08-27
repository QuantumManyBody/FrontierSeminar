// Usage: node poster_maker.js <speaker_id> <food>
const jsdom = require("jsdom");
const args = process.argv.slice(2);
const speaker_id = args[0]
// const speaker_id = 'jmandell'

const fs = require("fs");

const frontier_webpage = fs.readFileSync("../index.html", "utf8");


const dom = new jsdom.JSDOM(frontier_webpage);

speaker_row = dom.window.document.getElementById(speaker_id)

date = speaker_row.getElementsByClassName("speaker-date")[0].innerHTML
title = speaker_row.getElementsByClassName("speaker-title")[0].innerHTML
abstract = speaker_row.getElementsByClassName("speaker-abstract")[0].innerHTML
bio = speaker_row.getElementsByClassName("speaker-bio")[0].innerHTML
speaker_name = speaker_row.getElementsByClassName("speaker-name")[0].innerHTML
affiliation = speaker_row.getElementsByClassName("affiliation")[0].innerHTML
food = speaker_row.getElementsByClassName("speaker-food")[0].innerHTML
flyer = fs.readFileSync("./template.html", "utf8");

const flyer_dom = new jsdom.JSDOM(flyer);


flyer_dom.window.document.getElementById("date").innerHTML = date
flyer_dom.window.document.getElementById("title").innerHTML = title
flyer_dom.window.document.getElementById("speaker-name").innerHTML = speaker_name
flyer_dom.window.document.getElementById("abstract").innerHTML = abstract
flyer_dom.window.document.getElementById("affiliation").innerHTML = affiliation
if (food !== undefined) {
    flyer_dom.window.document.getElementById("food").innerHTML = food
}



if (bio.trim().length == 0) {
     flyer_dom.window.document.getElementById("bio-block").remove();   
} else {
     flyer_dom.window.document.getElementById("bio").innerHTML = bio;
}

picture = flyer_dom.window.document.createElement('img');
picture.src = `speaker_photos/${speaker_id}.jpeg`;
picture.id = "speaker-photo";
picture.alt = `photo of ${speaker_name}`;
// picture.style = `clip-path: rect(${clipping})`;
flyer_dom.window.document.getElementById("speaker-block").prepend(picture)

rendered_flyer = flyer_dom.serialize()

fs.writeFileSync(`${speaker_id}.html`, rendered_flyer, {encoding: "utf8", flag: "w+"});
