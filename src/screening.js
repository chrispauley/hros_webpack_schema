function requireAll (r) { r.keys().forEach(r); }
requireAll(require.context('../schema/screening/json', true, /\.json$/));
