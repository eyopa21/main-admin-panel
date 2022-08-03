export default function() {
    return useState('state', () => {
        return {
            showSideBar: false,
            closeSidebar: false,
            showModal: false,
            showConfirm: false,
            previewData: '',
            alert: {
                message: '',
                success: true
            },
            user: ''

        }
    })
}