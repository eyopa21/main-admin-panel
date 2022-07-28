export default function() {
    return useState('state', () => {
        return {
            showSideBar: false,
            closeSidebar: true,
            showModal: false
        }
    })
}