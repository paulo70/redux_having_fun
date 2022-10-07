export function toogleLesson(module, lesson) {
    console.log('action', module)
    return {
        type: 'SET_MODULE_AND_LESSON',
        module,
        lesson

    }
}
