//var resolvedSchema = require('json-schema-loader!../schema/Common/json/base/AmountType.json');

function requireAll (r) { r.keys().forEach(r); }
requireAll(require.context('../schema/Common/json/base', true, /\.json$/));
requireAll(require.context('../schema/Common/json/codelist', true, /\.json$/));
requireAll(require.context('../schema/Common/json/communication', true, /\.json$/));
requireAll(require.context('../schema/Common/json/competency', true, /\.json$/));
requireAll(require.context('../schema/Common/json/evaluation', true, /\.json$/));
requireAll(require.context('../schema/Common/json/meta', true, /\.json$/));
requireAll(require.context('../schema/Common/json/organization', true, /\.json$/));
requireAll(require.context('../schema/Common/json/pay', true, /\.json$/));
requireAll(require.context('../schema/Common/json/person', true, /\.json$/));
requireAll(require.context('../schema/Common/json/profile', true, /\.json$/));
requireAll(require.context('../schema/Common/json/work', true, /\.json$/));
