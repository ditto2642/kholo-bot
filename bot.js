/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// import the discord.js module
const Discord = require('discord.js');

// create an instance of a Discord Client, and call it bot
const bot = new Discord.Client();

// the token of your bot - https://discordapp.com/developers/applications/me
const token = '';

//var imgurGallery = require('imgurGallery');
const imgurSearch = require('imgur-search');
//var imgurServiceErrors = require('imgurServiceErrors');
const Window = require('window');

const window = new Window();

const div = window.document.createElement('div');
// HTMLDivElement

div instanceof window.HTMLElement
// true
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

});
var $ = require("jquery")(window);
// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
  console.log('I am ready!');
});

// create an event listener for messages
bot.on('message', message => {
 messageHandle(message);
});

function messageHandle(message) {
var content = message.content.toLowerCase();

  // if the message is "ping",
  if (content.startsWith('ping') || content.startsWith('nut')) {
    // send "pong" to the same channel.
    message.channel.sendMessage('pong');
  }
if (content.startsWith('>img')){

   content = content.substring(">img ".length);
//message.channel.sendMessage(content);
 queryURL = "https://api.imgur.com/3/gallery/search/?q=" + content;


    $.ajax({
      url: queryURL,
      type: 'GET',
      dataType: 'json',
      headers: {
      Authorization: 'Client-ID ' + '9720b6c75210077',
      },
      success: function(data) {

        message.channel.sendMessage(data.data[Math.floor(Math.random() * 10)].link);

      },
      error: function() { console.log("There was an error."); },});

   }

}
bot.login(token);
