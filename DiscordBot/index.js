const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
})

// Add Id Here

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', (msg) => {
    if (msg.author.bot) return
    if (msg.content.startsWith("!")) {

        if (msg.content == "!ping") {
            msg.reply('pong!')
        }
        else if (msg.content == '!cheer') {
            msg.reply("Why don't you go Outside and Hangout With Your Friends!")
        }
        else if (msg.content.startsWith('!say')) {
            msg.reply(getArgs(msg))
        }
    }
})

// msg = "<cmd> <args>"
function getArgs(msg) {
    // what if there is a command like !say jkhj jl hkj hg
    let index = msg.content.indexOf(" ")
    let args = msg.content.substring(index + 1)
    return args;
}