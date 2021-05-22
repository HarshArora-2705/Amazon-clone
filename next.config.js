module.exports={
    images:{
        domains: ['links.papareact.com','fakestoreapi.com'],
    },
        future: {
          webpack5: true,
        },
        webpack: function (config, options) {
          config.experiments = {};
          return config;
        },
    
}