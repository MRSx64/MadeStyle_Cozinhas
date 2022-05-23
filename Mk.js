function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const menu = document.querySelector('.menu');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    menu.classList.toggle('active');
  }
  