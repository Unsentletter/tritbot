var Botkit = require('botkit');
var os = require('os');

var controller = Botkit.slackbot({
  debug: true
});

var bot = controller.spawn({
  token: "xoxb-85888700070-C0D1EjGlTNMfOeooWZRD3v6t"
}).startRTM();

controller.on('direct_mention', function(bot, message) {
  bot.reply(message, "Hey there! Im working out how to make a slackbot. To get to the good bits there are a few command you'll need. If you want to hear about my work experience type 'experience'. If you want to hear about my education type 'eduction'. If you want my contact information type 'contact'.");
});

controller.hears(['experience', 'previous employment'],['ambient'], function(bot,message){
  return bot.reply(message, "I have all kinds of experience at doing cool stuff.  I once ate two whole pizzas.");
});

controller.hears(['education'],['ambient'], function(bot,message){
  return bot.reply(message, "Im really smart.  I have so many words.  I have the best words.  Even better than Trumpy");
});

controller.hears(['contact'],['ambient'], function(bot,message){
  return bot.reply(message, "I have all kinds of contacts.  Maybe not the best contacts, but I have lots of them");
});
