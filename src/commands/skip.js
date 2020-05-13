module.exports = {
	name: 'skip',
	description: 'Skip command.',
	cooldown: 5,
	execute(message) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('Tronco tienes que estár en el canal de voz para usar eso!');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('No estábamos reproduciendo nada así que no puedo saltarlo tiiiioo.');
		serverQueue.connection.dispatcher.end('Yo también me había cansado de esa canción, siguiente.');
	}
};
