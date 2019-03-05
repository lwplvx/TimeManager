function getDateTime() {
    return new Date().toLocaleString();
}
var obj = {
    time: getDateTime()
};

setInterval(function () {
    obj.time = getDateTime();
}, 500);

var componentName = 'clock';
var tmpId = getTemplateId(componentName);

Vue.component(componentName, {
    data: function () {
        return obj;
    },
    template: getTemplate(tmpId)
});