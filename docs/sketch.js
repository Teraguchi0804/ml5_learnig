// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Style Transfer Image Example using p5.js
This uses a pre-trained model of The Great Wave off Kanagawa and Udnie (Young American Girl, The Dance)
=== */

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
let style1;
let style2;

function setup() {
  noCanvas();
  // Status Msg
  statusMsg = select('#statusMsg');

  // Get the input image
  inputImg = select('#inputImg');

  // Transfer Button
  transferBtn = select('#transferBtn')
  transferBtn.mousePressed(transferImages);

  // Create two Style methods with different pre-trained models
  style1 = ml5.styleTransfer('models/wave', modelLoaded);
  style2 = ml5.styleTransfer('models/udnie', modelLoaded);
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
  statusMsg.html('Applying Style Transfer...!');

  style1.transfer(inputImg, function(err, result) {
    createImg(result.src).parent('styleA');
  });

  style2.transfer(inputImg, function(err, result) {
    createImg(result.src).parent('styleB');
  });

  statusMsg.html('Done!');
}
