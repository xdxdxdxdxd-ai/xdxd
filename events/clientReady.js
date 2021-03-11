const Discord = require("discord.js");
const client = global.client;
const config = require('../config.json')
const fs = require('fs')

exports.execute = async () => {
    client.user.setPresence({ activity: { name: "youtube.com/linlords • Jasper was here"}, status: "idle" });
  };

exports.conf = {
  event: "ready"
};