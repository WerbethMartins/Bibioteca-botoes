// Importação dos módulos
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initGallery } from './gallery.js';

$(document).ready(function() {
    // Inicialização dos módulos
    initNavigation();
    initAnimations();
    initGallery();
});