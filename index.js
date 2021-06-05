"use strict";

document.addEventListener('DOMContentLoaded');
var Snoowrap = require('snoowrap');

const r = new Snoowrap({
    userAgent: 'rs app',
    clientId: 'vmeelE_3jUZB5g',
    clientSecret: 'NPxQjbZokMflNAj_-EwE8u9Ne4DMWA',
    refreshToken: '169481264158-AwWQt9DNSMCnw9qZ3TmhPDMXusVP_A'
});

// create variables for values of subreddit name and post count//
var postCount = document.getElementById("posts");
var userReddit = document.getElementById('subred');
var i;

const subreddit = r.getSubreddit('userReddit');
const top = subreddit.getTop({time: 'day', limit: 'postCount'});

// an array that will hold the title and a url link for each subreddit posts//
let data = [];


top.forEach((post) => {
    data.push({
        tetx: post.title,
        link: post.url
    })
});

// create and display new div elements with subredit data inside the div//
function displayLoop()
{
    for (i = 0; i < p; i++)
{
    var div = doucment.createElement('div');
    body.appendChild(div);
    div.id = 'rcontent';
    div.innerHTML = 'data[i]';
    var newLine = document.createElement("br");
    body.appendChild(neLine);
}
};
