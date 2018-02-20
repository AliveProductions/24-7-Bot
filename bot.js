const  Discord  =  require ( ' diskord.js ' );
const  client  =  neu  Discord.Client ();

Kunde . ein ( ' bereit ' , () => {
    Konsole . log ( " Ich bin bereit! " );
});

Kunde . an ( ' Nachricht ' , Nachricht  => {
    if ( Nachricht . Inhalt  ===  ' Ping ' ) {
    	Nachricht . Antwort ( " Pong " );
  	}
});

// Das muss so sein
Kunde . login ( Prozess . env . BOT_TOKEN );
