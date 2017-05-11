function requireAll (r) { r.keys().forEach(r); }
requireAll(require.context('../schema/compensation/json', true, /\.json$/));
