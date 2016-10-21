import Vote from 'vote';

var VotePlugin = {
    Title: "VotePlugin",
    Author: "metrakit",
    Version: V(0, 1, 0),
    Description: "A plugin for vote directly in-game on the french Rust Top Servers : https://rust.top-serveurs.net",

    Init: function () {
        command.AddChatCommand('vote', this.Plugin, 'VoteCommand');
    },

    VoteCommand: function (player, cmd, arg) {
        player.Reply('You have successfully voted !');
    }
};