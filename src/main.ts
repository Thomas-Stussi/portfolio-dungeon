import Phaser from 'phaser'

import PortfolioDungeon from './scenes/PortfolioDungeon'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 }
		}
	},
	scene: [PortfolioDungeon]
}

export default new Phaser.Game(config)
