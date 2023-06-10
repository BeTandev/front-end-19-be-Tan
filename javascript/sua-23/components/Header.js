class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = /* html */`
    <header class="w3l-header">
      <div class="container">
        <!--/nav-->
        <nav class="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-sm-3 px-0">
          <a class="navbar-brand" href="index.html">
            <span class="fa fa-newspaper-o"></span> NewsBlog</a>
          <!-- if logo is image enable this   
              <a class="navbar-brand" href="#index.html">
                <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
              </a> -->


          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <!-- <span class="navbar-toggler-icon"></span> -->
            <span class="fa icon-expand fa-bars"></span>
            <span class="fa icon-close fa-times"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <nav class="mx-auto">
              <div class="search-bar">
                <form class="search" action="search.html" method="GET" id="search-form">
                  <input type="search" class="search__input" name="keyword" placeholder="Type something..."
                    onload="equalWidth()" required>
                  <span class="fa fa-search search__icon"></span>
                </form>
              </div>
            </nav>
            <ul class="navbar-nav" id="main-menu" >
              <li class="nav-item active">
                <a class="nav-link" href="index.html">The gioi</a>
              </li>
              <li class="nav-item @@contact__active">
                <a class="nav-link" href="contact.html">Thoi su</a>
              </li>
              <li class="nav-item dropdown @@pages__active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Danh mục khác <span class="fa fa-angle-down"></span>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item @@b__active" href="beauty.html">Beauty</a>
                  <a class="dropdown-item @@fa__active" href="fashion.html">Fashion & Style</a>
                  <a class="dropdown-item @@f__active" href="food.html">Food & Wellness</a>
                  <a class="dropdown-item @@l__active" href="lifestyle.html">lifestyle</a>
                  <a class="dropdown-item @@bs__active" href="blog-single.html">Single post</a>
                  <a class="dropdown-item @@404__active" href="error.html">404 page</a>
                </div>
              </li>
              
            </ul>
          </div>
          <ul id="main-menu">
            <a href="login.html">Login</a>
          </ul>
          <!-- toggle switch for light and dark theme -->
          <div class="mobile-position">
            <nav class="navigation">
              <div class="theme-switch-wrapper">
                <label class="theme-switch" for="checkbox">
                  <input type="checkbox" id="checkbox">
                  <div class="mode-container">
                    <i class="gg-sun"></i>
                    <i class="gg-moon"></i>
                  </div>
                </label>
              </div>
            </nav>
          </div>
          <!-- //toggle switch for light and dark theme -->
      </div>
      </nav>
      <!--//nav-->
    </header>`;
  }
}

customElements.define('header-component', Header);