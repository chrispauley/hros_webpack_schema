function requireAll (r) { r.keys().forEach(r); }
requireAll(require.context('../schema/Interviewing/json', true, /\.json$/));
