const card = document.querySelector('.card')
const sortable = new Sortable.defaults(
    article, {
        draggable: 'article'
    }
)