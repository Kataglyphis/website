<html>
    <head>
	    <title>
		    Kontaktformularauswertung
		</title>
	</head>
	<body>
	<?php
	    echo "Vorname: " . $_POST["FirstName"] . "<br />";
		echo "Nachname: " . $_POST["LastName"] . "<br />";
		echo "E-Mail: " . $_POST["MailAdress"] . "<br />";
		echo "Themengebiet: " . $_POST["theme"] . "<br />"
	?>
	</body>
</html>
