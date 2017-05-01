// function requireAll (r) { r.keys().forEach(r); }
// requireAll(require.context('../schema/Wellness/json', true, /\.json$/));
require('json-schema-loader!../schema/Wellness/json/WellnessType.json');
