const { Client, Events, GatewayIntentBits, IntentsBitField} = require("discord.js");
const { TOKEN } = require("./config.json")

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages]
});

client.once(Events.ClientReady, client => {
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
});

client.on(Events.MessageCreate, async message => {
    if (message.author.bot) {return}
    await message.reply("Hey")
    console.log('"' + message["content"] + '", written by ' + message.author.username + "#" + message.author.discriminator);
});

// client.on(Events.InteractionCreate, interaction => {
//     if (interaction.isChatInputCommand()) {
//         if (interaction.isCommand()) {
//             return
//         }
//         interaction.reply("Hello");
//     }
// });


client.login(TOKEN);