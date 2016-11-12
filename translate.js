// Code goes here

var app = angular.module('theApp', ['pascalprecht.translate']);

app.config(function($translateProvider) {
	$translateProvider.translations('en', {
		en: 'English',
		no: 'Norsk',
        TITLE:'Live together',
        MENU_PURPOSE:'Purpose',
        MENU_ABOUT_US:'About us',
        MENU_EVENTS:'Events',
        MENU_DONATION:'Donation',
        MENU_CONTACT_US:'Contact us',    
        PURPOSE_PARAGRAPH:'LevSaman assists refugees and other people of concern to integrate in the Norwegian society by providing them the needed trainings and coaching',
        ABOUT_US_PARAGRAPH:'We believe that we can live all together, and the best way is by helping each other as much as we can. With the right training and coaching, every individual will be a positive element for the Norwegian society :)',
        EVENTS_PARAGRAPH:'Join us each Friday from 18:00 to 22:00 for free driving lesson and/or IT/english training',
        EVENTS_PARAGRAPH_VOLUNTEER:'We are looking for volunteers to make a difference in the community. Join us to teach Refugees how to drive (car is provided), please fill out the following form : ',
        DONATION_PARAGRAPH:'You can also make a difference in your community by supporting LevSaman:',
        BANK_INFORMATION:'Bank information',
        ADDRESS:'Address',
        CONTACT_US_PARAGRAPH:'',
        SPONSOR:'Sponsor'
	})
	.translations('no', {
		en: 'English',
		no: 'Norsk',
        TITLE:'LevSaman',
        MENU_PURPOSE:'Formål',
        MENU_ABOUT_US:'Om oss',
        MENU_EVENTS:'Hendingar',
        MENU_DONATION:'Donasjon',
        MENU_CONTACT_US:'Kontakt oss',    
        PURPOSE_PARAGRAPH:'LevSaman hjelper flyktningar og andre som treng det med integrering i det norske samfunnet ved å tilby naudsynt opplæring og rettleiing',
        ABOUT_US_PARAGRAPH:'Vi trur at vi kan leve saman, og den beste måten er ved å hjelpe kvarandre så mykje som mogleg. Med rett opplæring og rettleiing vil kvar einskild kunne være eit positivt element for det norske samfunnet :)',
        EVENTS_PARAGRAPH:'Bli med oss kvar fredag frå kl 18:00 til 22:00 for gratis kjøretime og IT / engelsk opplæring',
        EVENTS_PARAGRAPH_VOLUNTEER:'Vi ser etter frivillige til å gjøre en forskjell i samfunnet. Bli med oss å lære flyktninger å kjøre bil (bil stilles til rådighet) ved å fylle ut følgende skjema: ',
        DONATION_PARAGRAPH:'Du kan også gjere ein forskjell i samfunnet ved å støtte LevSaman:',
        BANK_INFORMATION:'Kontonummer',
        ADDRESS:'Adresse',
        CONTACT_US_PARAGRAPH:'',
        SPONSOR:'Sponsor'
	});

	$translateProvider.preferredLanguage('no');
});

app.controller('HomeCtrl', function($translate) {
  var ctrl = this;
  
  ctrl.language = 'no';
  
	ctrl.languages = ['en', 'no'];

	ctrl.updateLanguage = function() {
		$translate.use(ctrl.language);
	};
});