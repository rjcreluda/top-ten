<template>
  <section class="menu-container">
      <div class="container py-2">
        <header>
          <!-- Navbar -->
          <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarExample01"
                aria-controls="navbarExample01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-bars"></i>
              </button>
              <a class="navbar-brand" href="#">
                <img src="assets/img/test.jpg" alt="MDB Logo" loading="lazy" height="50">
              </a>
              <div class="collapse navbar-collapse" id="navbarExample01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item active">
                    <a class="nav-link" aria-current="page" href="/">
                      <i class="fas fa-home"></i>
                    Home</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fas fa-grip-horizontal"></i>
                      Categories
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                     <li v-for="category in $store.state.categories" :key="category.name">
                        <a class="dropdown-item" :href="'#/category/'+category.link">
                          {{category.name}}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <form class="d-flex input-group w-auto me-3 mb-4 mb-md-0">
                <div class="form-outline mr-3">
                  <i class="fas fa-search trailing"></i>
                  <input type="text" id="form1" class="form-control form-icon-trailing" placeholder="Search products/services" />
                </div>
              </form>
              <div class="d-flex align-items-center">
                <button type="button" class="btn btn-primary me-3">
                  Sign up for free
                </button>
              </div>
            </div>
          </nav>
          <!-- Navbar -->
        </header>
      </div>
    </section>
</template>