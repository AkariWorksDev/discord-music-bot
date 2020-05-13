module.exports = {
	name: 'pause',
	description: 'Pause command.',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ He detenido la música tiiiioooo, solo para ti!');
		}
		return message.channel.send('No estoy reproduciendo ninguna canción tiiiiioooo.');
	}
};
