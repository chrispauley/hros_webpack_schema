function requireAll (r) { r.keys().forEach(r); }
requireAll(require.context('../schema/timecard/json', true, /\.json$/));
