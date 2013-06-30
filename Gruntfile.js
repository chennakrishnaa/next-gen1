module.exports = function(grunt) {
	//project configuration
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		uglify:{
			
			build: {
				src:'dest/js/<%= pkg.name %>.js',
				dest:'dest/<%= pkg.name%>.min.js'
				
			}
		},
		concat:{
			options: {
				seperator: ';',
				banner: '/*!<%= pkg.name %> <%= grunt.template.today("mm-dd-yyyy") %>*/\n'
			},
			build: {
				src:['js/*.js'],
				dest:'dest/js/<%= pkg.name %>.js'
				/*files: [{
					expand: true,
					cwd:'js/',
					src:'*.js',
					dest:'dest/js/',
					ext:'.min.js'
				}]*/
			}
		},
		copy: {
			main: {
				files: [
				//{expand:true, src:['**','!package.json','!Gruntfile.js','!node_modules/**'], dest:'build/'}
				{expand:true, src:['css/scss/**'], dest:'build/'},
				{expand:true, src:['css/next-gen1.css'], dest:'build/'}
				]
			}
		},
		sass: {
			dist: {
					src: ['css/scss/next-gen1.scss'],
					dest:'css/next-gen1.css' 
			}
		},
		watch: {
			files: ['css/scss/**'],
			tasks:['sass','copy']
		}

	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['sass'])
	//grunt.registerTask('watch',['watch']);
	//grunt.registerTask('default', ['sass','copy']);
	//grunt.registerTask('default', ['concat', 'uglify']);

};