$(function() {
	$('input[type=file]').after('<div><span></span></div>');

	// アップロードするファイルを選択
	$('input[type=file]').change(function() {
		var file = $(this).prop('files')[0];

		// 画像以外は処理を停止
		if (! file.type.match('image.*')) {
			// クリア
			$(this).val('');
			$('span').html('');
			return;
		}

		// 画像表示
		var reader = new FileReader();
		reader.onload = function() {
			var img_src = $('<img id="inputImg">').attr('src', reader.result);
			$('span').html(img_src);
		};
		reader.readAsDataURL(file);
	});
});


let inputImg;
let statusMsg;
let transferBtn;

// Create two Style methods with different pre-trained models
const style1 = ml5.styleTransfer('models/wave', modelLoaded);
const style2 = ml5.styleTransfer('models/udnie', modelLoaded);

function setup() {

  noCanvas();
  // Status Msg
  statusMsg = select('#statusMsg');

  // Get the input image
  // inputImg = select('#inputImg');

  // Transfer Button
  transferBtn = select('#transferBtn')
  transferBtn.mousePressed(transferImages);
}

// A function to be called when the models have loaded
function modelLoaded() {
  // Check if both models are loaded
  if(style1.ready && style2.ready){
    statusMsg.html('Ready!')
  }
}

// Apply the transfer to both images!
function transferImages() {
	inputImg = select('#inputImg');

  statusMsg.html('Applying Style Transfer...!');

  style1.transfer(inputImg, function(result) {
    createImg(result.src).parent('styleA');
  });

  style2.transfer(inputImg, function(result) {
    createImg(result.src).parent('styleB');
  });

  statusMsg.html('Done!');
}


