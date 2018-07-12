/**
 * fileOverview:
 * Project:
 * File: DisplayTop
 * Date: 18/7/1
 * Author: Teraguchi
 */

'use strict';

export default class DisplayTop {

	constructor() {

		this.inputImg = null;
		this.statusMsg = null;
		this.transferBtn = null;

		// // Create two Style methods with different pre-trained models
		// this.style1 = ml5.styleTransfer('./assets/resource/models/wave', this.modelLoaded);
		// this.style2 = ml5.styleTransfer('./assets/resource/models/udnie', this.modelLoaded);

		this.style1 = ml5.styleTransfer('../assets/resource/models/wave', function () {
			window.console.log('aaa');
		});
		this.style2 = ml5.styleTransfer('../assets/resource/models/udnie', this.modelLoaded);

		this.modelLoaded = this._modelLoaded.bind(this);
		this.transferImages = this._transferImages.bind(this);

		this.setup();
		this.setEvents();

	}

	setup() {

		// noCanvas();

		// Status Msg
		this.statusMsg = $('#statusMsg');

		// Get the input image
		this.inputImg = $('#inputImg');

		// Transfer Button
		this.transferBtn = $('#transferBtn');

		let _click = (window.ontouchstart === undefined)? 'click' : 'touchstart';
		$(document).on(_click, this.transferBtn, this.transferImages);

	}

	/**
	 * モデルデータをロード
	 * @private
	 */
	_modelLoaded() {
		window.console.log('modelLoaded!!');
		// Check if both models are loaded
		if(this.style1.ready && this.style2.ready) {
			this.statusMsg.html('Ready!')
		}

	}

	/**
	 *
	 * @private
	 */
	_transferImages() {

		this.statusMsg.html('Applying Style Transfer...!');

		this.style1.transfer(this.inputImg, function(result) {
			createImg(result.src).parent('styleA');
		});

		this.style2.transfer(this.inputImg, function(result) {
			createImg(result.src).parent('styleB');
		});

		this.statusMsg.html('Done!');

	}

	onLoad() {


	}

	setEvents() {

		$(window).on('load', this.onLoad.bind(this));

	}

}