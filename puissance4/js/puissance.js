(function ($) {
    $.fn.puissance = function(options = { jetton1_color: 'yellow', jetton2_color: 'red', row: 6, column:7}) {
        /*****Params*****/
        var player1 = {name: 'Player1', color: options.jetton1_color, compteur_v: 0, compteur_h:0, scor: 0};
        var player2 = {name: 'Player2', color: options.jetton2_color, compteur_v: 0, compteur_h:0, scor: 0};
        var row_nbr = options.row;
        var column_nbr = options.column;
        var position = '';
        var col= '';
        /***************************************Home****************************************/   
        $(this).append('<div id="volet_h"><img src="misc/Puissance4.png" alt="logo"></div>');
        
        $(this).append('<div id="puissance4">\
        <div id="regles">\
        <h4>Une partie de puissance 4 :</h4>\
        <p>\
        Pour commencer une partie de puissance 4, on désigne le premier joueur. Celui ­ci met un de ses jetons de couleur dans l’une des colonnes de son choix. Le jeton tombe alors en bas de la colonne.\
        Le deuxième joueur insère à son tour son jeton, de l’autre couleur dans la colonne de son choix. Et ainsi de suite jusqu’à obtenir une rangée de 4 jetons de même couleur.\
        </p>\
        <h4>Comment gagner une partie de puissance 4 :</h4>\
        <p>\
        Pour gagner une partie de puissance 4, il suffit d’être le premier à aligner 4 jetons de sa couleur horizontalement, verticalement et diagonalement.\
        </p>\
        </div>\
        <div id="start">\
        <button id="devlop">En cours de development</button>\
        <button id="classic">Classique</button>\
        <button id="perso">Personnalisé</button>\
        <button id="vs1">1 Vs 1</button>\
        <button id="vsIA">1 Vs IA</button>\
        <button id="row">\
        <div class="block_select">\
        <label for="select_column">Coloms  :</label>\
        <select id="select_column">\
        <option value="7">7</option>\
        <option value="14">14</option>\
        </select>\
        <label for="select_row">Row :</label>\
        <select id="select_row">\
        <option value="6">6</option>\
        <option value="12">12</option>\
        </select>\
        </div>\
        <div class="block_select">\
        <label for="select_player1">Player 1  :</label>\
        <select id="select_player1">\
        <option value="rgb(255, 165, 0)">Orange</option>\
        <option value="rgb(255, 0, 0)">Red</option>\
        <option value="rgb(255, 192, 203)">Pink</option>\
        </select>\
        </div>\
        <div class="block_select">\
        <label for="select_player2">Player 2 :</label>\
        <select id="select_player2">\
        <option value="rgb(0, 128, 0)">Green</option>\
        <option value="rgb(0, 0, 255)">Blue</option>\
        <option value="rgb(128, 0, 128)">Purple</option>\
        </select>\
        </div>\
        <div id="play">Play</div>\
        </button>\
        </div>\
        </div>');
        
        $(this).append('<div id="volet_b"></div>');
        /***********************************************************************************/
        /*************************************css home*************************************/
        $("body").css({
            margin: '0px',
            padding: '0px',
            border: '0',
            minWidth: '700px'
        });
        
        var slider = {
            background: 'linear-gradient(20deg, #0c57a1, #3f88c5 45%) fixed',
            height: '50vh',
            border: '3px solid rgb(99, 99, 146)'};
            
            $("#volet_h").css(slider);
            $("#volet_b").css(slider);
            
            $("#volet_h img").css({
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto' 
            });
            
            $("#puissance4").css({
                fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important",
                background: 'linear-gradient(60deg, #9e2a38, #e45b51 180%)',
                padding:  '50px 50px 10px 50px',
                // minHeight: '1000px',
                height: '100vh',
            });
            
            $("#regles").css({
                background: 'linear-gradient(60deg, #1b2474, #729ec4 180%)',
                padding: '10px 50px 15px 50px',
                border: '3px solid rgb(60, 40, 116)',
                marginBottom: '50px',
                borderRadius: '10px',
                color: 'azure'
            });
            
            $("#puissance4 button").css({
                color: 'azure',
                background: 'linear-gradient(60deg, #9e2a38, #e45b51 180%)',
                bordeRadius: '10px',
                fontWeight: 'bold'
            });
            
            $("#start").css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                background: 'linear-gradient(60deg, #1b2474, #729ec4 180%)',  
                padding: '10px',
                margin: 'auto',
                marginBottom: '40px',
                width: '550px',
                height: '250px',
                border: '3px solid rgb(53, 57, 110)',
                borderRadius: '10px',
            });
            
            var button_css = {
                padding: '3px',
                height: '120px',
                width: '200px',
                border: '3px solid rgb(100, 41, 41)'};
                
                $("#classic").css(button_css);
                
                $("#perso").css(button_css);
                
                $("#vs1").css(button_css);
                
                $("#vsIA").css(button_css);
                
                $("#devlop").css({
                    borderRadius: '10px',
                });
                
                $("#row").css({
                    padding: '3px',
                    height: '160px',
                    width: '250px',
                    border: '3px solid rgb(100, 41, 41)'
                });
                
                $("#row select").css({
                    marginTop: '10px',
                    marginRight: '20px',
                    marginBottom: '10px',
                });
                
                $("#play").css({
                    margin: 'auto',
                    width: '60px',
                    marginTop: '3px',
                    border: '4px solid rgb(145, 49, 49)',
                    borderRadius: '10px',
                    backgroundColor: 'rgb(180, 42, 42)'
                });
                
                
                
                /***********************************************************************************/
                /***************************Animation open******************************************/
                $('#puissance4').hide();
                $('#devlop').hide();
                $('#vs1').hide();
                $('#vsIA').hide();
                $('#row').hide();
                
                /***tes*/
                // $('#volet_h').hide();
                // $('#volet_b').hide();
                // $('#regles').hide();
                // $('#start').hide();
                /***tes*/
                
                
                $('body').on('click',function(){
                    $('#volet_h').slideUp(1200);
                    $('#puissance4').slideDown(1000);
                    $('#volet_b').delay(700).fadeOut();
                });            
                /********************************************************************************/
                /********************************Classic****************************************/
                $('#classic').on('click',function(){
                    $('#classic').fadeOut(500);
                    $('#perso').fadeOut(500);
                    $('#vs1').delay(500).fadeIn(500);
                    $('#vsIA').delay(500).fadeIn(500);
                    
                    
                    $('#vsIA').on('click',function(){
                        $('#vs1').fadeOut(500);
                        $('#vsIA').fadeOut(500);
                        $('#devlop').delay(500).fadeIn(500);
                        $('#devlop').delay(500).fadeOut(500);
                        $('#vs1').delay(1500).fadeIn(500);
                        $('#vsIA').delay(1500).fadeIn(500);
                    });
                    
                    $('#vs1').on('click',function(){
                        $('#regles').fadeOut(500);
                        $('#start').fadeOut(500);
                        game(row_nbr, column_nbr, player1, player2);
                    });
                });
                /******************************************************************************/
                /********************************Perso****************************************/               
                $('#perso').on('click',function(){
                    $('#classic').fadeOut(500);
                    $('#perso').fadeOut(500);
                    $('#vs1').delay(500).fadeIn(500);
                    $('#vsIA').delay(500).fadeIn(500);
                    
                    $('#vsIA').on('click',function(){
                        $('#vs1').fadeOut(500);
                        $('#vsIA').fadeOut(500);
                        $('#devlop').delay(500).fadeIn(500);
                        $('#devlop').delay(500).fadeOut(500);
                        $('#vs1').delay(1500).fadeIn(500);
                        $('#vsIA').delay(1500).fadeIn(500);
                    });
                    
                    $('#vs1').on('click',function(){
                        $('#vs1').fadeOut(500);
                        $('#vsIA').fadeOut(500);
                        $('#row').delay(500).fadeIn(500);
                        $('#play').on('click',function(){
                            $('#regles').fadeOut(500);
                            $('#start').fadeOut(500);
                            row_nbr = $('#select_row').val();
                            column_nbr = $('#select_column').val();
                            player1.color = $('#select_player1').val();
                            player2.color = $('#select_player2').val();
                            game(row_nbr, column_nbr, player1, player2);
                        });
                    });
                });
                /******************************************************************************/
                /********************************End + function********************************/
                function win_1 () {
                    setTimeout(function(){
                        alert(player1.name + " Win's");
                        $('tr').unbind('click');
                        player1.scor++;
                        $('#player1_scor').html(player1.name + ' : ' + player1.scor);
                    }, 100);
                } 
                
                function win_2 () {
                    setTimeout(function(){
                        alert(player2.name + " Win's");
                        $('tr').unbind('click');
                        player2.scor++;
                        $('#player2_scor').html(player2.name + ' : ' + player2.scor );
                    }, 100);
                } 
                
                function game(row_nbr, column_nbr, player1, player2) {
                    var audio = new Audio('./misc/Q.ogg');
                    audio.play();

                    $("#puissance4").css({
                        overflow: 'scroll',
                        height: '100%',
                    });
                    
                    var turn = player1.color;
                    
                    
                    $('#puissance4').append('<div id="game"></div>');
                    $('#game').css({
                        marginTop: '80px',
                        marginBottom: '200px'
                    });
                    $('#game').append('<div id="div_new_game"><button id="new_game">Nouvelle partie</button></div>');
                    // $('#game').append('<div><button id="undo">Undo</button></div>');

                    $("#div_new_game").css({
                        textAlign: 'center',
                    });

                    $("#new_game").css({
                        fontWeight : 'bold',
                        width: '180px',
                        height : '50px',
                        borderRadius: '10px',
                    });

                    $('#new_game').on('click',function() {
                        window.location.reload();
                    });
                    
                    
                    // $('#game').append('<p id="player1_scor">' + player1.name + ' : ' + player1.scor + '</p>');
                    // $('#game').append('<p id="player2_scor">' + player2.name + ' : ' + player2.scor + '</p>');
                    
                    
                    $('#game').append('<table id="table_jeu">');
                    for (let column = 0; column < column_nbr; column++) {
                        
                        $('#table_jeu').append('<tr class="col" id="col' + column + '" valuer="' + column + '">');
                        for (let row = 0; row < row_nbr; row++) {
                            $('#col' + column).append('<td class="row row' + row + '" value="' +row+ '"></td>');
                        }
                        $('#table_jeu').append('</tr>');
                        
                    }
                    $('#game').append('</table>');
                    
                    $("#table_jeu").css({
                        border: '4px solid rgb(40, 40, 51)',
                        height: '100%',
                        margin: 'auto',
                        padding: '5px',
                        background: 'linear-gradient(60deg, #26308f, #7cacd6 180%)',
                        borderRadius: '5px',
                        transform: 'rotate(90deg)',
                    });
                    
                    $(".col").hover(function(){
                        $(this).css({opacity: '0.8'});
                    }, function(){
                        $(this).css({opacity: '1'});
                    });
                    
                    $(".col").hover(function() {
                        
                    });
                    
                    $("td").css({
                        padding: '35px',
                        backgroundColor: 'rgb(255, 255, 255)',
                        border: '4px solid rgb(64, 52, 80)',
                        borderRadius: '50%'
                    });
                    
                    $('td').css({backgroundColor:'rgb(255, 255, 255)'});
                    $('td').attr({'value':'false'});
                    
                    $('tr').on('click',function(){  
                        
                        if (player1.color == player2.color) {
                            player2.color = prompt("choisissez une autre couleur pour le joueur 2 autre que '" + player2.color + "'");
                        }
                        
                        col = $(this).attr('id');
                        
                        for (let row = row_nbr - 1; row >= 0; row--) {
                            
                            if( $('#' + col +' .row' + row).attr('value') != 'actif' || $('#' + col +' .row' + row).css('backgroundColor') == 'rgb(255, 255, 255)') {
                                
                                $('#' + col +' .row' + row).css({backgroundColor:turn});
                                $('#' + col +' .row' + row).attr({'value':'actif'});
                                
                                if ( turn == player1.color) {
                                    turn = player2.color;
                                    
                                } else 
                                {
                                    turn = player1.color;
                                }
                                
                                position = '.row' + row;
                                
                                for (let column = column_nbr - 1 ; column >= 0; column--) {
                                    
                                    if($('#col' + column + ' ' + position).css('backgroundColor') == player1.color ) {
                                        player1.compteur_h++;
                                        player2.compteur_h = 0;
                                    } else if ($('#col' + column + ' ' + position).css('backgroundColor') == player2.color) {
                                        player2.compteur_h++;
                                        player1.compteur_h = 0;
                                    } else {
                                        player1.compteur_h = 0;
                                        player2.compteur_h = 0;
                                    }
                                    
                                    if (player1.compteur_h > 3) {
                                        setTimeout(win_1(),300);
                                        break;
                                    } else if (player2.compteur_h > 3) {
                                        setTimeout(win_2(),300);
                                        break;
                                    }
                                    $('#undo').on('click',function() {
                                        $('#col' + column + ' ' + position).css({backgroundColor : 'rgb(255, 255, 255)'}) 
                                    })
                                }
                                break;
                            }
                        } 
                        
                        for (let row = row_nbr - 1; row >= 0; row--) {
                            if($('#' + col +' .row' + row).css('backgroundColor') == player1.color ) {
                                player1.compteur_v++;
                                player2.compteur_v = 0;
                            } else if ($('#' + col +' .row' + row).css('backgroundColor') == player2.color) {
                                player2.compteur_v++;
                                player1.compteur_v = 0;
                            }               
                        }   
                        if (player1.compteur_v == 4) {
                            win_1();
                        } else if (player2.compteur_v == 4) {
                            win_2();
                        } 
                    }); 
                }
            }; 
        }(jQuery));