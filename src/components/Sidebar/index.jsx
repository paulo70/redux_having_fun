import { connect } from "react-redux"

import * as courseAction from '../../store/actions/course'

const Sidebar = ({ modules, toogleLesson }) => {
    return (
        <aside>
            {
                modules.map(module => (
                    <div key={ module.id }>
                        <strong>{ module.title }</strong>
                        <ul>
                            {
                                module.lessons.map(lesson => (
                                    <li key={ lesson.id }>
                                        { lesson.title }
                                        <button onClick={ () => toogleLesson(module, lesson) }>
                                            selecionar
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </aside>
    )
}

const mapStateToProps = state => ({
    modules: state.course.modules
})

const mapDispatchToProps = dispatch => ({
    toogleLesson: (module, lesson) => dispatch(courseAction.toogleLesson(module, lesson))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)