function requireAll (r) { r.keys().forEach(r); }
requireAll(require.context('../schema/Screening/json', true, /\.json$/));
