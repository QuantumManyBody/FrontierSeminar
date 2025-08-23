// Usage: node poster_maker.js <speaker_id> <food>

const jsdom = require("jsdom");
const args = process.argv.slice(2);
const speaker_id = args[0]

const fs = require("fs");

const frontier_webpage = fs.readFileSync("../index.html", "utf8");


const dom = new jsdom.JSDOM(frontier_webpage);

speaker_row = dom.window.document.getElementById(speaker_id).querySelectorAll("*");

date = speaker_row[0].innerHTML
title = speaker_row[3].innerHTML
abstract = speaker_row[4].innerHTML
bio = speaker_row[5].innerHTML
speaker_name = speaker_row[7].innerHTML
affiliation = speaker_row[8].innerHTML.replace("/", "")
flyer = fs.readFileSync("./template.html", "utf8");

const flyer_dom = new jsdom.JSDOM(flyer);


flyer_dom.window.document.getElementById("date").innerHTML = date
flyer_dom.window.document.getElementById("title").innerHTML = title
flyer_dom.window.document.getElementById("speaker-name").innerHTML = speaker_name
flyer_dom.window.document.getElementById("abstract").innerHTML = abstract
flyer_dom.window.document.getElementById("affiliation").innerHTML = affiliation
flyer_dom.window.document.getElementById("food").innerHTML = args[1] 

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
flyer_dom.window.document.getElementById("speaker-image").prepend(picture)

rendered_flyer = flyer_dom.serialize()

fs.writeFileSync(`${speaker_id}.html`, rendered_flyer, {encoding: "utf8", flag: "w+"});
