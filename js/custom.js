// var cnic = document.querySelector('#cnic');
// cnic.addEventListener('keyup', function(e) {
// 	if (event.key != 'Backspace' && (cnic.value.length === 5 || cnic.value.length === 13)) {
//   		cnic.value += '-';
//   	}
// });

window.addDash = function addDash(a) {
    var b = /(\D+)/g,
        npa = '',
        nxw = '',
        last1 = '';
    a.value = a.value.replace(b, '');
    npa = a.value.substr(0, 5);
    nxw = a.value.substr(5, 7);
    last1 = a.value.substr(12, 1);
    a.value = npa + '-' + nxw + '-' + last1;
}

// var mobile = document.querySelector('#mobile-no');
// mobile.addEventListener('keyup', function(e) {
// 	if (event.key != 'Backspace' && (mobile.value.length === 4)) {
//   		mobile.value += '-';
//   	}
// });

window.addDashe = function addDashe(c) {
    var d = /(\D+)/g,
        npb = '',
        nxx = '';
        //last2 = '';
    c.value = c.value.replace(d, '');
    npb = c.value.substr(0, 4);
    nxx = c.value.substr(4, 7);
    //last2 = f.value.substr(6, 4);
    c.value = npb + '-' + nxx ;
}

// var vcnic = document.querySelector('#vendor-cnic');
// vcnic.addEventListener('keyup', function(e) {
// 	if (event.key != 'Backspace' && (vcnic.value.length === 5 || vcnic.value.length === 13)) {
//   		vcnic.value += '-';
//   	}
// });

window.addDashes = function addDashes(e) {
    var f = /(\D+)/g,
        npc = '',
        nxy = '',
        last3 = '';
    e.value = e.value.replace(f, '');
    npc = e.value.substr(0, 5);
    nxy = e.value.substr(5, 7);
    last3 = e.value.substr(12, 1);
    e.value = npc + '-' + nxy + '-' + last3;
}

window.addDashess = function addDashess(g) {
    var h = /(\D+)/g,
        npc = '',
        nxy = '',
        last4 = '',
		last = '';
    g.value = g.value.replace(h, '');
    npc = g.value.substr(0, 4);
    nxy = g.value.substr(4, 4);
    last4 = g.value.substr(8, 4);
	last = g.value.substr(12, 4);
    g.value = npc + ' ' + nxy + ' ' + last4 + ' ' + last;
}

var card = document.querySelector('#ccnum');
card.addEventListener('keyup', function(e) {
	if (event.key != 'Backspace' && (card.value.length === 4 || card.value.length === 9 || card.value.length === 14)) {
  		card.value += ' ';
  	}
});

// var cexpiry = document.querySelector('#card-expiry');
// cexpiry.addEventListener('keyup', function(e) {
// 	if (event.key != 'Backspace' && (cexpiry.value.length === 2)) {
//   		cexpiry.value += '/';
//   	}
// });

$('#accountno').bind('keypress', function (event) {
    var regexa = new RegExp("^[a-zA-Z0-9\b]+$");
    var keya = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regexa.test(keya)) {
       event.preventDefault();
       return false;
    }
});

$('#mobileno').bind('keypress', function (event) {
    var regexm = new RegExp("^[0-9\b]+$");
    var keym = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regexm.test(keym)) {
       event.preventDefault();
       return false;
    }
});

$('#cnic').bind('keypress', function (event) {
    var regexc = new RegExp("^[0-9\b]+$");
    var keyc = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regexc.test(keyc)) {
       event.preventDefault();
       return false;
    }
});

$('#vendorcnic').bind('keypress', function (event) {
    var regexvc = new RegExp("^[0-9\b]+$");
    var keyvc = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regexvc.test(keyvc)) {
       event.preventDefault();
       return false;
    }
});

$('#ccnum').bind('keypress', function (event) {
    var regexcn = new RegExp("^[0-9\b]+$");
    var keycn = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regexcn.test(keycn)) {
       event.preventDefault();
       return false;
    }
});

$('#cardname').bind('keypress', function (event) {
    var regexcnm = new RegExp("^[a-zA-Z \b]+$");
    var keycnm = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regexcnm.test(keycnm)) {
       event.preventDefault();
       return false;
    }
});

// $('#month').bind('keypress', function (event) {
//     var regexcm = new RegExp("^[0-9\b]+$");
//     var keycm = String.fromCharCode(!event.charCode ? event.which : event.charCode);
//     if (!regexcm.test(keycm)) {
//        event.preventDefault();
//        return false;
//     }
// });

