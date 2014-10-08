$(document).ready(function() {
	var playerXsTurn = true;

	// Clicking a square alternately adds an X or O
	$("td").on("click", function() {
		// Don't take your turn if this square already has an X or an O
		if($(this).hasClass("X-marker") || $(this).hasClass("O-marker"))
		{
			return;
		}
		else if(playerXsTurn)
		{
			$(this).addClass("X-marker");
			playerXsTurn = false;
			$("#X").removeClass("current-player");
			$("#O").addClass("current-player");
		}
		else
		{
			$(this).addClass("O-marker");
			playerXsTurn = true;

			$("#X").addClass("current-player");
			$("#O").removeClass("current-player");
		}
	});

	// New game button clears the board
	$(".button").on('click', function() {
		$("td").removeClass("X-marker O-marker");

		playerXsTurn = true;
		$("#X").addClass("current-player");
		$("#O").removeClass("current-player");
	});
});