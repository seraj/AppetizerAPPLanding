
function onLoad() {
    const loading = document.getElementById('loading')
    if (loading) {
        loading.classList.add('available')
        setTimeout(() => {
            loading.outerHTML = ''
        }, 1500)
    }
}