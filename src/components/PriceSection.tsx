const PriceSection = () => {
  return (
    <>
        <section className="price fade-in fade-in-up" id="price">
  <h2 className="price-ttl fade-in fade-in-up">
    価格
    <span>PRICE</span>
  </h2>
  <div className="price-inner fade-in fade-in-up">
    <table>
      <tbody>
        <tr>
          <th>HTMLコーディングトップページ</th>
          <td>30.000円〜</td>
        </tr>
        <tr>
          <th>HTMLコーディング下層1ページ</th>
          <td>10.000円〜</td>
        </tr>
        <tr>
          <th>HTML+WordPressトップページ</th>
          <td>55.000円〜</td>
        </tr>
        <tr>
          <th>HTML+WordPress下層1ページ</th>
          <td>15.000円〜</td>
        </tr>
      </tbody>
    </table>
    <p>＊詳細な価格はページや仕様によって異なります</p>
  </div>
</section>

    </>
  );
};

export default PriceSection;
