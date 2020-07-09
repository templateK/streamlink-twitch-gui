const NwBuilder = require( "nw-builder" );


module.exports = function( grunt ) {
	const task = "nwjs";
	const descr = "Build the NW.js application";

	grunt.registerMultiTask( task, descr, function() {
		const done = this.async();
		let options = this.options();
            options.flavor = 'sdk';
            options.versions = '0.46.4';
            console.log("Leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
            console.log(options);
            console.log("Leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");

		const nw = new NwBuilder( options );

		nw.on( "log", grunt.log.debug );
		nw.on( "stdout", grunt.log.debug );
		nw.on( "stderr", grunt.log.debug );

		nw.build()
			.then( () => {
				grunt.log.ok( "NW.js application created." );
				done();
			}, grunt.fail.fatal );
	});

};
