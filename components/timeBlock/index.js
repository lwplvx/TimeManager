var componentName = 'timeBlock';
var tmpId = getTemplateId(componentName);

// 定义一个名为 time-block 的新组件
Vue.component(componentName, {
    created: function () {
        // `this` 指向 vm 实例

    },
    mounted: function () {

        //this.value = this.value || '这是我的 Time Block 组件';
        if (!this.value.content) {
            this.value.content = this.value.type;
        }
    },
    data: function () {
        return {
            isEdit: false,
        };
    },
    props: ['value'],
    computed: {
        // 计算属性的 getter
        classObject: function () {
            var c = 'alert alert-' + this.value.type;
            return c;
        }
    },
    template: getTemplate(tmpId),
    methods: {
        dblclick: function () {
            this.isEdit = !this.isEdit;
            if (!this.isEdit) {
                this.$emit('contentchange');
            }
        },
        closeClick: function () {
            this.$emit('close', this.value);
        },
        textareaChange: function () {
            this.$emit('contentchange');
        },
    }

});