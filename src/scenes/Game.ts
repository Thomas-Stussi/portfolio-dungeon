import Phaser from 'phaser'

export default class Game extends Phaser.Scene
{
	constructor()
	{
		super('game')
	}

	preload()
    {
    }

    create()
    {

        // this.add.image(0, 0, 'tiles')
        const map = this.make.tilemap({ key: 'dungeon'})
        const tileset = map.addTilesetImage('dungeon', 'tiles')

        map.createLayer('Ground', tileset)
        const wallsLayer = map.createLayer('Walls', tileset)

        wallsLayer.setCollisionByProperty({collides: true})
    }
}
