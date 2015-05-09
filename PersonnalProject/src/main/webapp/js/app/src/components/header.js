/**@jsx REact.DOM
define(['jquery', 'react', 'components/buttons'],

	function($, React,buttons){


		return {


			Header: React.createClass({displayName:'Header',



				render:function(){

					var ButtonAccueil =null;
					var buttonRight = null;
					
					buttonRight =MCUL.isUserLoggedIn()?buttons.deConnexionButton:buttons.ConnexionButton;

					ButtonAccueil = buttons.accueil;
					
					return(

						<div>
						 	
							{(ButtonAccueil != null)?<ButtonLeft />:''}
							{(ButtonRight != null)?<ButtonRight />:''} 

						</div>


						)


				}
			})
		}

	}
)
*/