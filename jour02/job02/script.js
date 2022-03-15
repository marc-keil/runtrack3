'use strict';

document.addEventListener('DOMContentLoaded', function loaded() {
    var article = document.querySelector('article');
    
    article.style.display = 'none';

    function showhide()
    {
        if(article.style.display !== 'none')
        {
            article.style.display = 'none';
        }
        else
        {
            article.style.display = 'block';
        }
    }
    document.querySelector('button').onclick = showhide;
})