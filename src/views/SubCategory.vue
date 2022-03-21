<template>
  <div>
    <!-- Background image -->
    <div
      class="p-5 bg-image"
      style="
        background-image: url('assets/img/bg.jpg');
        height: 450px;
      "
    >
      <div class="mask">
        <div class="block-big-title">
          <h3 class="first-title-1">Top 10 List of {{ $route.params.slug }}</h3>
          <h5 class="second-title-2">
            Whether you're a fashion expert
            or simply want a pair of jeans, explore go-to brands and discover new favorites with these online stores.
          </h5>
        </div>
      </div>
    </div>
    <!-- Background image -->

    <section class="container py-4 page-content top10-list first-list-top">
      <!-- content -->

      <div class="row">
        <div class="date-post">
          <svg width="1em" height="1em" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" font-size="14" class="css-17kk34u"><path d="M8.625 16.25a8.125 8.125 0 100-16.25 8.125 8.125 0 000 16.25z" fill="currentColor"></path><path d="M5.05 8.545l.866-1.126L8.17 9.325l3.64-4.073 1.04.953-4.594 5.027L5.05 8.545z" fill="#F5F5F5"></path></svg>
          <span class="update-date">Last Updated</span>
          <span class="date-article"><b>Mar 2022</b></span>
        </div>
        <div class="col-md-8">

          <div class="card" v-for="(product, index) in products" :key="index">
            <div class="card-header" v-if="index == 0"><h5 class="card-title">Top10.com selects</h5></div>
            <div class="card-body row">
              <div class="col-md-3">
                <div class="left-number">
                  <div class="left-info">
                    <div class="left-index">{{index+1}}</div>
                    <div class="left-circle-border"></div>
                  </div>
                </div>
                <div class="left-logo"><img :src="product.img" class="product-logo-image"></div>
              </div>
              <div class="col-md-6">
                <p class="text-bold">{{ product.title }}</p>
                <ul class="list-group">
                  <li v-for="(attribute, index) in product.attributes" :key="index">{{ attribute }}</li>
                </ul>
              </div>
              <div class="col-md-3">
                  <div class="rigth-red-btn">
                    <div class="middle-red-btn">
                      <a :href="product.url" class="link-btn click-btn">Visite Site</a>
                    </div>
                  </div>
              </div>
            </div>
          </div>

        </div>


        <!-- ./ end content -->
        <!-- sidebar -->
        <div class="col-md-4">
          <div class="card-rigth">
            <div class="rigth-header">
              <div class="rigth-header-black">How we created this </div>
              <div class="rigth-header-red">list</div>
            </div>
            <div class="rigth-body">
              Compiled from <b>“Best of”</b> lists published by the world’s
              most trusted sources, and with our own recommended brands peppered
              in - this <b>Top10</b> list aims to help consumers make smarter decisions.
            </div>
          </div>

          <div class="card-rigth card-2">
            <h3 class="card-2-title">You may also like</h3>
            <div class="content-block">
              <div class="img-content-block">
                <img src="assets/img/profile.png" alt="MDB Logo" loading="lazy" height="100">
              </div>
              <div class="text-content-block">
                <div class="txt1">Best Meal Kit Delivery Services to Try in 2022</div>
                <div class="txt2">Read More</div>
              </div>
            </div>

            <div class="content-block">
              <div class="img-content-block">
                <img src="assets/img/profile.png" alt="MDB Logo" loading="lazy" height="100">
              </div>
              <div class="text-content-block">
                <div class="txt1">Best Meal Kit Delivery Services to Try in 2022</div>
                <div class="txt2">Read More</div>
              </div>
            </div>

            <div class="content-block">
              <div class="img-content-block">
                <img src="assets/img/profile.png" alt="MDB Logo" loading="lazy" height="100">
              </div>
              <div class="text-content-block">
                <div class="txt1">Best Meal Kit Delivery Services to Try in 2022</div>
                <div class="txt2">Read More</div>
              </div>
            </div>
          </div>
        </div>
        <!-- ./ end sidebar -->
      </div>
      <!-- ./ end row -->
    </section>

    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <hr>
        </div>
      </div>

    </div>

    <section class="container py-4 page-content top10-list">
      <!-- content -->
      <div class="row">
        <div class="col-md-8">
            <div class="row">
              <div class="col-md-3">
                <div class="first-row">
                  <div class="block1">
                    <img src="assets/img/test.jpg" alt="MDB Logo" loading="lazy" height="50">
                  </div>
                  <div class="block2">
                    <p>
                      Best Men's Fashion Online
                    </p>
                  </div>
                </div>

                <div class="second-row">
                  <p>
                    We find the 10 best options, so you can make informed decisions on tons of products and services.
                  </p>
                </div>
              </div>
              <div class="col-md-9 second-title">
                <h2 class="main-title-s-3">Men’s Online Shopping: Look Good and Save Yourself Time</h2>
                <p>Want to start shopping online for casual and formal clothes but aren’t sure which website is the right one for your style?</p>
                <p>The online shopping craze has taken over, and has gotten extremely popular thanks to sites such as Amazon and Zappos. These sites sell anything from home goods and cleaning supplies, to food and shoes. Other stores, specifically fashion sites, have caught onto the trend in order to reach the masses.
                  Shoppers not only get some of the best brands out there, but save themselves time that was once required to walk through malls.</p>
                <p>We will breakdown some of the best online fashion sites catered toward men, so you can find what you’re looking for no matter your style!</p>

                <h2>From Casual to Formal</h2>

                <p>When it comes to shopping online, you will most likely want to do your browsing and purchasing in one place and be done. Only on rare occasions will you be required to visit a specific site, say for a wedding tux or shoes from a specific brand.</p>
                <p>One of the most popular all-around men’s fashion sites is <strong>Mr Porter</strong>. The brand is owned by parent company, Net-A-Porter, and is an award-winning global retailer with over 300 international brands. Mr Porter has all kinds of clothes for different occasions, but all of its products are designer items from top brands like Alexander McQueen, Givenchy, Boglioli, and A.P.C. The site also offers express worldwide shipping, as well as a free collection service for returns and exchanges—something that isn’t offered by most other retailers. Another factor that differentiates Mr Porter from other sites is that it combines top fashion with editorial content. The site publishes The Mr Porter Post 6 times a year, which is a journal of looks and the latest brands, and puts out a digital magazine every week. This magazine not only highlights trends, but often features interesting interviews and thought-provoking articles. The site has gotten so popular it has offices in 4 locations across 3 different continents.</p>
                <p>Another men’s fashion site that’s comparable to Mr Porter is <strong>East Dane</strong>, a subsidiary of Amazon that’s very similar. It offers over 120 designer brands, and its clothing ranges in price from $95 for a Mollusk button up short sleeve shirt, to $295 for a Theory jean jacket. East Dane also offers free 3-day shipping and returns on any item. Lastly, the LA-based designer <strong>John Elliott</strong> offers his take on streetwear with a unique selection of denim and leather jackets, oversized tie-dye tees, and beach hoodies that work just as well on the couch as they do on the dance floor. &nbsp;</p>

                <h2>High-end Clothing</h2>

                <p>If you’re in need of attire for a dressy event, such as an art exhibit, ballet at Lincoln Center, or the opera, you will likely want to visit sites geared towards that type of clothing. <strong>Matches Fashion</strong> will not disappoint. The brand was started in 1987 by Tom Chapman, and is headquartered in London. It offers upscale brands such as Fendi, Christian Louboutin, and Haider Ackermann, to name just a few. You can shop by category like activewear, blazers, or suits, or by a specific designer. Another brand similar to Matches Fashion is <strong>SSENSE</strong>. The Montreal-based brand was founded in 2003 by brothers Rami, Firas, and Bassel Atallah. Its style can be described as alternative-chic, and it sells products from a selection of independent, luxury, and streetwear designers. The site has clothing, accessories, and shoes, and offers brands such as Phillip Lim and Acne Studios.</p>
                <p>There are also men’s fashion sites that offer high-end clothes but with an even more alternative twist. Take <strong>End Clothing</strong> for example, which has popular stores in Newcastle and Glasgow. The site offers clothing, footwear, and accessories from top designers, and has some of the trendiest pieces around—think relaxed drawstring chinos, vintage Nike t’s, and Alexander McQueen studded sneakers.&nbsp;</p>
                <p><strong>Spier &amp; Mackay</strong> is another menswear company that brings modern sensibilities to classic gentlemen’s clothing. Here, it’s all about fit--these clothiers combine the best of the old-school tailor and the internet age with off-the-rack and made-to-measure suits and shirts crafted with small touches like Dino Filarte fabrics, Bemberg lining, horn buttons, and Demi Luna stitching. Order custom fit or purchase off-the-rack--either way, you’ll be counting the days until your new digs arrive and you can debut your new look at the office or next cocktail party. &nbsp;</p>

                <h2>For the Price Conscious</h2>

                <p>If you’re looking to spruce up your wardrobe and just want to browse affordable clothing sites in search of great items, check out <strong>ASOS</strong>. The site has been a popular men's fashion website for years and shows no signs of slowing down. It has quality clothing that ranges from casual to formal, prices ranging from low to high, and a helpful customer service department. ASOS offers discounts to students, often has promotions running with discounts of up to 60% off, and goes the extra mile to satisfy its customers. Sort through clothes by category, such as jeans, jumpers and cardigans, loungewear and more. You can also browse by range, like plus-size and tall, or by occasion, like workwear, holiday, or festival. ASOS has tons of different styles and trends to choose from.</p>

                <p>Other sites similar to ASOS that offer affordable yet quality clothes include <strong>Grailed</strong> and <strong>Uniqlo</strong>. Grailed is a community marketplace for men’s clothing that lets anyone sell their unused clothing for money. Since prices are set by the seller, the amounts range, but there is something for everyone, and categories include outerwear, tops, bottoms, footwear, and sneakers. Additionally, the Japanese retailer Uniqlo, launched its online store in 2012, and offers cool and mature clothing for any occasion.</p>
                <h2>Find Your Threads</h2>
                <p>Online retailers have taken the strain and stress away from shopping, allowing all men to look good and keep their wardrobe updated from the comfort of their homes. No matter your style, need, or taste, there’s a men’s fashion site that’s sure to please you.</p>
              </div>

            </div>

        </div>
      </div>
      <!-- ./ end row -->
    </section>

    <div class="last-block">
      <div class="container">
        <div class="last-title">
          <div class="left-title">Explore more Top10.com Categories</div>
          <div class="right-title">View all shortlists</div>
        </div>
        <div class="white-box">
          <div class="table-responsive">
              <table class="table table-bordered">
                  <thead>
                      <tr>
                          <th>Lifestyle</th>
                          <th>Business</th>
                          <th>Health</th>
                          <th>Food</th>
                          <th>Love & Relationships</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Tech</td>
                          <td>Entertainment</td>
                          <td>Shopping</td>
                          <td>Home & Privacy</td>
                          <td>Family & Pets</td>

                      </tr>

                  </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import fashion from '@/data/fashion.json'
  import food from '@/data/food.json'
  import relationship from '@/data/relationship.json'
  import tech from '@/data/tech.json'
  export default{
    name: 'Category',
    data: () => ({
      products: []
    }),
    created(){
      const cat = this.$route.params.slug
      console.log(cat)
      switch( cat ){
        case 'food':
          this.products = food;
          break;
        case 'fashion':
          this.products = fashion;
          break;
        case 'relationship':
          this.products = relationship;
          break;
        case 'tech':
          this.products = tech;
          break;
        default:
        break;
      }
    }
  }
</script>