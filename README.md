# Installing
```shell
npm install --save-dev https://github.com/ffMathy/FluffySpoon.JavaScript.CSharpToTypeScriptGenerator.Grunt.git
```

# Use
```javascript
module.exports = function(grunt) {

  grunt.initConfig({
    // Generate TypeScript interfaces from C# files in Models and put them into Scripts as one .d.ts file for every .cs file.
    "@fluffy-spoon/javascript.csharp-to-typescript-generator.grunt": {
      'Scripts': ['Models/*.cs'],
      options: {
        //options go here
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['@fluffy-spoon/javascript.csharp-to-typescript-generator.grunt']);

};
```

To see what options are available, go here: https://github.com/ffMathy/FluffySpoon.JavaScript.CSharpToTypeScriptGenerator
