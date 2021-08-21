import Vue from 'vue'
import { Button, 
    Message, 
    Form, 
    FormItem, 
    Input, 
    Container, 
    Header, 
    Aside, 
    Main,
    Menu,
    Submenu,
    MenuItem,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Row,
    Col,
    TableColumn,
    Table,
    Pagination,
    Switch,
    Dialog,
    Tooltip,
    MessageBox,
    Select,
    Option,
    Tag,
    Tree
 } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Pagination)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)

Vue.use(Tree)
Vue.use(Tag)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
