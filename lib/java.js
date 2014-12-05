var cmd = require('spaun');

cmd('mvn', '-f', __dirname+'/..', '-q', 'exec:java', '-Dexec.mainClass="org.nava.jode.sweetness.Node"', 
  function(err, results) {
    if (err) console.log('ERROR::', err.toString());
    (new Function("", results))();
  }
);
