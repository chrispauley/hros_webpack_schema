// function requireAll (r) { r.keys().forEach(r); }
// requireAll(require.context('../schema/wellness/json', true, /\.json$/));
require('json-schema-loader!../schema/wellness/json/WellnessType.json');
