import React from 'react';
import { Link } from 'react-router-dom';

import HomePNG from '../../../assets/images/home.png';
import TrelloLogo from '../../../assets/images/trello.png';
import * as StyledHome from '../styled-components/home';

export class Home extends React.Component {
  render() {
    return (
      <StyledHome.Wrapper>
        <StyledHome.Header>
          <StyledHome.LogoTrello src={TrelloLogo} alt="Логотип Trello" title="Логотип Trello"/>
          <h1>
            Trello - это бесплатный, гибкий и наглядный способ организовать что угодно с кем угодно.
          </h1>
          <p>
            Выбросьте длинные цепочки электронных писем,
            устаревшие таблицы, не такие уж и клейкие стикеры и неуклюжие программы для управления проектами.
            Trello помогает увидеть все детали проекта с первого взгляда.
          </p>
          <div>
            <button>
              <Link to='/signup'>Зарегистрироваться</Link>
            </button>
            <button>
              <Link to='/signin'>Войти</Link>
            </button>
          </div>
        </StyledHome.Header>
        <div>
          <p>
            Это доска Trello. Это перечень списков, заполненных карточками,
            используемыми вашей командой или непосредственно вами.
          </p>
          <img src={HomePNG} alt="Доска Trello" title="Доска Trello"/>
          <p>
            Перетаскивайте карточки между списками, чтобы показать прогресс.
            Добавляйте столько людей, сколько вам надо, и перетаскивайте их на карточки.
            Добавляйте или меняйте местами списки как вам надо.
            <span>Trello адаптируется к вашим проектам, команде и рабочему процессу.</span>
          </p>
          <p>
            Вы увидите все о вашем проекте просто взглянув на доску,
            и все обновления происходят в реальном времени.
            Тут нечего настраивать и все происходит мгновенно.
          </p>
        </div>
      </StyledHome.Wrapper>
    );
  }
}
