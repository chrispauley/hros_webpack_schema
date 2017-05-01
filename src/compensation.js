function requireAll (r) { r.keys().forEach(r); }
requireAll(require.context('../schema/Compensation/json', true, /\.json$/));
