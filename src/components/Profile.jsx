import styled from 'styled-components';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import EditModal from './elements/EditModal';

const StyledDiv = styled.div`
  position: relative;
  border: 1px solid var(--color-gray-200);
  background-color: white;

  .cover {
    height: 200px;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }

  .avatar {
    position: absolute;
    top: 7.75rem;
    left: 1rem;
    width: 140px;
    aspect-ratio: 1/1;
    border: 4px solid white;
    border-radius: 50%;
    overflow: hidden;
  }

  .content {
    padding: 1rem;
  }

  .edit {
    display: flex;
    justify-content: end;

    button {
      cursor: pointer;
      padding: 0.5rem 1rem;
      border: 1px solid var(--color-theme);
      border-radius: 3.125rem;
      color: var(--color-theme);
      background-color: white;
      font-size: var(--fs-basic);

      :hover {
        color: white;
        background-color: var(--color-theme);
      }
    }
  }

  .user {
    margin: 0.75rem 0 0.25rem;
    font-size: var(--fs-h5);

    p {
      color: var(--color-secondary);
      font-size: var(--fs-secondary);
    }
  }

  .content {
    color: var(--color-gray-900);
    font-size: var(--fs-secondary);
  }

  .stats {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-block: 0.5rem;
    color: var(--color-secondary);
    font-size: var(--fs-secondary);

    span {
      margin-right: 0.25rem;
      color: var(--color-gray-900);
    }
  }

  .tabs {
    display: flex;
    justify-content: start;
    color: var(--color-secondary);
    font-weight: 700;

    .category {
      width: 8em;
      display: grid;
      place-items: center;
      border-bottom: 3px solid white;
      line-height: 3em;

      &.active {
        border-bottom: 3px solid var(--color-theme);
        color: var(--color-theme);
      }
    }
  }
`;

export default function Profile({ user }) {
  const { id, name, account, introduction, avatar, cover } = user;
  // todo 需要再調整
  const userFollowingCount = undefined ?? 34;
  const userFollowerCount = undefined ?? 59;
  // todo
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    const nextShowModal = !showModal;
    setShowModal(nextShowModal);
  };
  return (
    <>
      <StyledDiv>
        <div className="cover">
          <img src={cover} alt="user-cover" />
        </div>
        <img className="avatar" src={avatar} alt="avatar" />
        <div className="content">
          <div className="edit">
            <button type="button" onClick={handleShowModal}>
              編輯個人資料
            </button>
          </div>
          <div className="user">
            <b>{name}</b>
            <p>@{account}</p>
          </div>
          <p className="intro">{introduction}</p>
          <div className="stats">
            <NavLink to={`/users/${id}/followings`}>
              <span>{userFollowingCount}</span>個跟隨中
            </NavLink>
            <NavLink to={`/users/${id}/followers`}>
              <span>{userFollowerCount}</span>個跟隨者
            </NavLink>
          </div>
        </div>
        <div className="tabs">
          <NavLink className="category" to={`/users/${id}/tweets`}>
            <p>推文</p>
          </NavLink>
          <NavLink className="category" to={`/users/${id}/replies`}>
            <p>回覆</p>
          </NavLink>
          <NavLink className="category" to={`/users/${id}/likes`}>
            <p>喜歡的內容</p>
          </NavLink>
        </div>
      </StyledDiv>
      {showModal && <EditModal user={user} onClose={handleShowModal} />}
    </>
  );
}
