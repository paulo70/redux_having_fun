import { connect } from 'react-redux'
const Video = ({ activeModule, activeLesson }) => {
    return (
        <>
            <div>
                <strong>Modulo: { activeModule.title }</strong>
            </div>
            <div>
                <strong>Aula: { activeLesson.title }</strong>
            </div>
        </>

    )
}

const mapStateToProps = state => ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson,
})

export default connect(mapStateToProps)(Video)