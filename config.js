System.config({

    transpiler: 'typescript',

    typescriptOptions: {
        emitDecoratorMetadata: true
    },

    map: {
        app: "./src",
        'redux': 'https://cdnjs.cloudflare.com/ajax/libs/redux/3.0.4/redux.js'
    },

    packages: {
        app: {
            main: './main.ts',
            defaultExtension: 'ts'
        }
    }

});