// $('#year').bind('keypress', function (event) {
//     var regexcy = new RegExp("^[0-9\b]+$");
//     var keycy = String.fromCharCode(!event.charCode ? event.which : event.charCode);
//     if (!regexcy.test(keycy)) {
//        event.preventDefault();
//        return false;
//     }
// });

$('#cvc').bind('keypress', function (event) {
    var regexcvc = new RegExp("^[0-9\b]+$");
    var keycvc = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regexcvc.test(keycvc)) {
       event.preventDefault();
       return false;
    }
});

// Bank Form

function formatBank (bank) {
	if (!bank.id) {
	  return bank.text;
	}
	var baseUrl = "images/bank";
	var $bank = $(
	//   '<span><img src="' + baseUrl + '/' + bank.element.value.toLowerCase() + '.png" class="img-flag" /> ' + bank.text + '</span>'
	'<span><img class="img-flag" /> <span></span></span>'
	);
	$bank.find("span").text(bank.text);
  	$bank.find("img").attr("src", baseUrl + "/" + bank.element.value.toLowerCase() + ".png");
	return $bank;
};

// $(".bank").select2({
//  	templateResult: formatBank,
//  	templateSelection: formatBank
// });

$(document).ready(function () {

    $('.bank').on('change', function () {
        $(this).valid();
    });

    $(".bank").select2({
		templateResult: formatBank,
		templateSelection: formatBank
   	});

    var validator = $("#bankForm").validate();

});

$(document).ready(function() {
	// Custom method to validate username
	$(".next").click(function() {
		var form = $("#bankForm");
		form.validate({
			errorElement: 'label',
			errorClass: 'error',
			highlight: function(element, errorClass, validClass) {
				//$(element).closest('.form-group').addClass("has-error");
				$(element).parents('.form-control').removeClass('has-success').addClass('has-error');
			},
			unhighlight: function(element, errorClass, validClass) {
				//$(element).closest('.form-group').removeClass("has-error");
				$(element).parents('.form-control').removeClass('has-success').addClass('has-error');
			},
			errorPlacement: function (error, element) {
				if (element.parent('.form-group').length) {
					error.insertAfter(element.parent());
				} else if (element.hasClass('select2')) {
					error.insertAfter(element.next('span'));
				} else {
					error.insertAfter(element);
				}
			},
			rules: {
				bankaccount: {
					required: true,
				},
				accountno: {
					required: true,
				},
				cnic: {
					required: true,
				},
			},
			// messages: {
			// 	bankaccount: {
			// 		required: "This field is Required",
			// 	},
			// 	accountno: {
			// 		required: "This Field is Required",
			// 	},
			// 	cnic: {
			// 		required: "This Field is Required",
			// 	},
			// }
		});
		if(form.valid() === true) {
			if($('#bank_information_1').is(":visible")) {
				current_fs = $('#bank_information_1');
				next_fs = $('#bank_information_2');
			} else if($('#bank_information_2').is(":visible")) {
				current_fs = $('#bank_information_2');
				// next_fs = $('#account_information');
			}
			next_fs.show();
			current_fs.hide();
		}
	});
	$('#previous').click(function() {
		if($('#bank_information_2').is(":visible")) {
			current_fs = $('#bank_information_2');
			next_fs = $('#bank_information_1');
		} else if($('#bank_information_2').is(":visible")) {
			current_fs = $('#bank_information_2');
			//next_fs = $('#company_information');
		}
		next_fs.show();
		current_fs.hide();
	});
});


// Wallet Bank

function formatWallet (wallet) {
	if (!wallet.id) {
	  return wallet.text;
	}
	var baseUrl = "images/wallet";
	var $wallet = $(
	//  '<span><img src="' + baseUrl + '/' + wallet.element.value.toLowerCase() + '.png" class="img-flag" /> ' + wallet.text + '</span>'
	'<span><img class="img-flag" /> <span></span></span>'
	);
	$wallet.find("span").text(wallet.text);
  	$wallet.find("img").attr("src", baseUrl + "/" + wallet.element.value.toLowerCase() + ".png");
	return $wallet;
};

// $(".vendor").select2({
// 	templateResult: formatWallet,
// 	templateSelection: formatWallet
// });

$(document).ready(function () {

    $('.vendor').on('change', function () {
        $(this).valid();
    });

    $(".vendor").select2({
		templateResult: formatWallet,
		templateSelection: formatWallet
   	});

    var validators = $("#walletForm").validate();

});

