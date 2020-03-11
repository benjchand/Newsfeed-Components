// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    console.log(this);
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.textContent = 'Expand';
    this.expandButton.addEventListener('click', () => {
      this.expandArticle();
    })
  }

  expandArticle() {
    // console.log(this)
    this.domElement.classList.toggle('article-open')

    // Using our reference to the domElement, toggle a class to expand or hide the article.

  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  



- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articles = document.querySelectorAll('.article')
articles.forEach(function (oldArticle) {
  return new Article(oldArticle)
})