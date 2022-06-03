// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class mapa extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("mapa")
    }

    create() {
        // Fondo del menú principal
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mapa').setScale();
        // Boton para ir al menu
        
        var botonre = this.add.image(70, 70, 'botonvolver').setScale(0.5)
      .setInteractive()
      .on('pointerover', () => this.add.image(70, 70, 'botonvolver2').setScale(0.5))
      .on('pointerout', () => this.add.image(70, 70, 'botonvolver').setScale(0.5))
      .on('pointerdown', () => this.botonreset())
        
    }

    botonreset(){
        this.scene.start('Play');
    }
}