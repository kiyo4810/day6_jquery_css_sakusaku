var PRX = {};

/**
 * <p>
 * 移動方向
 * PARALLEL: 水平方向
 * VERTICAL: 垂直方向
 * BOTH: 水平・垂直方向
 * </p>
 */
PRX.DIRECTION = {
	'PARALLEL': 0,
	'VERTICAL': 1,
	'BOTH': 9
};

PRX.bgscrollAll2 = function(scrollValue) {
	PRX.bgscrollByDirection($('div.bg1'), PRX.DIRECTION.VERTICAL, parseInt(scrollValue / 4));
	PRX.bgscrollByDirection($('div.bg2'), PRX.DIRECTION.VERTICAL, parseInt(scrollValue / 2));
	var el4 = $('img.el4');
	PRX.scrollElByDirection(el4, PRX.DIRECTION.VERTICAL, scrollValue);
}

/**
 * <p>
 * 画面内の背景を全て移動させる
 * </p>
 */
PRX.bgscrollAll = function() {
	PRX.bgscrollByDirection($('div.bg1'), PRX.DIRECTION.VERTICAL, 20);
	PRX.bgscrollByDirection($('div.bg2'), PRX.DIRECTION.VERTICAL, 5);
};

/**
 * <p>
 * 画面内のエレメントを全て移動させる
 * </p>
 */
PRX.scrollMoveAll = function() {
	var el1 = $('img.el1');
	var move = 10;
	if (el1.offset().top + el1.height() < $(window).height() - move) {
		PRX.scrollElByDirection(el1, PRX.DIRECTION.BOTH, move);
	}
	var el2 = $('img.el2');
	if (el2.offset().top + el2.height() < $(window).height() - move) {
		PRX.scrollElByDirection(el2, PRX.DIRECTION.VERTICAL, move);
	}
	var el3 = $('img.el3');
	if (el3.offset().left + el2.width() < $(window).width() - move) {
		PRX.scrollElByDirection(el3, PRX.DIRECTION.PARALLEL, move);
	}
}

/**
 * <p>
 * 指定されたエレメントのを指定方向に指定値分移動する。
 * 値が整数の場合、（見た目上）左→右及び上→下へ移動し、
 * 値が負数の場合、（見た目上）右→左及び下→上へ移動する
 * また移動量が多いほど移動速度は速くなる
 * </p>
 * @param {jQuery} element 移動する対象のエレメント
 * @param {PRX.DIRECTION} direction 移動する方向
 * @param {numeric} move 移動量
 */
PRX.scrollElByDirection = function(element, direction, move) {
	var moveX = 0;
	var moveY = 0;
	if (direction === PRX.DIRECTION.PARALLEL) {
		moveX = move;
	} else if (direction === PRX.DIRECTION.VERTICAL) {
		moveY = move;
	} else if (direction === PRX.DIRECTION.BOTH) {
		moveX = move;
		moveY = move;
	}
	PRX.scrollEl(element, moveX, moveY);
}

/**
 * <p>
 * 指定されたエレメントの位置を移動する。
 * </p>
 * @param {jQuery} element 移動する対象のエレメント
 * @param {numeric} moveX 水平方向の移動量
 * @param {numeric} moveY 垂直方向の移動量
 */
PRX.scrollEl = function(element, moveX, moveY) {
	var currentTop = element.offset().top;
	var currentLeft = element.offset().left;
	if (moveX) {
		currentLeft = currentLeft + moveX;
	}
	if (moveY) {
		currentTop = currentTop + moveY;
	}
	element.css('top', currentTop);
	element.css('left', currentLeft);
}

/**
 * <p>
 * 指定されたエレメントの背景を指定方向に指定値分移動する。
 * 値が整数の場合、（見た目上）左→右及び上→下へ移動し、
 * 値が負数の場合、（見た目上）右→左及び下→上へ移動する
 * また移動量が多いほど移動速度は速くなる
 * </p>
 * @param {jQuery} element 背景を移動する対象のエレメント
 * @param {PRX.DIRECTION} direction 移動する方向
 * @param {numeric} move 移動量
 */
PRX.bgscrollByDirection = function(element, direction, move) {
	var moveX = 0;
	var moveY = 0;
	if (direction === PRX.DIRECTION.PARALLEL) {
		moveX = move;
	} else if (direction === PRX.DIRECTION.VERTICAL) {
		moveY = move;
	} else if (direction === PRX.DIRECTION.BOTH) {
		moveX = move;
		moveY = move;
	}
	PRX.bgscroll(element, moveX, moveY);
};

/**
 * <p>
 * 指定されたエレメントの背景の位置を移動する。
 * </p>
 * @param {jQuery} element 背景を移動する対象のエレメント
 * @param {numeric} moveX 水平方向の移動量
 * @param {numeric} moveY 垂直方向の移動量
 */
PRX.bgscroll = function(element, moveX, moveY) {
	var currentX = 0;
	var currentY = 0;
	if (element.css('background-position-x')) {
		currentX = parseInt(element.css('background-position-x'));
	}
	if (element.css('background-position-y')) {
		currentY = parseInt(element.css('background-position-y'));
	}
	if (moveX) {
		currentX = currentX + moveX;
	}
	if (moveY) {
		currentY = currentY + moveY;
	}
	element.css('background-position-x', currentX);
	element.css('background-position-y', currentY);
};
