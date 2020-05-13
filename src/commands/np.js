module.exports = {
	name: 'np',
	description: 'Now playing command.',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('No estoy poniendo ninguna música tiiiioooo.');
		return message.channel.send(`🎶 Reproduciendo: **${serverQueue.songs[0].title}**`);
	}
};
