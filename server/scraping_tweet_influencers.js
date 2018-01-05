if (Meteor.isServer) {

var today = moment.parseZone(new Date()).utc().add(2, 'hours').format(); //récupération de la date à l'endroit du serveur
var todaymin5 = moment(today).subtract(5, 'days').utc().format();
console.log('ici c est ' + todaymin5);

Meteor.startup(function () {
    // code to run on server at startup

    var Twit = Meteor.npmRequire('twit');

    var T = new Twit({
        consumer_key:         'N2g6mh8IbvbuY61oN3GXNPTqb', // API key
        consumer_secret:      'CPukCfpeLvYss4bLvEg8uk6tsCF3M3Af5QI6GT6t2uJp3KHEDu', // API secret
        access_token:         '455093348-Cbs7pUPAkD4N3hQSdtnkGqopOFcu96mnfzX2lI2g', 
        access_token_secret:  'VAbKnv0E57hLnyI2vLVp9fKFvwthnQdrKdyLo0RWA2ai4'
    });

    //  search twitter for all tweets containing the word 'banana'
    //  since last One minute

    T.get('search/tweets',
        {
            q: 'from:bitcoin since:'+ todaymin5,
            count: 10
        },
        function(err, data, response) {
            console.log(data);
        }
    );

  });




	SyncedCron.add({
  		name: 'Scrap Tweeter of influencer',
  		schedule: function(parser) {
   			 // parser is a later.parse object
   		 	return parser.recur().on(10).minute();
    		//return parser.text('every 1 hours');
  		},
  		job: function() { 
	

	// .......
	

			console.log(moment(new Date()).format("hA"));
		}
	});

	SyncedCron.start(); // démarrer l'ensemble des Cron du site 

}