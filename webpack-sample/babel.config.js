module.exports = (api) => {
  api.cache(false);

  const presets = [
    [
      "@babel/preset-env", 
      { 
        targets: {
          browsers: ["last 2 versions", "safari >= 7"]
        },
        useBuiltIns: "entry",
        corejs: 3
      }
    ]
  ];
  
  return { presets };
};
