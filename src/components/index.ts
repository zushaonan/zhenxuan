import SvgIcon from './SvgIcon/index.vue'

const allGloabliComponent = { SvgIcon }
export default {
    install(app: any) {
        Object.keys(allGloabliComponent).forEach(key => {
            app.component(key, allGloabliComponent[key])
        })
    }
}