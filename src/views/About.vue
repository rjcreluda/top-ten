<template>
  <div>
    <!-- Background image -->
    <div
      class="p-5 bg-image"
      :style="styleObject"
    >
      <div class="mask">
        <div class="block-big-title">
          <h3 class="first-title-1">About Us</h3>
          <h5 class="second-title-2">
            We offers the top 10 best products & services across a wide variety of categories.
          </h5>
        </div>
      </div>
    </div>
    <!-- Background image -->

    <section class="container py-4 page-content top10-list first-list-top pt-5">
      <!-- content -->
      <div class="row">
        <div class="col-md-8">
          <p>This is a comparison platform that offers users our 10 best options across a wide variety of products and services. We’ve made it our mission to make decisions easier by helping you choose from the top options available. Our team of editors and writers spend hours reviewing products and services, comparing features, and diving into the nitty-gritty details. This way, we give you top-notch lists and reviews saving you time, money, and headaches.</p>
          <h2 class="my-3">How do we do this?</h2>
          <p>Finding the best products and services means setting a high standard. Our diverse team is serious about research. Once our editors select a topic, the team tests (if possible) and evaluates products and services related to those topics. While our comparison lists are the nucleus of Top 10, we also feature product reviews, feature comparisons, guides, articles, how-to’s, tools, videos, and tutorials. We also have a scoring system for products and services based on data compiled from various factors.</p>
          <h2 class="my-3">How do we make money?</h2>
          <p>As our site and audience have grown over the years, so has our mission. What was once a small operation is now a company of hundreds of professional researchers, analysts, web technicians, product developers, editors and more.
          </p>
          <p>While us is a completely free to use service (we don’t charge you to join up or access any of our great content), to ensure we can continue to provide you with the best possible content, we may earn a commission from our partners by promoting their products or services through affiliate links. The compensation we receive from our partners influences where, how, and in what order they appear on our site.</p>
          <h2 class="my-4">What is affiliate link?</h2>
          <p>
            Throughout our website you’ll occasionally come across links in reviews, comparison tables, and articles that when clicked on may earn us a commission or a referral bonus. On occasions, we also feature articles created in cooperation with one more of the partners we work with (these will always be marked as sponsored content).
          </p>
          <p>When it comes to our reviews, it’s important to mention that while we don’t get paid to write a review, our reviews contain affiliate links or buttons which, when clicked on, will redirect you to our partners’ websites.  If you’ve been with us for a while, though, you’ll know that our reviews are honest, even if we do make a commission. If a product has been recommended by Top10.com you can rest assured that our team has researched it fully!</p>
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
        </div>
        <!-- ./ end sidebar -->
      </div>
      <!-- ./ end row -->
    </section>

    <div class="last-block">
      <div class="container">
        <div class="last-title">
          <div class="left-title">Explore more Top10.com Categories</div>
          <!-- <div class="right-title">View all shortlists</div> -->
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
  export default{
    name: 'About',
    data: () => ({
      styleObject: {}
    }),
    created(){
      this.styleObject = {
        /*backgroundImage: `none`,*/
        height: '300px',
        backgroundColor: '#2196f3'
      }
    }
  }
</script>

<style scoped>
  .first-list-top{
    top: 0;
  }
</style>