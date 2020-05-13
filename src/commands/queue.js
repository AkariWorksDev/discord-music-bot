module.exports = {
	name: 'queue',
	description: 'Queue command.',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('No está nada en la cola tiiooooo.');
		return message.channel.send(`
__**Lista de pedidos:**__

${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}

**Reproduciendo:** ${serverQueue.songs[0].title}
		`);
	}
};
