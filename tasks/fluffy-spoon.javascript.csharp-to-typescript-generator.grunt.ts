import { Emitter, EmitOptions } from '@fluffy-spoon/csharp-to-typescript-generator';

module.exports = function(grunt) {

  grunt.registerMultiTask('@fluffy-spoon/javascript.csharp-to-typescript-generator.grunt', 'Converts C# code into TypeScript interfaces.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options() || {};

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
          // Warn on and remove invalid source files (if nonull was set).
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Source file "' + filepath + '" not found.');
            return false;
          } else {
            return true;
          }
        });
      // Concat specified files.
      src.forEach(function(file) {
        // Print a success message.
        grunt.log.writeln('Generating TypeScript code from "' + file["cyan"] + '"...');

        var pathSeparations = file.split('/');
        var fileName = pathSeparations[pathSeparations.length-1];
        var targetFileName = fileName.replace(".cs", ".d.ts");

        var csharpCode = grunt.file.read(file);
        var emitter = new Emitter(csharpCode);
        var typescriptCode = emitter.emit(options);

        // Write the destination file.
        var targetFilePath = f.dest + '/' + targetFileName;
        grunt.file.write(targetFilePath, csharpCode);

        // Print a success message.
        grunt.log.writeln('File "' + targetFilePath["green"] + '" generated.');
      });
    });
  });

};
