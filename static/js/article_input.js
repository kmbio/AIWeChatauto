const title = "11"
const content = "22"
const title_id = "article-title"
const content_id = "article-content"
function setValue(my_id, my_content) {
    var inputElement = document.getElementById(my_id);
    console.log(inputElement)
    console.log('halo')

    inputElement.value = my_content;
}
setValue(title_id, title)