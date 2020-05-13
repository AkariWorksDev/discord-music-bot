module.exports = {
	name: 'stop',
	description: 'Stop command.',
	cooldown: 5,
	execute(message) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('Tiiiiiooo tienes que estar en el canal de voz para eso!');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Nada se está reproduciendo así que no puedo parar nada tiiioooo.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Quietos todos, se pararon las reproducciones. Noooo tiiiooo!');
	}
};