// $("#walletForm").validate();

$("#walletForm").validate({
	highlight: function (element, errorClass, validClass) {
		$(element).parents('.form-control').removeClass('has-success').addClass('has-error');     
	},
	unhighlight: function (element, errorClass, validClass) {
		$(element).parents('.form-control').removeClass('has-error').addClass('has-success');
	},
	errorPlacement: function (error, element) {
		if (element.parent('.form-group').length) {
			error.insertAfter(element.parent());
		} else if (element.hasClass('select2')) {
			error.insertAfter(element.next('span'));
		} else {
			error.insertAfter(element);
		}
	}
});


// Card Form

$("#cardForm").validate();

(function() {
	var ccnum  = document.getElementById('ccnum'),
		type   = document.getElementById('ccnum-type'),
		expiry = document.getElementById('expiry'),
		cvc    = document.getElementById('cvc'),
		submit = document.getElementById('submit'),
		result = document.getElementById('result');
  
	payform.cardNumberInput(ccnum);
	payform.expiryInput(expiry);
	payform.cvcInput(cvc);
  
	ccnum.addEventListener('input',   updateType);
  
	submit.addEventListener('click', function() {
	  var valid     = [],
		  expiryObj = payform.parseCardExpiry(expiry.value);
  
	  valid.push(fieldStatus(ccnum,  payform.validateCardNumber(ccnum.value)));
	  valid.push(fieldStatus(expiry, payform.validateCardExpiry(expiryObj)));
	  valid.push(fieldStatus(cvc,    payform.validateCardCVC(cvc.value, type.innerHTML)));
  
	  result.className = 'emoji ' + (valid.every(Boolean) ? 'valid' : 'invalid');
	});
  
	function updateType(e) {
	  var cardType = payform.parseCardType(e.target.value);
	  type.innerHTML = cardType || 'invalid';
	}
  
  
	function fieldStatus(input, valid) {
	  if (valid) {
		removeClass(input.parentNode, 'error');
		document.getElementById("error1").innerHTML = ""
		document.getElementById("error2").innerHTML = ""
		document.getElementById("error3").innerHTML = ""
	  } else {
		addClass(input.parentNode, 'error');
		document.getElementById("error1").innerHTML = "required"
		document.getElementById("error2").innerHTML = "required"
		document.getElementById("error3").innerHTML = "required"
	  }
	  return valid;
	}
  
	function addClass(ele, _class) {
	  if (ele.className.indexOf(_class) === -1) {
		ele.className += ' ' + _class;
	  }
	}
  
	function removeClass(ele, _class) {
	  if (ele.className.indexOf(_class) !== -1) {
		ele.className = ele.className.replace(_class, '');
	  }
	}
})();

// OTP

$(document).ready(function () {
	$(".otp-form *:input[type!=hidden]:first").focus();
	let otp_fields = $(".otp-form .otp-field"),
	otp_value_field = $(".otp-form .otp-value");
	otp_fields
		.on("input", function (e) {
			$(this).val(
				$(this)
					.val()
					.replace(/[^0-9]/g, "")
			);
			let opt_value = "";
			otp_fields.each(function () {
				let field_value = $(this).val();
				if (field_value != "") opt_value += field_value;
			});
			otp_value_field.val(opt_value);
		})
		.on("keyup", function (e) {
			let key = e.keyCode || e.charCode;
			if (key == 8 || key == 46 || key == 37 || key == 40) {
				// Backspace or Delete or Left Arrow or Down Arrow
				$(this).prev().focus();
			} else if (key == 38 || key == 39 || $(this).val() != "") {
				// Right Arrow or Top Arrow or Value not empty
				$(this).next().focus();
			}
		})
		.on("paste", function (e) {
			let paste_data = e.originalEvent.clipboardData.getData("text");
			let paste_data_splitted = paste_data.split("");
			$.each(paste_data_splitted, function (index, value) {
				otp_fields.eq(index).val(value);
			});
		});
});

let timerOn = true;

function otptimer(remaining) {
    var m = Math.floor(remaining / 60);
    var s = remaining % 60;
  
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    document.getElementById('otp-timer').innerHTML = m + ':' + s;
    remaining -= 1;
  
    if(remaining >= 0 && timerOn) {
        setTimeout(function() {
            otptimer(remaining);
        }, 1000);
        return;
    }

    if(!timerOn) {
    // Do validate stuff here
        return;
    }
}

