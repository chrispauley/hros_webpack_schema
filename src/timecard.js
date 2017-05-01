function requireAll (r) { r.keys().forEach(r); }
requireAll(require.context('../schema/Timecard/json', true, /\.json$/));
