<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <div class="navbar-brand js-scroll-trigger">
      <span class="d-block d-lg-none">YOUR NAME</span>
      <span class="d-none d-lg-block">
        <!-- USE IT <img class="img-fluid img-profile rounded-circle mx-auto mb-2"
        src="https://niochi.com/img/logo_niochi_color.png" alt />-->
        <a href="https://niochi.com">
          <img class="img-fluid mx-auto mb-2"
           src="@/assets/images/niochi.com.png" width="140" alt />
        </a>
      </span>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link js-scroll-trigger">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/experience" class="nav-link js-scroll-trigger">Experience</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/education" class="nav-link js-scroll-trigger">Education</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/skills" class="nav-link js-scroll-trigger">Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/interests" class="nav-link js-scroll-trigger">Interests</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/awards" class="nav-link js-scroll-trigger">Awards</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style>
</style>