otptimer(120);


//Session

var deadline = new Date("Dec 02, 2022 13:00:00").getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
	var t = deadline - now;
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
	// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60 ));
	var minutes = Math.floor(t / (1000 * 60 ));
	var seconds = Math.floor((t % (1000 * 60)) / 1000);
	document.getElementById("timer").innerHTML = "<div class='minutes'>" + minutes + "</div> : <div class='seconds'>" + seconds + '</div>';
		if (t < 0) {
			clearInterval(x);
			document.getElementById("timer").innerHTML = "EXPIRED";
		}
}, 1000);

$(document).ready(function() {
	$(document).on('click', '#pay', function(e) {
		if($('#bank-confirmation').hasClass('d-none')) {
			$('#bank-confirmation').removeClass('d-none');
			$('#bank-confirmation').addClass('d-block');
			$('#payment').addClass('d-none');
		}
	});

	$(document).on('click', '#pay', function(e) {
		if($('#myModal').hasClass('d-none')) {
			$('#myModal').removeClass('d-none');
			
		}
	});

	// $("#walletForm").validate();

	// $(document).on('click', '.back', function(e) {
	// 	if($('#myModal').hasClass('show')) {
	// 		$('#myModal').css("display", "none")
	// 		$('.modal-backdrop').removeClass('show');
	// 		$('.modal-backdrop').addClass('hide');
	// 	}
	// });

	$(document).on('click', '.wallet-div', function(e) {
		if($('#wallet-confirmation').hasClass('d-none')) {
			$('#wallet-confirmation').removeClass('d-none');
			$('#wallet-confirmation').addClass('d-block');
			$('#payment').addClass('d-none');
			$('#myModal').removeClass('show');
			$('#myModal').addClass('hide');
			$('#myModal').css("display", "none")
			$('.modal-backdrop').removeClass('show');
			$('.modal-backdrop').addClass('hide');
			$('.modal-open').css({"overflow": ""});
		}
	});

	// $(document).on('click', '.proceed', function(e) {
	// 	if($('#card-confirmation').hasClass('d-none')) {
	// 		$('#card-confirmation').removeClass('d-none');
	// 		$('#card-confirmation').addClass('d-block');
	// 		$('#payment').addClass('d-none');
	// 	}
	// });

	$(document).on('submit', function(e) {
		$('#card-confirmation').removeClass('d-none');
		$('#card-confirmation').addClass('d-block');
		$('#payment').addClass('d-none');
		e.preventDefault()
	})

	// $(document).on('click', '.home', function(e) {
	// 	if($('#bank-confirmation').hasClass('d-block')) {
	// 		$('#bank-confirmation').addClass('d-none');
	// 		$('#payment').removeClass('d-none');
	// 	}
	// });

	// $(document).on('click', '.home', function(e) {
	// 	if($('#wallet-confirmation').hasClass('d-block')) {
	// 		$('#wallet-confirmation').addClass('d-none');
	// 		$('#payment').removeClass('d-none');
	// 	}
	// });
	
	// $(document).on('click', '.home', function(e) {
	// 	if($('#card-confirmation').hasClass('d-block')) {
	// 		$('#card-confirmation').addClass('d-none');
	// 		$('#payment').removeClass('d-none');
	// 	}
	// });

});

const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');

const focusSibling = function(target, direction, callback) {
	const nextTarget = target[direction];
	nextTarget && nextTarget.focus();
	// if callback is supplied we return the sibling target which has focus
	callback && callback(nextTarget);
}

// input event only fires if there is space in the input for entry. 
// If an input of x length has x characters, keyboard press will not fire this input event.
monthInput.addEventListener('input', (event) => {

	const value = event.target.value.toString();
	// adds 0 to month user input like 9 -> 09
	if (value.length === 1 && value > 1) {
		event.target.value = "0" + value;
	}
	// bounds
	if (value === "00") {
		event.target.value = "01";
	} else if (value > 12) {
		event.target.value = "12";
	}
	// if we have a filled input we jump to the year input
	2 <= event.target.value.length && focusSibling(event.target, "nextElementSibling");
	event.stopImmediatePropagation();
});

yearInput.addEventListener('keydown', (event) => {
	// if the year is empty jump to the month input
	if (event.key === "Backspace" && event.target.selectionStart === 0) {
		focusSibling(event.target, "previousElementSibling");
		event.stopImmediatePropagation();
	}
});
