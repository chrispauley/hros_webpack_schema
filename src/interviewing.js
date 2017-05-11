function requireAll (r) { r.keys().forEach(r); }
requireAll(require.context('../schema/interviewing/json', true, /\.json$/));
