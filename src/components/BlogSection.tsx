const BlogSection = () => {
  return (
<section className="blog fade-in fade-in-up">
  <div className="blog__inner">
    <div className="blog__title">
      <h2 className="blog-ttl fade-in fade-in-up">
        ブログ
        <span>BLOG</span>
      </h2>
    </div>
    <div className="cards fade-in fade-in-up">
      <div className="card-blog fade-in fade-in-up">
        <figure className="card__img-wrapper">
          <img
            src="img/austin-distel-wawEfYdpkag-unsplash.png"
            alt=""
            className="card__img"
          />
        </figure>
        <div className="card__body">
          <h3 className="blog-card__title">
            サイトをリニューアルオープンしました
            <br />
          </h3>
        </div>
        <div className="blog-card__date">2020.01.23 </div>
      </div>
      <div className="card-blog fade-in fade-in-up">
        <figure className="card__img-wrapper">
          <img
            src="img/dylan-gillis-KdeqA3aTnBY-unsplash.png"
            alt=""
            className="card__img"
          />
        </figure>
        <div className="card__body">
          <h3 className="blog-card__title">
            WebサイトでSEO内部施策に適したコーディングでどれぐらいサイトが早くなるのか検証してみました
          </h3>
        </div>
        <div className="blog-card__date">2020.01.23 </div>
      </div>
      <div className="card-blog fade-in fade-in-up">
        <figure className="card__img-wrapper">
          <img
            src="img/brooke-cagle-g1Kr4Ozfoac-unsplash.png"
            alt=""
            className="card__img"
          />
        </figure>
        <div className="card__body">
          <div className="card__body__title">
            <h3 className="blog-card__title">
              ユアコーディングではデザイナーの方を広く募集しています。
            </h3>
          </div>
        </div>
        <div className="blog-card__date">2020.01.23 </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default BlogSection;
