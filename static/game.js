'use strict';

const socket = io();
const canvas = $('#canvas-2d')[0];
const context = canvas.getContext('2d');
const playerImage = $('#player-image')[0];

function gameStart(){
    socket.emit('game-start', {nickname: $("#nickname").val() });
    $("#start-screen").hide();
}
$("#start-button").on('click', gameStart);