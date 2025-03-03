function showArticle(articleId) {
    // Menyembunyikan semua artikel terlebih dahulu
    const articles = document.querySelectorAll('.article');
    articles.forEach(article => {
        article.classList.remove('show');
    });

    // Menampilkan artikel yang dipilih
    const article = document.getElementById(articleId);
    article.classList.add('show');
}
