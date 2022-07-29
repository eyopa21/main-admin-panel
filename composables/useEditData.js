export default function() {
    return useState('editdata', () => {
        return {
            editSkill: '',
            editProject: '',
            editTimeline: '',
            editLinks: ''
        }
    })
}