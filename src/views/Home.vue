<template>
  <div class="home">
    <!-- Background image -->
    <div
      class="p-5 text-center bg-image"
      style="
        background-image: url('assets/img/ban.png');
        height: 450px;
      "
    >
      <div class="mask">
        <div class="d-flex align-items-center h-100">
          <div class="text-body ms-5">
            <h1 class="mb-3">The top Ten</h1>
            <h4 class="mb-3">Stop search, we provide everything you need</h4>
            <a class="btn btn-warning btn-rounded btn-lg mt-5" href="#!" role="button"
            >Find what you need <i class="fas fa-angle-double-right ms-2"></i></a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Background image -->

    <section class="container py-5">

      <div class="row py-3">
        <div class="col-md-12">
          <h4>Categories</h4>
        </div>
      </div>

      <div class="row">
        <div class="col-md-2" v-for="category in categories" :key="category.name">
            <a :href="'#/category/'+category.link" class="cat-item mb-2 mb-md-0">
              <div class="cat-icon">
                <i :class="'fas '+category.icon+' fa-2x'"></i>
              </div>
              <div class="cat-text">
                {{ category.name }}
              </div>
            </a><!-- .Cat-item -->
        </div><!-- ./col -->

      </div>

    </section>

    <section class="container py-4 page-content top10-list">
      <!-- content -->

      <div class="row">
        <div class="col-md-8">
          <div class="row py-3">
            <div class="col-md-12">
              <h4>Top 10 trending list</h4>
            </div>
          </div>
          <div class="card">
            <div class="card-header"><h5 class="card-title">Meal delivry</h5></div>
            <div class="card-body row">
              <div class="col-md-6">
                <img src="assets/img/meal-delivery.20210105125548.webp" class="img-fluid">
              </div>
              <div class="col-md-6">
                <h4 class="card-title"><router-link class="text-dark" :to="{ name: 'Category', params: { slug: 'food'} }">10 Best Meal Kit Delivery Services for No-Hassle Healthy Meals at Home</router-link></h4>
                <p class="card-text text-muted">March 08 2022</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header"><h5 class="card-title">Dating sites & Apps</h5></div>
            <div class="card-body row">
              <div class="col-md-6">
                <img src="assets/img/dating.20210105130957.webp" class="img-fluid">
              </div>
              <div class="col-md-6">
                <h4 class="card-title"><router-link class="text-dark" :to="{ name: 'Category', params: { slug: 'relationship'} }">The Top 10 Best Dating Sites and Apps 2022</router-link></h4>
                <p class="card-text text-muted">March 08 2022</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header"><h5 class="card-title">DNA Testing</h5></div>
            <div class="card-body row">
              <div class="col-md-6">
                <img src="assets/img/Charticles---DNA-Header.20190812113007.webp" class="img-fluid">
              </div>
              <div class="col-md-6">
                <h4 class="card-title"><router-link class="text-dark" :to="{ name: 'SubCategory', params: { slug: 'health', child_slug: 'dna-testing'} }">The Best DNA Testing Kits 2022 - Trace Your Ancestry and Heritage</router-link></h4>
                <p class="card-text text-muted">March 08 2022</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header"><h5 class="card-title">Website builders</h5></div>
            <div class="card-body row">
              <div class="col-md-6">
                <img src="assets/img/web-builder.webp" class="img-fluid">
              </div>
              <div class="col-md-6">
                <h4 class="card-title"><router-link class="text-dark" :to="{ name: 'SubCategory', params: { slug: 'tech', child_slug: 'website-builder'} }">Website Builders Header
  The Best Website Builders of 2022</router-link></h4>
                <p class="card-text text-muted">March 08 2022</p>
              </div>
            </div>
          </div>
          <div class="text-center py-3">
            <a type="button" class="btn btn-warning btn-rounded btn-lg" href="#">Browse all lists</a>
          </div>
        </div>
        <!-- ./ end content -->
        <!-- sidebar -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h4>Spring Is in the Air!</h4>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="row">
                <div class="col-md-7">
                  <h6>The Best At-Home Fitness Machines of 2022</h6>
                  <p class="text-muted small">March, 22</p>
                </div>
                <div class="col-md-5">
                  <img src="assets/img/Untitled design (18).20220301133825.webp" alt="" class="img-fluid">
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <h6>Top 10 Ways for Women to Improve Their Wellbeing</h6>
              <p class="text-muted small">Nicky - March, 22</p>
            </li>
            <li class="list-group-item">
              <h6>Top 10 Ways to Reduce Your Food Footprint</h6>
              <p class="text-muted small">March, 22</p>
            </li>
          </ul>
          </div>
        </div>
        <!-- ./ end sidebar -->
      </div>
      <!-- ./ end row -->
    </section>

    <section class="py-5">
        <div class="container">
            <div class="row mb-3">
                <div class="col-md-12"><h4>We make it easy to find what <span class="text-danger">you</span> need</h4></div>
            </div>
            <div class="row py-5" style="background-color: #F5F5F5;">
                <div class="col-md-4 d-flex flex-column justify-content-center text-center">
                    <span class="display-4">500+</span>
                    <p>Comparison Lists</p>
                </div>
                <div class="col-md-4 d-flex flex-column justify-content-center text-center">
                    <span class="display-4">5,000+</span>
                    <p>Hours of Research</p>
                </div>
                <div class="col-md-4 d-flex flex-column justify-content-center text-center">
                    <span class="display-4">16M+</span>
                    <p>Decisions made</p>
                </div>
            </div>
        </div>
    </section>

    <!-- STORY SECTION -->
    <section >
        <div class="container">
            <div class="row mb-4">
                <div class="col-md-6 text-center" style="background-color: #FF8897;">
                    <img src="assets/img/our-story.svg" alt="story" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <h3>Our Story</h3>
                    <p>
                        We’ve made it our mission to make decisions easier by narrowing your options down to Top 10 lists from the best brands available.
                    </p>
                    <a href="#">Learn more</a>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-md-6 text-center" style="background-color: #FF8897;">
                    <img src="assets/img/our-story.svg" alt="story" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <h3>Our Team</h3>
                    <p>
                        Our dedicated team rigorously researches and tests hundreds of products and services to create Top 10 lists for each category.
                    </p>
                    <a href="#">Learn more</a>
                </div>
            </div>

            <div class="row mb-4">
                <div class="col-md-6 text-center" style="background-color: #82C6F3;">
                    <img src="assets/img/our-method.svg" alt="story" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <h3>Our Methods</h3>
                    <p>
                        We create a level playing field by scoring every brand based on an algorithm that consists of four parameters.
                    </p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    </section><!-- ./story section -->

    <section class="bg-light py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12"><h4>Explore our categories</h4></div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <ul class="nav nav-tabs mb-3" id="myTab0" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link active"
                            id="home-tab0"
                            data-mdb-toggle="tab"
                            data-mdb-target="#home0"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            All
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link"
                            id="profile-tab0"
                            data-mdb-toggle="tab"
                            data-mdb-target="#profile0"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            Lifestyle
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link"
                            id="contact-tab0"
                            data-mdb-toggle="tab"
                            data-mdb-target="#contact0"
                            type="button"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                          >
                            Business
                          </button>
                        </li>
                      </ul>
                      <div class="tab-content" id="myTabContent0">
                        <div
                          class="tab-pane fade show active"
                          id="home0"
                          role="tabpanel"
                          aria-labelledby="home-tab0"
                        >
                          <div class="row py-3">
                              <div class="col-md-3">
                                Accounting Software
                              </div>
                              <div class="col-md-3">
                                Android Games
                              </div>
                              <div class="col-md-3">
                                Apps For Beer Lovers
                              </div>
                              <div class="col-md-3">
                                Apps for Hikers
                              </div>
                              <div class="col-md-3">
                                Apps to Make You Smarter
                              </div>
                              <div class="col-md-3">
                                Ad Blockers
                              </div>
                              <div class="col-md-3">
                                Android Navigation Apps
                              </div>
                              <div class="col-md-3">
                                Apps for Better Sleep
                              </div>
                              <div class="col-md-3">
                                Apps For Surviving Flu Season
                              </div>
                              <div class="col-md-3">
                                AR games
                              </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="profile0" role="tabpanel" aria-labelledby="profile-tab0">
                            <div class="row py-3">
                                <div class="col-md-3">
                                  Apps For Beer Lovers
                                </div>
                                <div class="col-md-3">
                                  Apps for Hikers
                                </div>
                                <div class="col-md-3">
                                  Apps to Make You Smarter
                                </div>
                                <div class="col-md-3">
                                  Ad Blockers
                                </div>
                                <div class="col-md-3">
                                  Android Navigation Apps
                                </div>
                                <div class="col-md-3">
                                  Apps for Better Sleep
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact0" role="tabpanel" aria-labelledby="contact-tab0">
                            <div class="row py-3">
                                <div class="col-md-3">
                                  Android Games
                                </div>
                                <div class="col-md-3">
                                  Apps for Hikers
                                </div>
                                <div class="col-md-3">
                                  Apps to Make You Smarter
                                </div>
                                <div class="col-md-3">
                                  Ad Blockers
                                </div>
                                <div class="col-md-3">
                                  Android Navigation Apps
                                </div>
                                <div class="col-md-3">
                                  Apps For Surviving Flu Season
                                </div>
                                <div class="col-md-3">
                                  AR games
                                </div>
                            </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  },
  data: () => ({
    categories: null
  }),
  created(){
    this.categories = [
      { name: 'Tech', icon: 'fa-cog', link: 'tech' },
      { name: 'Business', icon: 'fa-briefcase', link: 'business' },
      { name: 'Health', icon: 'fa-capsules', link: 'health/dna-testing' },
      /*{ name: 'Fashion', icon: 'fa-walking', link: 'fashion' },
      { name: 'Food', icon: 'fa-utensils', link: 'food' },*/
      { name: 'Love & Relationship', icon: 'fa-heart', link: 'relationship' },
      { name: 'Entertainment', icon: 'fa-gamepad', link: 'entertainment' },
      { name: 'Shopping', icon: 'fa-shopping-cart', link:'shopping' },
    ];
  }
}
</script>
