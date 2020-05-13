module.exports = {
	name: 'volume',
	description: 'Volume command.',
	cooldown: 5,
	execute(message, args) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('No puedes liarla desde fuera del canal de voz tiiiooo!');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('No se está reproduciendo nada, no puedes ajustar así nada tiiiioooo.');
		if (!args[0]) return message.channel.send(`Partiendo la pana al: **${serverQueue.volume}**`);
		serverQueue.volume = args[0]; // eslint-disable-line
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
		return message.channel.send(`Cambiamos el volumen a: **${args[0]}**`);
	}
};
