module.exports = function(grunt) {
	//project configuration
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		uglify:{
			options: {
				banner: '/*!<%= pkg.name %> <%= grunt.template.today("mm-dd-yyyy") %>*/\n'
			}
			build: {
				src:'<%= pkg.src %>/js/*.js'
				dest:'<%= pkg.des %>/js/*.min.js'
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);

};