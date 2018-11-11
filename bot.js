/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

const { Client, RichEmbed } = require('discord.js');

var Commands = "The following are the commands.\n\n**Group Rank Permssion Commands**\n.promote <Username> | Promotes the specified user in the group by 1 rank.\n.demote <Username> | Demotes the specified user in the group by 1 rank.\n\n**Group Permission Commands**\n.announce <Message> | Announces the specified message on the group Shout.\n.hostinterview | Posts the interview hosting message in discord and on the group shout. \n.cmds | Displays a list of commands."


// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NTEwODY5NDEzMjgxNjYwOTMz.DsiogA.jDlxHQ6VHqxiI8We-1KjG7ctBiM';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

const rbx = require('roblox-js');

rbx.login('ScoopiezRank', 'madebyorange')
.then(function () {
  console.log('Logged in');



client.on('message', message => {
  // If the message is "ping"
  var words = message.content.split(' ')
  if (words[0] === '.announce') {
    
  	 if(message.member.roles.find("name", "GroupPermissions") || message.member.roles.find("name", "Developer")){
     var MessageToShout = message.content.substr(message.content.indexOf(" ") + 1);
	rbx.shout(3211677,MessageToShout);
	const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('Successfully Shouted')
      // Set the color of the embed
      .setColor(0x00FF80)
      // Set the main content of the embed
      .setDescription('Your message was successfully shouted in the group!');
    // Send the embed to the same channel as the message
    	message.channel.send(embed);//Rest of your code
	const Log = new RichEmbed()
      // Set the title of the field
      .setTitle('Shouted')
      // Set the color of the embed
      .setColor(0x00FF80)
      // Set the main content of the embed
      .setDescription(message.author + " Shouted in the group.");

    	client.channels.get("510892459140710409").send(Log)
    }
    else{

    	const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('No Permission')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('You do not have permission to use that command!');
    // Send the embed to the same channel as the message
    	message.channel.send(embed);//Rest of your code

    }


    // 

    
  }
});
});






client.on('message', message => {
  // If the message is "ping"
  var words = message.content.split(' ')
  if (words[0] === '.hostinterview') {
    
  	 if(message.member.roles.find("name", "GroupPermissions") || message.member.roles.find("name", "Developer")){
     var MessageToShout = "[INTERVIEWS] Come down to the Interview Center for the chance to become a trainee! This session will start in 30 minutes."
	rbx.shout(3211677,MessageToShout);

	const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('Success!')
      // Set the color of the embed
      .setColor(0x00FF80)
      // Set the main content of the embed
      .setDescription('The interview started message was shouted in the group and on the discord.');
    // Send the embed to the same channel as the message
    	message.channel.send(embed);//Rest of your code

     const HostMessage = new RichEmbed()
      // Set the title of the field
      .setTitle('Interviews')
      // Set the color of the embed
      .setColor(0x4dc3ff)
      // Set the main content of the embed
      .setDescription(MessageToShout);
    // Send the embed to the same channel as the message
    client.channels.get("498738340422483971").send("@here")
    client.channels.get("498738340422483971").send(HostMessage)
    }

    else{

    	const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('No Permission')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('You do not have permission to use that command!');
    // Send the embed to the same channel as the message
    	message.channel.send(embed);//Rest of your code

    }


    // 

    
  }
});






client.on('message', async (message) => {
  // If the message is "ping"
  var words = message.content.split(' ')
  if (words[0] === '.promote') {
    
  	 if(message.member.roles.find("name", "RankPermission") || message.member.roles.find("name", "Developer")){
  	 	var User = words[1]
  	 	var UserId = await rbx.getIdFromUsername(User)
  	 	console.log(UserId)
	rbx.promote(3211677,UserId)
	const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('Success!')
      // Set the color of the embed
      .setColor(0x00FF80)
      // Set the main content of the embed
      .setDescription('Yay! '+User+ ' was just promoted!');
    // Send the embed to the same channel as the message
    	message.channel.send(embed);//Rest of your code
    	    const Msg = new RichEmbed()
      // Set the title of the field
      .setTitle('Promotion')
      // Set the color of the embed
      .setColor(0x00FF80)
      // Set the main content of the embed
      .setDescription(User + ' was promoted by '+ message.author);
    	client.channels.get("510892437216952328").send(Msg)
    }

    else{

    	const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('No Permission')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('You do not have permission to use that command!');
    // Send the embed to the same channel as the message
    	message.channel.send(embed);//Rest of your code

    }


    // 

    
  }
});







client.on('message', async (message) => {
  // If the message is "ping"
  var words = message.content.split(' ')
  if (words[0] === '.demote') {
    
  	 if(message.member.roles.find("name", "RankPermission") || message.member.roles.find("name", "Developer")){
  	 	var User = words[1]
  	 	var UserId = await rbx.getIdFromUsername(User)
  	 	console.log(UserId)
	rbx.demote(3211677,UserId)
	const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('Success!')
      // Set the color of the embed
      .setColor(0x00FF80)
      // Set the main content of the embed
      .setDescription('Boo hoo '+User+ ' had to be demoted. :frowning2:');
    // Send the embed to the same channel as the message
    	message.channel.send(embed);//Rest of your code
    const Msg = new RichEmbed()
      // Set the title of the field
      .setTitle('Demotion')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription(User + ' was demoted by '+ message.author);
    	client.channels.get("510892437216952328").send(Msg)
    }

    else{

    	const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('No Permission')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('You do not have permission to use that command!');
    // Send the embed to the same channel as the message
    	message.channel.send(embed);//Rest of your code

    }


    // 

    
  }
});









client.on('message', message => {
  // If the message is "ping"
  var words = message.content.split(' ')
  if (words[0] === '.cmds') {
  	 if(message.member.roles.find("name", "GroupPermissions") || message.member.roles.find("name", "Developer")){
        const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('Commands')
      // Set the color of the embed
      .setColor(0x4dc3ff)
      // Set the main content of the embed
      .setDescription(Commands);
    // Send the embed to the same channel as the message
    	message.channel.send(embed);//Rest of your code
    }
    else{

    	const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('No Permission')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('You do not have permission to use that command!');
    // Send the embed to the same channel as the message
    	message.channel.send(embed);//Rest of your code

    }
    
  }
});





client.on('message', message => {
  // If the message is "ping"
  var words = message.content.split(' ')
  if (words[0] === '.discordshout') {
  	 if(message.member.roles.find("name", "GroupPermissions") || message.member.roles.find("name", "Developer")){
  	 	var Title = words[1]
  	 	var UnsplitContent = message.content.substr(message.content.indexOf(" ") + 1);
  	 	var Content = UnsplitContent.substr(UnsplitContent.indexOf(" ") + 1);
        const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('Shouted!')
      // Set the color of the embed
      .setColor(0x00FF80)
      // Set the main content of the embed
      .setDescription('Your message was shouted on discord.');
    // Send the embed to the same channel as the message
    	message.channel.send(embed);//Rest of your code

    	const announcement = new RichEmbed()
      // Set the title of the field
      .setTitle(Title)
      // Set the color of the embed
      .setColor(0x4dc3ff)
      // Set the main content of the embed
      .setDescription(Content);
    // Send the embed to the same channel as the message
   		client.channels.get("482754340738695188").send("@everyone")
    	client.channels.get("482754340738695188").send(announcement)
    }
    else{

    	const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('No Permission')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('You do not have permission to use that command!');
    // Send the embed to the same channel as the message
    	message.channel.send(embed);//Rest of your code

    }
    
  }
});



client.login(token);
