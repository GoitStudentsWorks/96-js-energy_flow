const smListFooter = document.querySelector('.sm-list');
const smListHeader = document.querySelector('.heder-link-list');

const listElements = `<li class="sm-list-item heder-link-item">
            <a
              class="sm-link heder-link"
              href="https://www.facebook.com/goITclub/"
              target="_blank"
            >
              <svg class="sm-icon heder-link-icon" aria-label="facebook icon">
                <use href="./img/icons.svg#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li class="sm-list-item heder-link-item">
            <a
              class="sm-link heder-link"
              href="https://www.instagram.com/goitclub/"
              target="_blank"
            >
              <svg class="sm-icon heder-link-icon" aria-label="instagram icon">
                <use href="./img/icons.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li class="sm-list-item heder-link-item">
            <a
              class="sm-link heder-link"
              href="https://www.youtube.com/c/GoIT"
              target="_blank"
            >
              <svg class="sm-icon heder-link-icon" aria-label="youtube icon">
                <use href="./img/icons.svg#icon-youtube"></use>
              </svg>
            </a>
          </li>`;

smListFooter.innerHTML = listElements;
